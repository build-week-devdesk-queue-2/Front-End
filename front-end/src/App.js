import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Ticket from './Components/Ticket';
// import Header from './Components/Header';
import LandingButton from './Components/LandingButton';
import bgimg from './images/pcbRed.jpeg';

function App() {
	return (
		<div className='App' style={{ backgroundImage: bgimg }}>
			{/* <Header /> */}
			<Navbar />
			<Route path='/login' render={props => <Login {...props} />} />
			<Route path='/register' render={props => <Register {...props} />} />
			<Route path='/new_ticket' render={props => <Ticket {...props} />} />
			{/* <LandingButton /> */}
			<Route exact path='/' render={props => <LandingButton {...props} />} />
		</div>
	);
}

export default App;
