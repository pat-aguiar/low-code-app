import React from 'react';
// import {connect} from 'react-redux'

import CreateProject from './CreateProject';
import CreateHome from './CreateHome';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">Low Code</div>
    <hr />
    <CreateProject/>
    <CreateHome/>
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