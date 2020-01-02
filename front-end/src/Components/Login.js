import React from 'react';
import { Link } from 'react-router-dom';
import { useFormInput } from '../Helpers/useFormInput';
import validateLogin from '../Helpers/FormValidation/validateLogin';
import '../styles/login.css';

const initialFormState = {
	username: '',
	password: ''
};

const Login = props => {
	const { values: user, handleChange, errors, handleSubmit } = useFormInput(
		initialFormState,
		validateLogin,
		login
	);

	function login() {
		console.log(user);
	}

	return (
		<div className='login-contain'>
			<div className='login-form'>
				<h2>Login</h2>

				<form onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						type='text'
						placeholder='Enter Username'
						name='username'
						value={user.username}
						onChange={handleChange}
					/>
					<p className='error-text'>{errors.username}</p>

					<label>Password</label>
					<input
						type='password'
						placeholder='Enter Password'
						name='password'
						value={user.password}
						onChange={handleChange}
					/>
					<p className='error-text'>{errors.password}</p>

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
