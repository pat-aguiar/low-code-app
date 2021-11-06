import axios from 'axios';
import React, { useState } from 'react';

const CreatePortfolio = () => {
    const [ portName, setPortName ] = useState(''); 
    const [ technologies, setTechnologies ] = useState('');
    const [ portDescription, setPortDescription ] = useState('');
    const [ github, setGithub ] = useState('');
    const [ link, setLink ] = useState('');
    

    const onClick = async () => {
        await axios.post(`/api/create/portfolioData`, {
            portName: portName,
            technologies: technologies,
            portDescription: portDescription,
            github: github,
            link: link
        });
    }

    return (
        <>
            <input className = "createHome" value = { portName } placeholder = "project name" onChange = {({ target }) => setPortName(target.value)}/>

            <input className = "createHome" value = { technologies } placeholder = "technologies" onChange = {({ target }) => setTechnologies(target.value)}/>

            <input className = "createHome" value = { github } placeholder = "github link" onChange = {({ target }) => setGithub(target.value)}/>

            <input className = "createHome" value = { link } placeholder = "link" onChange = {({ target }) => setLink(target.value)}/>

            <input className = "createHomeD" value = { portDescription } placeholder = "description" onChange = {({ target }) => setPortDescription(target.value)}/>

            <button onClick = { onClick }> include new project </button>
        </>
    )
};

export default CreatePortfolio;