const validateTicket = values => {
	let errors = {};

	if (!values.title) {
		errors.title = 'Please provide a title';
	}

	if (!values.category) {
		errors.category = 'Please select a category';
	}

	if (!values.urgency) {
		errors.urgency = 'Please select an urgency';
	}

	if (!values.description) {
		errors.description = 'Please provide a detailed description';
	}

	return errors;
};

export default validateTicket;
