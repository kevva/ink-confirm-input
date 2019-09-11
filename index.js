import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import TextInput from 'ink-text-input';
import yn from 'yn';

const noop = () => {};

const ConfirmInput = ({isChecked, onChange, onSubmit, placeholder, value, ...props}) => {
	const handleSubmit = useCallback(newValue => {
		onSubmit(yn(newValue, {default: isChecked}));
	}, [isChecked, onSubmit]);

	return (
		<TextInput
			{...props}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onSubmit={handleSubmit}
		/>
	);
};

ConfirmInput.propTypes = {
	isChecked: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	value: PropTypes.string
};

ConfirmInput.defaultProps = {
	isChecked: false,
	placeholder: '',
	onChange: noop,
	onSubmit: noop,
	value: ''
};

export default ConfirmInput;
