import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as plotActions from '../redux/actions/plotActions';

class PlotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plot: {
        title: ''
      },
      planetsSearch: ''
    };
  }

  handleChange = (event) => {
    const plot = { ...this.state.plot, title: event.target.value}; 
    this.setState({plot});
  };

  handleClick = () => {
    this.props.dispatch(plotActions.addPlot(this.state.plot));
  };

  onPlanetSearchChange = (event) => {
    const planetsSearch = event.target.value; 
    this.setState({planetsSearch: planetsSearch});
  }; 

  getPlanets = () => {
    this.props.dispatch(plotActions.getPlanets(this.state.planetsSearch));
  }

  render(){
    return (
      <div>
        <div>
          <Link to="/">
            Back
          </Link>
          <input type="text" value={this.state.plot.title} onChange={this.handleChange} />
          <button onClick={this.handleClick}>
            Save
          </button>
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
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    plots: state.plotsState.plots,
    planets: state.plotsState.planetsSearchResult
  }
}

export default connect(mapStateToProps)(PlotDetail);