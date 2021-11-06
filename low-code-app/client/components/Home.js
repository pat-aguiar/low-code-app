import React from 'react';
import ProfileImg from "../../public/images/ProfileImg4.jpeg";

const Home = () => {
    return(
        // <div>
            <div className="home">
                <div>
                    <img className="singlePimg" src={ ProfileImg }/>
                </div>
                <div className= "homeDetails">
                    <div className="homeOpng"> Hello, my name is </div>
                    <div className="homeName"> Your Name </div>
                    <div className="homeTitle"> Your Title </div>
                    <hr></hr>
                    <div className="homeDescription"> Introduce yourself </div>
                </div>
            </div>
        // </div>
    )
}

export default Home;