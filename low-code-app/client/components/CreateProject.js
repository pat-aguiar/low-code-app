import axios from 'axios';
import React, { useState } from 'react';
import Home from './Home';

const CreateProject = () => {
    const [ project, setProject ] = useState(''); //useState is a Hook that allows you to have state variables in functional components

    const onClick = async () => {
        console.log('in onClick')
        console.log(axios.post('/api/create'))
        await axios.post('/api/create');
        // setProject('true');
    }

    // const onClickFile = async () => {
    //     await axios.post(`/api/create/file/${fileName}`);
    // }

    return (
        <>
            <button onClick = { onClick }> create new website </button>

            {/* <Home/> */}

            {/* <input value = { fileName } onChange = {({ target }) => setFileName(target.value)}/>
            <button onClick = { onClickFile }> click me to create a file in that directory </button> */}
        </>
    )
};

export default CreateProject;