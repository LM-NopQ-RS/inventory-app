import React, { useState } from 'react';
import apiURL from '../api';

const Login = ({ isLogin }) => {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();

    function handleSubmit (e){
        try {
            e.preventDefault()
        } catch (err) {

        }
    }
    
    return;
} 

module.exports = Login;