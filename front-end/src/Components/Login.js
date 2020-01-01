import React from 'react';
import { Link } from 'react-router-dom';
import { useFormInput } from '../Helpers/useFormInput';

import '../styles/login.css';

const Login = props => {
  const usernameInput = useFormInput('');

  const passwordInput = useFormInput('');

  let user = {
    username: usernameInput.value,
    password: passwordInput.value
  };

  return (
    <div className='login-contain'>
      <div className='login-form'>
        <h2>Login</h2>

        <form>
          <label>
            U:
            <input
              type='text'
              placeholder='Enter Username'
              {...usernameInput}
              required
              minLength='4'
            />
          </label>

          <label>
            P:
            <input
              type='password'
              placeholder='Enter Password'
              {...passwordInput}
              required
              minLength='7'
            />
          </label>

          <button className='login-btn' type='submit'>
            Login
          </button>
        </form>
        <Link to='/register'>Click here to register</Link>
      </div>
    </div>
  );
};

export default Login;
