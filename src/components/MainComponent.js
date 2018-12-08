import React from 'react'
import ButtonComponent from './ButtonComponent';
import { withStore } from '../store';
import { updateUser, updateUserCountry } from '../actions/userActions';
import { setNumberOfBalls } from '../actions/ballActions';

const mapStore = ({ ball }) => ({
  ball
});

class MainComponent extends React.PureComponent {

  state = {
    numberOfTimesClicked: 0
  }

  increaseNumberOfTimesClicked = () => {
    this.setState((state) => ({
      numberOfTimesClicked: state.numberOfTimesClicked + 1
    }), () => {
      updateUser(this.props.getDispatch)({ name: `Joe ${this.state.numberOfTimesClicked}`})
    });
  }

  updateUserCountry = (e) => {
    updateUserCountry(this.props.getDispatch)(e.target.value);
  }

  updateNumberOfBalls = (e) => {
    setNumberOfBalls(this.props.getDispatch)(e.target.value);
  }

  render() {
    window.console.log("Rendering MainComponent")
    return (
      <div>
        <p>Number of times clicked: {this.state.numberOfTimesClicked}</p>
        <p><input onChange={this.updateUserCountry}/></p>
        <p><ButtonComponent onClick={this.increaseNumberOfTimesClicked} /></p>
        <p><input onChange={this.updateNumberOfBalls} /></p>
        <p>Number of balls: {(this.props.ball || {}).number}</p>
      </div>
    )
  }

}

export default withStore(mapStore, MainComponent);
