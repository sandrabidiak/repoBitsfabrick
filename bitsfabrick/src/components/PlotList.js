import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PlotList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render(){
    return (
      <div>
        <Link to="detail">
          Create Plot List 
        </Link>
        {this.props.plots.map(plot => (
          <div key={plot.id}>
            {plot.title}
            {plot.id}
            <br/>
            {plot.description}
            <br/>
            {plot.planets.map(planet => (
              <div key={planet.name}>
                {planet.name}
              </div>
            ))}
            <br/>
            {plot.characters.map(char => (
              <div key={char.name}>
                {char.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    plots: state.plotsState.plots
  }
}
  
export default connect(mapStateToProps)(PlotList);