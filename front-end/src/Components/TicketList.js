import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ticket from "./Ticket";
import { fetchTickets } from "../Actions";

const TicketList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <div>
      <h1>Open Tickets</h1>
      {tickets ? (
        tickets.map(ticket => {
          return <Ticket key={ticket.id} ticket={ticket} />;
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
export default TicketList;
