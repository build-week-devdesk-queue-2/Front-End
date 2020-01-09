import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import NewTicket from "./Components/NewTicket";
// import Header from './Components/Header';
import LandingButton from "./Components/LandingButton";
import bgimg from "./images/pcbRed.jpeg";
import PrivateRoute from "./Components/PrivateRoute";
import HelperTicketList from "./Components/HelperTicketList";

function App() {
  return (
    <div className='App' style={{ backgroundImage: bgimg }}>
      {/* <Header /> */}
      <Navbar />
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Register {...props} />} />
      {/* <LandingButton /> */}
      <Route exact path='/' render={props => <LandingButton {...props} />} />
      <PrivateRoute>
        <Route path='/new_ticket' render={props => <NewTicket {...props} />} />
        <Route path='/userticketlist' render={props => <HelperTicketList {...props} />} />
      </PrivateRoute>
    </div>
  );
}

export default App;
