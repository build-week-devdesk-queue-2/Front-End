import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import { deleteTicket } from "../Actions";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 5px 10px;
`;

const Button = styled.button`
  width: 50%;
  height: 30px;
  font-size: 1.1rem;
  font-wight: 600;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: blue;
  text-align: center;
  cursor: pointer;
  margin: 1rem 0;
`;

function UserTicketCard({ cardList, /*deleteCard*/ deleteTicket}) {
  return (
    <>
      {cardList.map((card, index) => (
        <Card key={index} index={index}>
          <h2>
            {" "}
            {card.user_id} {card.urgency}{" "}
          </h2>
          <h4> {card.title} </h4>
          <h4> {card.description} </h4>
          <h2> {card.reply} </h2>
          <Button onClick={() => /*deleteCard*/ deleteTicket(card.id)}>Delete</Button>
        </Card>
      ))}
    </>
  );
}

export default connect(null,{deleteTicket})(UserTicketCard);
