import React from 'react';
import { useForm } from '../Helpers/useFormInput';

const EditTicket = ({ activeTicket, toggleEdit }) => {
	const { values: ticket, handleChange, handleSubmit } = useForm(activeTicket);
	return (
		<div className='tickets-container' id={toggleEdit}>
			<section className='tickets'>
				<form>
					<input
						type='text'
						name='title'
						defaultValue={activeTicket.title}
					/>
					<textarea
						name='description'
						defaultValue={activeTicket.description}
					></textarea>
					<textarea name='reply' placeholder='Reply'></textarea>
				</form>
			</section>
		</div>
	);
};

export default EditTicket;
