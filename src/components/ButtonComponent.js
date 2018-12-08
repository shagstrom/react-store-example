import React from 'react'
import { withStore } from '../store';

const mapStore = ({ user }) => ({
  user
});

class ButtonComponent extends React.Component {

  clickHandler = () => {
    this.props.onClick();
  }

  render() {
    window.console.log("Rendering ButtonComponent")
    return (
      <button type="button" onClick={this.clickHandler}>Increase {(this.props.user || {}).name} from {(this.props.user || {}).country}</button>
    )
  }

}

export default withStore(mapStore, ButtonComponent);
