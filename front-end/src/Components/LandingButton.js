import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingBtn.css';

const LandingButton = () => {
	return (
		<>
			<Link to='/register' className='button-link'>
				<div className='button-container'>
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
			<h1 className='slogan'>You got questions, we got answers</h1>
		</>
	);
};

export default LandingButton;
