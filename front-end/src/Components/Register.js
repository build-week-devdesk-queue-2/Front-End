import React from 'react';
import { Link } from 'react-router-dom';
import { useFormInput } from '../Helpers/useFormInput';

import '../styles/register.css';

const Register = props => {
	const { values: user, handleChange } = useFormInput({
		username: '',
		password: '',
		type: ''
	});

	return (
		<div className='register-contain'>
			<div className='register-form'>
				<h2>Register</h2>

				<form>
					<label>
						U:
						<input
							type='text'
							placeholder='Enter Username'
							name='username'
							value={user.username}
							onChange={handleChange}
							required
							minLength='4'
						/>
					</label>

					<label>
						P:
						<input
							type='password'
							placeholder='Enter Password'
							name='password'
							value={user.password}
							onChange={handleChange}
							required
							minLength='7'
						/>
					</label>

					<select
						className='user-select'
						name='type'
						onChange={handleChange}
						defaultValue=''
						required
					>
						<option value='' disabled hidden>
							Select role
						</option>
						<option value='student'>Student</option>
						<option value='helper'>Helper</option>
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
