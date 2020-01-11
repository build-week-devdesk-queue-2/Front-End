import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteTicket } from '../Actions';
import EditTicket from './EditTicket';

const Card = styled.div`
	display: flex;
	flex-direction: column;
	border: none;
	margin: 10px 0;
	box-shadow: 0 0 25px #ba112e;
`;

const Button = styled.button`
	jason-cruzwidth: 10%;

	width: 33%;
	masterheight: 30px;
	font-size: 2rem;
	border: none;
	color: white;
	background-color: #4b0612;
	text-align: center;
	cursor: pointer;
	margin: 1rem 0;
`;

function UserTicketCard({
	cardList,
	deleteTicket,
	toggle,
	toggleCards,
	toggleEdit
}) {
	const [tickets, setTickets] = useState([]);
	const [activeTicket, setActiveTicket] = useState({});

	useEffect(() => {
		setTickets(cardList);
	}, [cardList]);

	const deleteThisTicket = card => {
		const newTicketList = tickets.filter(ticket => ticket.id !== card.id);
		deleteTicket(card.id);
		setTickets(newTicketList);
	};

	// prettier-ignore
	const urgencyStyle = urgency => {
		return urgency === 'low'
			? 'green'
			: urgency === 'medium'
			  ? 'yellow'
			  : 'red';
	};

	const toggleEditTicket = active => {
		setActiveTicket(active);
		toggle();
	};

	return (
		<>
			{tickets.map((card, index) => (
				<div key={card.id}>
					<Card
						className='tickets-container'
						id={toggleCards}
						key={index}
						index={index}
					>
						<section className='tickets'>
							<div className='ticket-divs'>
								<h2>Ticket Number: </h2>
								<p>{card.id}</p>
							</div>

							<div className='ticket-divs'>
								<h2>Urgency: </h2>
								<p style={{ color: urgencyStyle(card.urgency) }}>
									{' '}
									{card.urgency}
								</p>
							</div>

							<div className='ticket-divs'>
								<h4>Title: </h4>
								<p>{card.title}</p>
							</div>

							<div className='ticket-divs'>
								<h4>Description: </h4>
								<p>{card.description}</p>
							</div>

							{card.reply && (
								<div className='ticket-divs'>
									<h2>Reply: </h2>
									<p>{card.reply}</p>
								</div>
							)}

							{!card.reply && <h2>No reply yet...</h2>}
							<Button
								className='delete-btn'
								onClick={() => deleteThisTicket(card)}
							>
								Delete
							</Button>
							<button className='reply-btn'>Reply</button>
							<button
								className='edit-btn'
								onClick={() => toggleEditTicket(card)}
							>
								Edit
							</button>
						</section>
					</Card>
				</div>
			))}
			<EditTicket activeTicket={activeTicket} toggleEdit={toggleEdit} />
		</>
	);
}

export default connect(null, { deleteTicket })(UserTicketCard);
