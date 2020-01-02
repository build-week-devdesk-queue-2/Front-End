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
    <>
      <h2 style={{ margin: "20px auto" }}>Username From State</h2>
      <Grid
        textAlign='center'
        style={{ height: "100vh", width: "80%", margin: "0 auto 40px" }}
        verticalAlign='middle'>
        <Form>
          <div>
            <h1 style={{ marginBottom: "20px" }}>Submit Ticket</h1>
          </div>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Title' placeholder='Title' />
            <Form.Field
              control={Select}
              label='Select Category'
              options={categoryOptions}
            />
            <Form.Field
              control={Select}
              label="Urgency"
              options={urgencyOptions}
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label='Please tell us what issue you are currently experiencing, be elaborate.  Include steps you have already taken.'
            placeholder='Description'
          />
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
	{ key: 'hi', text: 'High', value: 'high' },
	{ key: 'me', text: 'Medium', value: 'medium' },
	{ key: 'lo', text: 'Low', value: 'low' }
];

export default Ticket;
