import React from 'react';
// import {connect} from 'react-redux'

import CreateProject from './CreateProject';

const Navbar = () => (
  <div>
    <h1>Low Code</h1>
    <hr />
    <CreateProject/>
  </div>
);

export default Navbar;

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.auth.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)