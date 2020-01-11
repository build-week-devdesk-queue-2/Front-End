import React, { useEffect, useState } from 'react';
import UserTicketCard from '../Components/UserTicketCard';
import axiosWithAuth from '../Helpers/axiosWithAuth';

import '../styles/ticketList.css';

function UserTicketCards() {
	const [userTicket, setUserTicket] = useState([]);
	const [cardDisplay, setCardDisplay] = useState('show-this');
	const [edit, setEdit] = useState('hide-this');

	const toggle = () => {
		const ticketDisplay =
			cardDisplay === 'show-this' ? 'hide-this' : 'show-this';
		const editDisplay = edit === 'hide-this' ? 'show-this' : 'hide-this';
		setCardDisplay(ticketDisplay);
		setEdit(editDisplay);
	};

	const deleteCard = id => {
		const NewUser = userTicket.filter(card => card.id !== id);
		setUserTicket(NewUser);
	};

	useEffect(() => {
		axiosWithAuth()
			.get('https://infinite-taiga-63738.herokuapp.com/api/tickets') //API Goes Here
			.then(res => {
				setUserTicket(res.data.tickets);
			})
			.catch(error => {
				console.log('None for You', error);
			});
	}, []); // LEAVE THE BRACKETS WHERE PLACE, UNLESS YOU WANT AN INFINITE LOOP

	return (
		<section className='user-ticket-list'>
			<UserTicketCard
				cardList={userTicket}
				deleteCard={deleteCard}
				toggle={toggle}
				toggleCards={cardDisplay}
				toggleEdit={edit}
				setNewTickets={setUserTicket}
			/>
		</section>
	);
}

export default UserTicketCards;
