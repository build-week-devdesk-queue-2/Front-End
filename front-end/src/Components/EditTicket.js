import React, { useState, useEffect } from 'react';

const EditTicket = ({ activeTicket, toggleEdit }) => {
	const [ticket, setTicket] = useState({
		user_id: Number(localStorage.getItem('uid')),
		title: '',
		description: '',
		urgency: '',
		reply: '',
		solved: false,
		category: '',
		solved_by: ''
	});

	useEffect(() => {
		Object.keys(activeTicket).length && setTicket(activeTicket);
	}, [activeTicket]);

	const handleChange = e => {
		setTicket({
			...ticket,
			[e.target.name]: e.target.value
		});
	};

	const submitChanges = e => {
		e.preventDefault();
		console.log(ticket);
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
						defaultValue={activeTicket.description}
						value={ticket.description}
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
