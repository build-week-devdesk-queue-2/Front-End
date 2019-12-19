import React, { useState } from 'react';

const Register = props => {
  const [user, setuser] = useState({
    username: '',
    password: '',
    type: ''
  });

  const handleChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <select id='user-role' value={user.type} onChange={handleChange}>
            <option value='' disabled>
              Select role
            </option>
            <option>Student</option>
            <option>Helper</option>
          </select>
        </label>
      </form>
      <button>Register</button>
    </>
  );
};

export default Register;
