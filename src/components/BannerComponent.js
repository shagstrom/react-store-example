import React from 'react'
import { withStore } from '@shagstrom/react-store'

const mapProps = ({ user }) => ({ user });

class BannerComponent extends React.PureComponent {

  render() {
    const { user } = this.props;
    return (
      <div style={{background: 'blue', color: 'white', textAlign: 'right', padding: '5px'}}>
        {user.name || 'no name'}
      </div>
    )
  }

}

export default withStore(mapProps, BannerComponent);
