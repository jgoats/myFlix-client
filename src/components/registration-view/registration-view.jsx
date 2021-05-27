import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthdate);
        props.onRegister(username);
    }

    return (
        <form className="">
            <label className="">
                Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label className="">
                Password:
      <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <label className="">
                Email:
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label className="">
                Birthdate:
      <input type="text" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
            </label>
            <span>
                <button type='button' onClick={handleSubmit}>Submit</button>
                <button onClick={() => { onBackClick(null); }}>Back</button>
            </span>
        </form>
    )
}

RegistrationView.propTypes = {
    onRegister: PropTypes.func.isRequired
};