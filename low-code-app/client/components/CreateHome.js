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
            <input value = { name } placeholder = "name" onChange = {({ target }) => setName(target.value)}/>

            <input value = { title } placeholder = "title" onChange = {({ target }) => setTitle(target.value)}/>

            <input value = { description } placeholder = "description" onChange = {({ target }) => setDescription(target.value)}/>

            <button onClick = { onClick }> click me to create home page </button>
        </>
    )
};

export default CreateHome;