// Author: Jason Cruz
// Date: 12/31/2019
// Description: This form was created as part of Lambda School Build Week 2. This is a basic form for gathering data from the user and sending/saving to the backend or API.
// Information: In order for this form to work for you. You will need to add the dependencies ( semantic-ui-react and semantic-ui-css ).

import React from 'react';
import ReactDOM from 'react-dom';

import { Grid, Form, Input, TextArea, Select, Button } from 'semantic-ui-react';

import '../App.css';
import 'semantic-ui-css/semantic.min.css';

// prettier-ignore
function Ticket() {
  return (
    <Grid
      textAlign='center'
      style={{ height: "100vh", width: "80%", margin: "40px auto" }}
      verticalAlign='middle'>
      <Form>
        <div>
          <h1>Submit Ticket</h1>
        </div>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='First Name' placeholder='First Name' />
          <Form.Field control={Input} label='Last Name' placeholder='Last Name' />
          <Form.Field
            control={Select}
            label='Select Category'
            options={categoryOptions}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Please tell us what issue you are currently experiencing, be ellaborate.'
          placeholder='Opinion'
        />
        <Form.Field
          control={Button}
          content='Submit'
          label='By submitting you are agreeing that you do have an issue. Only submit one ticket at a time. We will contact you via email within 24 hrs.'
          color='red'
        />
      </Form>
    </Grid>
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

export default Ticket;
