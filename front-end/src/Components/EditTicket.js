import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTicket } from '../Actions/index';
import { axiosWithAuth } from '../Helpers/axiosWithAuth';

const initialState = {
	user_id: '',
	title: '',
	description: '',
	urgency: '',
	reply: '',
	solved: false,
	category: '',
	solved_by: ''
};

const EditTicket = ({
	activeTicket,
	toggleEdit,
	toggle,
	tickets,
	setNewTickets
}) => {
	const dispatch = useDispatch();
	const [ticket, setTicket] = useState(initialState);
	console.log(' : EditTicket -> ticket', ticket);

	useEffect(() => {
		if (activeTicket) {
			Object.keys(activeTicket).length && setTicket(activeTicket);
		}
	}, [activeTicket]);

	const handleChange = e => {
		setTicket({
			...ticket,
			[e.target.name]: e.target.value
		});
	};

	const submitChanges = e => {
		e.preventDefault();
		ticket.solved_by = Number(sessionStorage.getItem('uid'));
		dispatch(updateTicket(ticket.id, ticket));

		axiosWithAuth()
			.get('https://infinite-taiga-63738.herokuapp.com/api/tickets') //API Goes Here
			.then(() => {
				setTicket(initialState);

				return axiosWithAuth()
					.get('https://infinite-taiga-63738.herokuapp.com/api/tickets') //API Goes Here
					.then(res => {
						setNewTickets(res.data.tickets);
					});
			})
			.catch(error => {
				console.log('None for You', error);
			});

		toggle();
	};
	return (
		<div className='tickets-container' id={toggleEdit}>
			<section className='tickets'>
				<form onSubmit={submitChanges} className='edit-form'>
					<input
						type='text'
						name='title'
						value={ticket.title}
						onChange={handleChange}
					/>

					<textarea
						name='description'
						value={ticket.description}
						onChange={handleChange}
					/>

					<textarea
						name='reply'
						placeholder='Reply'
						value={ticket.reply}
						onChange={handleChange}
					/>

					<p
						name='solved_by'
						value={ticket.solved_by}
						onChange={handleChange}
					/>

					<button type='submit' className='reply-btn'>
						Submit changes
					</button>
				</form>
			</section>
		</div>
	);
};

export default EditTicket;
