import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as plotActions from '../redux/actions/plotActions';

class PlotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plot: {
        title: '',
        description: ''
      },
      planetsSearch: '',
      charactersSearch: ''
    };
  }

  handleChangeTitle = (event) => {
    const plot = { ...this.state.plot, title: event.target.value}; 
    this.setState({plot: plot});
  };

  handleChangeDescription = (event) => {
    const plot = { ...this.state.plot, description: event.target.value}; 
    this.setState({plot: plot});
  };

  handleClick = () => {
    this.props.dispatch(plotActions.addPlot(this.state.plot));
  };

  onPlanetSearchChange = (event) => {
    const planetsSearch = event.target.value; 
    this.setState({ planetsSearch: planetsSearch });
  }; 

  getPlanets = () => {
    this.props.dispatch(plotActions.getPlanets(this.state.planetsSearch));
  }

  onCharacterSearchChange = (event) => {
    const charactersSearch = event.target.value; 
    this.setState({ charactersSearch: charactersSearch });
  }; 

  getCharacters = () => {
    this.props.dispatch(plotActions.getCharacters(this.state.charactersSearch));
  }

  render(){
    return (
      <div>
        <Link to="/">
          Back
        </Link>
        <div>
          <textarea 
            type="text" 
            placeholder="Give a title, you must..." 
            value={this.state.plot.title} 
            onChange={this.handleChangeTitle} />
          <br/>
          <textarea
            type="text" 
            placeholder="Give a description, you must..."
            value={this.state.plot.description} 
            onChange={this.handleChangeDescription} />
        </div>  
        <div>
          <input type="text" value={this.state.planetsSearch} onChange={this.onPlanetSearchChange} />
          <button onClick={this.getPlanets}>
            Get Planets
          </button>
          {this.props.planets.map(planet => (
            <div key={planet.name}>
              {planet.name}
            </div>
          ))}
        </div>  
        <div>
          <input type="text" value={this.state.charactersSearch} onChange={this.onCharacterSearchChange} />
          <button onClick={this.getCharacters}>
            Get Characters
          </button>
          {this.props.characters.map(character => (
            <div key={character.name}>
              {character.name}
            </div>
          ))}
        </div> 
        <button onClick={this.handleClick}>
            Save
        </button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    plots: state.plotsState.plots,
    planets: state.plotsState.planetsSearchResult,
    characters: state.plotsState.charactersSearchResult
  }
}

export default connect(mapStateToProps)(PlotDetail);