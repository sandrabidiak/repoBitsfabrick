import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as plotActions from '../redux/actions/plotActions';

class PlotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      selectedPlanets: [],
      selectedCharacters: [],
      planetsSearch: '',
      charactersSearch: ''
    };
  }

  handleChangeTitle = (event) => {
    this.setState({title: event.target.value});
  };

  handleChangeDescription = (event) => {
    this.setState({description: event.target.value});
  };

  handleClick = () => {
    const plot = {
      title: this.state.title, 
      description: this.state.description,
      planets: this.state.selectedPlanets,
      characters: this.state.selectedCharacters
    }
    this.props.dispatch(plotActions.addPlot(plot));
  };

  onPlanetSearchChange = (event) => {
    const planetsSearch = event.target.value; 
    this.setState({ planetsSearch: planetsSearch });
  }; 

  getPlanets = () => {
    this.props.dispatch(plotActions.getPlanets(this.state.planetsSearch));
  }

  getCharacters = () => {
    this.props.dispatch(plotActions.getCharacters(this.state.charactersSearch));
  }

  selectPlanet = (planet) => {
    let found = this.state.selectedPlanets.find(
      p => p.url === planet.url
    );
    if(!found){
      const planets = [...this.state.selectedPlanets, planet];
      this.setState({ selectedPlanets: planets });  
    }
    console.log(this.state);
  }

  selectCharacters = (character) => {
    let found = this.state.selectedCharacters.find(
      char => char.url === character.url
    );
    if(!found){
      const characters = [...this.state.selectedCharacters, character];
      this.setState({ selectedCharacters: characters });  
    }
    console.log(this.state);
  }

  onCharacterSearchChange = (event) => {
    const charactersSearch = event.target.value; 
    this.setState({ charactersSearch: charactersSearch });
  };   

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
            value={this.state.title} 
            onChange={this.handleChangeTitle} />
          <br/>
          <textarea
            type="text" 
            placeholder="Give a description, you must..."
            value={this.state.description} 
            onChange={this.handleChangeDescription} />
        </div>  
        {this.state.selectedPlanets.map(planet => (
          <div key={planet.name}>
            {planet.name}
          </div>
        ))}
        <br/>
        {this.state.selectedCharacters.map(char => (
          <div key={char.name}>
            {char.name}
          </div>
        ))}
        <div>
          <input 
            type="text"
            placeholder="Planet"  
            value={this.state.planetsSearch} 
            onChange={this.onPlanetSearchChange} />
          <button onClick={this.getPlanets}>
            Select
          </button>
          {this.props.planets.map(planet => (
            <div key={planet.name} onClick={() => {this.selectPlanet(planet)}}>
              {planet.name}
            </div>
          ))}
        </div>  
        <div>
          <input 
            type="text" 
            placeholder="Character" 
            value={this.state.charactersSearch} 
            onChange={this.onCharacterSearchChange} />
          <button onClick={this.getCharacters}>
            Select
          </button>
          {this.props.characters.map(character => (
            <div key={character.name} onClick={() => {this.selectCharacters(character)}}> 
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