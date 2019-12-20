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

import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_START:
      return {
        ...state, 
        loading: true
      }


    default:
      return state;
  }
};

export default reducer;
