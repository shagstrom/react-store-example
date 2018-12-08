import React from 'react'
import { withStore } from '../store';

const mapStore = ({ user }) => ({
  user
});

function ButtonComponent(props) {

  function clickHandler() {
    props.onClick(clickHandler);
  }

  return (
    <button type="button" onClick={clickHandler}>Increase {(props.user || {}).name} from {(props.user || {}).country}</button>
  )
}

export default withStore(mapStore, ButtonComponent);
