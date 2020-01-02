// Author: Jason Cruz
// Date: 12/31/2019
// Description: This form was created as part of Lambda School Build Week 2. This is a basic form for gathering data from the user and sending/saving to the backend or API.
// Information: In order for this form to work for you. You will need to add the dependencies ( semantic-ui-react and semantic-ui-css ).

import React, { useState } from 'react';
import { useForm } from '../Helpers/useFormInput';
import validateTicket from '../Helpers/FormValidation/ticketValidation';

import '../styles/ticket.css';

import {
	Grid,
	Form,
	Input,
	TextArea,
	Select,
	Button,
	Dropdown
} from 'semantic-ui-react';

import '../App.css';
import 'semantic-ui-css/semantic.min.css';

const initialTicketState = {
	title: '',
	category: '',
	urgency: '',
	description: ''
};

function Ticket() {
	const { values: ticket, handleChange, errors, handleSubmit } = useForm(
		initialTicketState,
		validateTicket,
		submitTicket
	);

	console.log(errors);

	function submitTicket() {
		console.log(ticket);
	}

	return (
		<>
			<h2 style={{ margin: '20px auto' }}>Username From State</h2>
			<Grid
				textAlign='center'
				style={{ height: '100vh', width: '80%', margin: '0 auto 40px' }}
				verticalAlign='middle'
			>
				<Form onSubmit={handleSubmit}>
					<div>
						<h1 style={{ marginBottom: '20px' }}>Submit Ticket</h1>
					</div>
					<Form.Group widths='equal'>
						<div className='top-row-ticket'>
							<div className='ticket-inputs'>
								<Form.Field
									label='Title'
									placeholder='Title'
									name='title'
									control={Input}
									onChange={handleChange}
									value={ticket.title}
								/>
								<p className='error-text'>{errors.title}</p>
							</div>
							<div className='ticket-inputs'>
								<Form.Field
									label='Select Category'
									name='category'
									control={Select}
									options={categoryOptions}
									onChange={handleChange}
									value={ticket.category}
								/>
								<p className='error-text'>{errors.category}</p>
							</div>
							<div className='ticket-inputs'>
								<Form.Field
									label='Urgency'
									name='urgency'
									control={Select}
									options={urgencyOptions}
									onChange={handleChange}
									value={ticket.urgency}
								/>
								<p className='error-text'>{errors.urgency}</p>
							</div>
						</div>
					</Form.Group>
					<div className='ticket-inputs'>
						<Form.Field
							label='Please tell us what issue you are currently experiencing, be elaborate.  Include steps you have already taken.'
							placeholder='Description'
							name='description'
							control={TextArea}
							onChange={handleChange}
							value={ticket.description}
						/>
						<p className='error-text'>{errors.description}</p>
					</div>
					<Form.Field
						control={Button}
						content='Submit'
						label='By submitting you are agreeing that you do have an issue. Only submit one ticket at a time. We will contact you via email within 24 hrs.'
						color='red'
					/>
				</Form>
			</Grid>
		</>
	);
}

const categoryOptions = [
	{ key: 'j', text: 'Javascript', value: 'javascript' },
	{ key: 'p', text: 'Python', value: 'python' },
	{ key: 'r', text: 'React', value: 'react' },
	{ key: 's', text: 'State Management', value: 'stateManagement' },
	{ key: 'n', text: 'Node.js', value: 'node' },
	{ key: 'h', text: 'Hardware', value: 'hardware' },
	{ key: 'sr', text: 'Site Related', value: 'siteRelated' },
	{ key: 'm', text: 'Misc', value: 'misc' }
];

const urgencyOptions = [
	{ key: 'lo', text: 'Low', value: 'low' },
	{ key: 'me', text: 'Medium', value: 'medium' },
	{ key: 'hi', text: 'High', value: 'high' }
];

export default Ticket;
