import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import '../styles/navbar.css';

import 'semantic-ui-css/semantic.min.css';

const Navbar = props => {
	const [navVis, setNavVis] = useState('visible');
	const [ticketLinkVis, setTicketLinkVis] = useState('not-visible');
	const [authLinkVis, setAuthLinkVis] = useState('visible');

	const userId = sessionStorage.getItem('uid');

	const token = sessionStorage.getItem('token');

	const setVisibility = () => {
		const css = navVis === 'visible' ? 'not-visible' : 'visible';
		setNavVis(css);
	};

	const homeClick = () => {
		setNavVis('visible');
	};

	useEffect(() => {
		const ticketLink = userId && token ? 'visible' : 'not-visible';
		const authLink = userId && token ? 'not-visible' : 'visible';
		setTicketLinkVis(ticketLink);
		setAuthLinkVis(authLink);
	}, [userId, token, navVis, ticketLinkVis, authLinkVis]);

	const isLogged = token && userId ? 'visible' : 'not-visible';

	const logout = e => {
		e.preventDefault();
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('uid');
		props.history.push('/');
	};

	return (
		<>
			<div className='header'>
				<Header className='ui centered' as='h1' color='red' id='headerTxt'>
					DevDesk Ops
				</Header>

				<div className='navbar'>
					<Link to='/' onClick={homeClick}>
						Home
					</Link>

					<Link
						to='/login'
						className={(navVis, authLinkVis)}
						onClick={setVisibility}
					>
						Login
					</Link>

					<Link to='/' className={isLogged} onClick={logout}>
						Logout
					</Link>

					<Link
						to='/register'
						className={(navVis, authLinkVis)}
						onClick={setVisibility}
					>
						Register
					</Link>

					<Link
						to='/new_ticket'
						className={ticketLinkVis}
						onClick={setVisibility}
					>
						New Ticket
					</Link>

					<Link to='/userticketlist' onClick={setVisibility}>
						Tickets
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
