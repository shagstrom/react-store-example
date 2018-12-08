import React from 'react';

const { Provider, Consumer } = React.createContext();

export class StoreProvider extends React.Component {

  state = { }

  dispatch = (namespace, updater, callback) => {
    if (typeof updater === 'function') {
      this.setState((state) => ({ [namespace]: updater(state[namespace]) }), callback);
    } else {
      this.setState({ [namespace]: updater }, callback);
    }
  }

  getDispatch = (namespace) => (updater, callback) => this.dispatch(namespace, updater, callback)

  render() {
    return (
      <Provider value={{ state: this.state, getDispatch: this.getDispatch }}>
        {this.props.children}
      </Provider>
    );
  }

}

class StoreConsumer extends React.PureComponent {
  render() {
    const { component: Component, ...props } = this.props;
    return <Component {...props} />;
  }
}

export const withStore = (propsMap, Component) => (props) => (
  <Consumer>
    { ({state, getDispatch }) => 
      <StoreConsumer {...props} {...propsMap(state)} getDispatch={getDispatch} component={Component} />
    }
  </Consumer>
)
