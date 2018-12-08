import React from 'react';

const { Provider, Consumer } = React.createContext();

export class StoreProvider extends React.Component {

  state = { }

  dispatch = (namespace, newState, callback) => {
    if (typeof newState === 'function') {
      this.setState((state) => ({ [namespace]: newState(state[namespace]) }), callback);
    } else {
      this.setState({ [namespace]: newState }, callback);
    }
  }

  render() {
    return (
      <Provider value={{ state: this.state, dispatch: this.dispatch }}>
        {this.props.children}
      </Provider>
    );
  }

}

export const withStore = (propsMap, Component) => (props) => (
  <Consumer>
    { ({state, dispatch}) => 
      <Component {...props} {...propsMap(state)} getDispatch={(namespace) => (
        (newState, callback) => dispatch(namespace, newState, callback)
      )} />
    }
  </Consumer>
)
