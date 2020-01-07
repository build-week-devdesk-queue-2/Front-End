import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Ticket from './Components/Ticket';
// import Header from './Components/Header';
import bgimg from './images/pcbRed.jpeg';

function App() {
	return (
		<div className='App' style={{ backgroundImage: bgimg }}>
			{/* <Header /> */}
			<Navbar />
			<Route path='/login' render={props => <Login {...props} />} />
			<Route path='/register' render={props => <Register {...props} />} />
			<Route path='/new_ticket' render={props => <Ticket {...props} />} />
		</div>
	);
}

export default App;
