import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../Helpers/useFormInput';
import validateLogin from '../Helpers/FormValidation/validateLogin';
import axios from 'axios';
import '../styles/login.css';

const initialFormState = {
	username: '',
	password: ''
};

const Login = props => {
	const [loginError, setLoginError] = useState('')

	const { values: user, handleChange, errors, handleSubmit } = useForm(
		initialFormState,
		validateLogin,
		login
	);

	function login() {
		axios
			.post(
				`https://infinite-taiga-63738.herokuapp.com/api/auth/login`,
				user
			)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('uid', res.data.user_id);
				props.history.push('/userticketlist');
			})
			.catch(err => {
				console.dir(err);
				setLoginError('Invalid username and/or password')
			});
	}

	return (
		<div className='login-contain'>
			<div className='login-form'>
				<h2>Login</h2>
				<p id='error-text'>{loginError}</p>
				<form onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						type='text'
						placeholder='Enter Username'
						name='username'
						value={user.username}
						onChange={handleChange}
					/>
					<p id='error-text'>{errors.username}</p>

					<label>Password</label>
					<input
						type='password'
						placeholder='Enter Password'
						name='password'
						value={user.password}
						onChange={handleChange}
					/>
					<p id='error-text'>{errors.password}</p>

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
