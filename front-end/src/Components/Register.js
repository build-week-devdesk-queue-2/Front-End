import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormInput } from '../Helpers/useFormInput';

import '../styles/register.css';

const Register = props => {
  const usernameInput = useFormInput('');

  const passwordInput = useFormInput('');

  const typeInput = useFormInput('');

  const newUser = {
    username: usernameInput.value,
    password: passwordInput.value,
    type: typeInput.value
  };

  return (
    <div className='register-contain'>
      <div className='register-form'>
        <h2>Register</h2>
        <form>
          <label>
            U:
            <input type='text' {...usernameInput} required minLength='4' />
          </label>
          <label>
            P:
            <input type='password' {...passwordInput} required minLength='7' />
          </label>
          <select className='user-select' required {...typeInput}>
            <option value='' disabled>
              Select role
            </option>
            <option>Student</option>
            <option>Helper</option>
          </select>
          <button className='register-btn' type='submit'>
            Register
          </button>
        </form>
        <Link to='/login'>Click here to login</Link>
      </div>
    </div>
  );
};

export default Register;
