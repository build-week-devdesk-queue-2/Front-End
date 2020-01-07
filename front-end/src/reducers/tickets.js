import {
	FETCH_TICKETS_START,
	FETCH_TICKETS_SUCCESS,
	FETCH_TICKETS_FAIL,
	// CREATE_TICKET_START,
	// CREATE_TICKET_SUCCESS,
	// CREATE_TICKET_FAIL,
	// DELETE_TICKET,
	// FILTER_TICKETS
} from '../Actions';

const initialState = {
	tickets: []
};

export const tickets = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TICKETS_START:
				console.log(state);
			return {
				...state,
				loading: true,
				error: ''
			}
		case FETCH_TICKETS_SUCCESS:
			console.log(state);
			return {
				...state,
				tickets: [...state.tickets, action.payload],
				loading: false,
				error: ''
			}
		case FETCH_TICKETS_FAIL:
			return {
				...state,
				loading: false,
				error: 'Error adding ticket :('
			}

		default:
			return state;
	}
};
