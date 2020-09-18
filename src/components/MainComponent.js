import React from 'react'
import { withStore } from '@shagstrom/react-store'
import { updateUserName } from '../actions/userActions';
import BannerComponent from './BannerComponent';
import { increaseCount } from '../actions/counterActions'

const storeProps = ({ user, counter }) => ({ user, counter });

class MainComponent extends React.PureComponent {

  // You can inject the dispatch once and for all ...
  increaseCount = this.props.withDispatch(increaseCount);

  // ... or you can do it at every invocation
  updateUserName = (e) => {
    const { withDispatch } = this.props;
    withDispatch(updateUserName)(e.target.value);
  }

  render() {
    const { user, counter } = this.props;
    return (
      <div>
        <BannerComponent />
        <p><input onChange={this.updateUserName} /></p>
        <p>User name: {user.name}</p>
        <p>
          Count: {counter.count} <button type="button" onClick={this.increaseCount}>Increase count</button>
        </p>
      </div>
    )
  }

}

export default withStore(storeProps, MainComponent);
