import { useState, useCallback } from 'react';

export const useFormInput = initialValue => {
	const [value, setValue] = useState(initialValue);

	const onChange = useCallback(
		event =>
			setValue({
				...value,
				[event.currentTarget.name]: event.currentTarget.value
			}),
		[value]
	);

	return { value, onChange };
};
