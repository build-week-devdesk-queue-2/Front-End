/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Ticket from "./Components/Ticket";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Ticket />
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Register {...props} />} />
    </div>
  );
}

export default App;
