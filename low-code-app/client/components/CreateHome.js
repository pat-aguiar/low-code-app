import axios from 'axios';
import React, { useState } from 'react';

const CreateHome = () => {
    const [ name, setName ] = useState(''); 
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    const onClick = async () => {
        await axios.post(`/api/create/homeData`, {
            name: name,
            title: title,
            description: description
        });
    }

    return (
        <>
            <input className = "createHome" value = { name } placeholder = "name" onChange = {({ target }) => setName(target.value)}/>

            <input className = "createHome" value = { title } placeholder = "title" onChange = {({ target }) => setTitle(target.value)}/>

            <input className = "createHomeD" value = { description } placeholder = "description" onChange = {({ target }) => setDescription(target.value)}/>

            <button onClick = { onClick }> create home page </button>
        </>
    )
};

export default CreateHome;