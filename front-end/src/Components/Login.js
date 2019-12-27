import React from 'react';
import { Link } from 'react-router-dom';
import { useFormInput } from '../Helpers/useFormInput';

import '../styles/login.css';

const Login = props => {
	const { value: user, onChange } = useFormInput({
		username: '',
		password: ''
	});

	return (
		<div className='login-contain'>
			<div className='login-form'>
				<h2>Login</h2>

				<form onSubmit={e => e.preventDefault()}>
					<label>
						U:
						<input
							type='text'
							placeholder='Enter Username'
							name='username'
							value={user.username}
							onChange={onChange}
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
							onChange={onChange}
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
