import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import { deleteTicket } from "../Actions";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  margin: 10px 0;
  box-shadow: 0 0 25px #ba112e;
`;

const Button = styled.button`
Jason-Cruz
  width: 10%;

  width: 33%;
 master
  height: 30px;
  font-size: 2rem;
  border: none;
  color: white;
  background-color: #4b0612;
  text-align: center;
  cursor: pointer;
  margin: 1rem 0;
`;

<<<<<<< HEAD
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
=======
function UserTicketCard({ cardList, deleteCard }) {

  const urgencyStyle = urgency => {
    return urgency === 'low'
      ? 'green'
      : urgency === 'medium'
        ? 'yellow'
        : 'red'
  }

  return (
    <>
      {cardList.map((card, index) => (
        <Card className='tickets-container' key={index} index={index}>
          <section className='tickets'>
            <div className='ticket-divs'>
              <h2>Ticket Number: </h2>
              <p>{card.id}</p>
            </div>

            <div className='ticket-divs'>
              <h2>Urgency: </h2>
              <p style={{ color: urgencyStyle(card.urgency) }}> {card.urgency}</p>
            </div>

            <div className='ticket-divs'>
              <h4>Title: </h4>
              <p>{card.title}</p>
            </div>

            <div className='ticket-divs'>
              <h4>Description: </h4>
              <p>{card.description}</p>
            </div>

            {card.reply &&
              <div className='ticket-divs'>
                <h2>Reply: </h2>
                <p>{card.reply}</p>
              </div>
            }

            {!card.reply && <h2>No reply yet...</h2>}
            <Button className='delete-btn' onClick={() => deleteCard(card.id)}>Delete</Button>
            <button className='reply-btn'>Reply</button>
            <button className='edit-btn'>Edit</button>
          </section>
>>>>>>> 1ca8c6a01dcfe3dcb96a5a984ef95f4d18ff792d
        </Card>
      ))}
    </>
  );
}

export default connect(null,{deleteTicket})(UserTicketCard);
