const validateRegistration = values => {
	let errors = {};

	if (!values.username) {
		errors.username = 'Username is required';
	}

	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 7) {
		errors.password = 'Password must contain at least 7 characters';
	}

	if (!values.type) {
		errors.type = 'Please select a user role';
	}

	return errors;
};

export default validateRegistration;
