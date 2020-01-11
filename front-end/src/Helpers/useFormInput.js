import { useState, useCallback } from 'react';

export const useForm = (initialState, submitFn, validate) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	const handleChange = useCallback(
		(event, result) => {
			const { name, value, type } = result || event.target;
			const isCheckbox = type === 'checkbox';

			if (!isCheckbox) {
				setValues({
					...values,
					[name]: value
				});
			}

			const checkBoxValue = isCheckbox ? event.target.checked : value;
			setValues({
				...values,
				[name]: checkBoxValue
			});
		},
		[values]
	);

	const handleSubmit = useCallback(
		event => {
			event.preventDefault();

			setErrors(validate(values));

			if (!Object.keys(validate(values)).length) {
				submitFn();
			}
		},
		[values, validate, submitFn]
	);

	return { values, handleChange, handleSubmit, errors };
};
