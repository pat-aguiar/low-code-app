import React from 'react';
// import {connect} from 'react-redux'
// import menu from './../public/image/menu.png';

import CreateProject from './CreateProject';
import CreateHome from './CreateHome';
import CreatePortfolio from './CreatePortfolio';
import Download from './Download';
import Logo from "../../public/images/logo.png";


const Navbar = () => (
  <div>
    <div className="navbar">
      {/* <img src= { menu }/> */}
      {/* <div className="logo">Low Code</div> */}
      <img src={ Logo }/>
      <hr />
      <CreateProject/>
      <CreateHome/>
      <CreatePortfolio/>
      <a className="download" href='./pack.zip' download> download </a>
      {/* <Download/> */}
    </div>
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