import React from 'react';
import { Link } from 'react-router-dom';
import { useFormInput } from '../Helpers/useFormInput';
import validateRegistration from '../Helpers/FormValidation/validateRegistration';

import '../styles/register.css';

const initialFormState = {
	username: '',
	password: '',
	type: ''
};

const Register = props => {
	const { values: user, handleChange, errors, handleSubmit } = useFormInput(
		initialFormState,
		validateRegistration,
		register
	);

	function register() {
		console.log(user);
	}

	return (
		<div className='register-contain'>
			<div className='register-form'>
				<h2>Register</h2>

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
					<p className='error-text'>{errors.type}</p>

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
