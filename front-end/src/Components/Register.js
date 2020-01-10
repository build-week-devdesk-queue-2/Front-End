import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../Helpers/useFormInput';
import validateRegistration from '../Helpers/FormValidation/validateRegistration';
import axios from 'axios';
import '../styles/register.css';

const initialFormState = {
	username: '',
	password: '',
	type: ''
};

const Register = props => {
	const [registerError, setRegisterError] = useState('')
	console.log(" : registerError", registerError)


	const { values: user, handleChange, errors, handleSubmit } = useForm(
		initialFormState,
		validateRegistration,
		register
	);

	console.log(!errors.length)

	function register() {
		if (!errors.length) {
			axios
				.post(
					`https://infinite-taiga-63738.herokuapp.com/api/auth/register`,
					user
				)
				.then(() => {
					props.history.push('/login');
				})
				.catch(err => {
					console.dir(err)
					if (!err.response.data.message) {
						setRegisterError(err.response.data.error.constraint ? 'Username already exists, please try another' : null)
					}

				})
		}
		return
	};

	return (
		<div className='register-contain'>
			<div className='register-form'>
				<h2>Register</h2>
				<p id='error-text'>{registerError}</p>
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

					<select
						className='user-select'
						name='type'
						onChange={handleChange}
						defaultValue=''
					>
						<option value='' disabled hidden>
							Select role
						</option>
						<option value='student'>Student</option>
						<option value='helper'>Helper</option>
					</select>
					<p id='error-text'>{errors.type}</p>

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
