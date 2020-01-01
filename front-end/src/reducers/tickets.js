import {
    FETCH_TICKETS_START,
    FETCH_TICKETS_SUCCESS,
    FETCH_TICKETS_FAIL,
    CREATE_TICKET_START,
    CREATE_TICKET_SUCCESS,
    CREATE_TICKET_FAIL,
    DELETE_TICKET,
    FILTER_TICKETS,
  } from '../Actions';


const initialState = {
    tickets: [],
}

export const tickets = (state = initialState, action) => {
    switch(action.type){

        case 'FETCH_TICKETS_START':
            return {
                ...state,
                
            }
        default: 
            return state
            
    }

}



