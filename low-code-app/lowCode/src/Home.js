import React from 'react';
// import ProfileImg from "../../public/images/ProfileImg-2.jpg";
import { name, title, description} from "../../homeData.js";

const Home = () => {
    return(
        <div>
            <div className="home">
                <div>
                    {/* <img className="singlePimg" src={ ProfileImg }/> */}
                </div>
                <div className= "homeDetails">
                    <div className="homeOpng"> Hello, my name is </div>
                    <div className="homeName"> { name } </div>
                    <div className="homeTitle"> { title } </div>
                    <hr></hr>
                    <div className="homeDescription"> { description } </div>
                </div>
            </div>
        </div>
    )
}

export default Home;