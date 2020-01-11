import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 if(.getItem('token')){
//                     return <Component {...props} />;
//                 } else {
//                     return <Redirect to='/login' />;
//                 }
//             }}
//         />
//     );
// };

const isAuthenticated = () => {
	return sessionStorage.getItem('token');
};

const PrivateRoute = ({ children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated() ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
