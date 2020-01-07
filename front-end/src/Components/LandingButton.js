import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingBtn.css';

const LandingButton = props => {
	const pushToSignup = () => props.history.push('/register');
	return (
		<Link className='button-link'>
			<div className='button-container' onClick={pushToSignup}>
				<div className='span-parent'>
					<span />
					<span />
					<span />
					<span />
					<div className='button-filter'>
						<div className='button-text'>Sign up</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default LandingButton;
