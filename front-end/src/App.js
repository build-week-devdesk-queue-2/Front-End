/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Ticket from "./Components/Ticket";
import Header from "./Components/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Register {...props} />} />
      <Route path='/new_ticket' render={props => <Ticket {...props} />} />
    </div>
  );
}

export default App;
