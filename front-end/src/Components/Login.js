import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/login.css';

const Login = props => {
  const [user, setuser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='login-contain'>
      <div className='login-form'>
        <form>
          <label>
            U:
            <input
              type='text'
              name='username'
              placeholder='Enter Username'
              value={user.username}
              onChange={handleChange}
            />
          </label>
          <label>
            P:
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              value={user.password}
              onChange={handleChange}
            />
          </label>
        </form>
        <button className='login-btn'>Login</button>
        <Link to='/register'>Click here to register</Link>
      </div>
    </div>
  );
};

export default Login;
