import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTicket } from '../Actions/index';
import { axiosWithAuth } from '../Helpers/axiosWithAuth';

const initialState = {
	user_id: Number(sessionStorage.getItem('uid')),
	title: '',
	description: '',
	urgency: '',
	reply: '',
	solved: false,
	category: '',
	solved_by: ''
};

const EditTicket = ({ activeTicket, toggleEdit, toggle, setNewTickets }) => {
	const dispatch = useDispatch();
	const [ticket, setTicket] = useState(initialState);

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
		dispatch(updateTicket(ticket.id, ticket));
		setTicket(initialState);
		axiosWithAuth()
			.get('https://infinite-taiga-63738.herokuapp.com/api/tickets') //API Goes Here
			.then(res => {
				console.log(res);
				setNewTickets(res.data.tickets);
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
						// defaultValue={activeTicket.description || ''}
						value={ticket.description || ''}
						onChange={handleChange}
					/>
					<textarea
						name='reply'
						placeholder='Reply'
						value={ticket.reply || ''}
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
