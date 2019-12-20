/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className='App'>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Register {...props} />} />
    </div>
  );
}

export default App;
