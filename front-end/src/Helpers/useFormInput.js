import { useState } from 'react';

export const useFormInput = (initialState, validate, callback) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setErrors(validate(values));
		if (!errors) {
			callback();
		}
	};

	return {
		handleSubmit,
		handleChange,
		values,
		errors
	};
};
