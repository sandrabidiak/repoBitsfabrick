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
      }
    };
  }

  handleChange = (event) => {
    const plot = { ...this.state.plot, title: event.target.value}; 
    this.setState({plot});
  }

  handleClick = () => {
    this.props.dispatch(plotActions.addPlot({title: "Star Wars"}))
  }

  render(){
    return (
      <div>
        <Link to="/">
          back
        </Link>
        <input type="text" value={this.state.plot.title} onChange={this.handleChange} />
        <button onClick={this.handleClick}>
          Save
        </button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    plots: state.plotsState.plots
  }
}

export default connect(mapStateToProps)(PlotDetail);