import { axiosWithAuth } from '../Helpers/axiosWithAuth';

export const FETCH_TICKETS_START = 'FETCH_TICKETS_START';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAIL = 'FETCH_TICKETS_FAIL';

export const CREATE_TICKET_START = 'CREATE_TICKET_START';
export const CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS';
export const CREATE_TICKET_FAIL = 'CREATE_TICKET_FAIL';

export const UPDATE_TICKET = "UPDATE_TICKET";

export const DELETE_TICKET = 'DELETE_TICKET';

export const fetchTickets = () => dispatch => {
	dispatch({ type: FETCH_TICKETS_START });
	axiosWithAuth()
		.get("https://infinite-taiga-63738.herokuapp.com/api/tickets")
		.then(res => {
			console.log(res);
			dispatch({ type: FETCH_TICKETS_SUCCESS, payload: res });
		})
		.catch(err => {
			dispatch({ type: FETCH_TICKETS_FAIL, payload: err });
		});
};

export const createTicket = ticket => dispatch => {
	dispatch({ type: CREATE_TICKET_START });
	axiosWithAuth()
		.post("https://infinite-taiga-63738.herokuapp.com/api/tickets", ticket)
		.then(res => {
			console.log(res);
			dispatch({ type: CREATE_TICKET_SUCCESS, payload: res });
		})
		.catch(err => {
			dispatch({ type: CREATE_TICKET_FAIL, payload: err });
		});
};

export const deleteTicket = id => dispatch => {
	axiosWithAuth()
		.delete(`https://infinite-taiga-63738.herokuapp.com/api/tickets/${id}`)
		.then(() => {
			dispatch({ type: DELETE_TICKET, payload: id });
		})
		.catch(err => {
			console.log(err);
		});
};

export const updateTicket = (id, ticket) => dispatch => {
	axiosWithAuth().put(`https://infinite-taiga-63738.herokuapp.com/api/tickets/${id}`, ticket)
	.then( res => {
	  console.log(res);
	  dispatch({ type: UPDATE_TICKET, payload: res.data });
	})
	.catch( err => {
	  console.log( err );
	})
  }
