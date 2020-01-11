import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import NewTicket from './Components/NewTicket';
import LandingButton from './Components/LandingButton';
import PrivateRoute from './Components/PrivateRoute';
import HelperTicketList from './Components/HelperTicketList';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Route path='/login' render={props => <Login {...props} />} />
			<Route path='/register' render={props => <Register {...props} />} />
			<Route exact path='/' render={props => <LandingButton {...props} />} />
			<PrivateRoute path='/new_ticket'>
				<NewTicket />
			</PrivateRoute>
			<PrivateRoute path='/userticketlist'>
				<HelperTicketList />
			</PrivateRoute>
		</div>
	);
}

export default App;
