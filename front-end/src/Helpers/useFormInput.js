import { useState } from 'react';

export const useFormInput = (initialState, validate) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	function handleChange(event) {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
	}

	return {
		handleSubmit,
		handleChange,
		values,
		errors
	};
};
