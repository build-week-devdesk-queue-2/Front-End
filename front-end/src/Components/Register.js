import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/register.css';

const Register = props => {
  const [user, setuser] = useState({
    username: '',
    password: '',
    type: ''
  });
  console.log(' : user', user);

  const handleChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  //prettier-ignore
  return (
    <div className='register-contain'>
      <div className='register-form'>
        <h2>Register</h2>
        <form>
          <label>
            U:
            <input
              className='form-field'
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
              className='form-field'
              type='password'
              name='password'
              placeholder='Enter Password'
              value={user.password}
              onChange={handleChange}
            />
          </label>
          <select className='user-select' required name='type' value={user.type} onChange={handleChange}>
            <option value='' disabled>Select role</option>
            <option>Student</option>
            <option>Helper</option>
          </select>
        </form>
        <button className='register-btn'>Register</button>
        <Link to='/login'>Click here to login</Link>
      </div>
    </div>
  );
};

export default Register;
