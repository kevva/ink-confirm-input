'use strict';
const {h, Component} = require('ink');
const propTypes = require('prop-types');
const TextInput = require('ink-text-input');

const noop = () => {};

class ConfirmInput extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(val) {
		const {checked, onSubmit} = this.props;
		onSubmit(val ? /^y(es)?/i.test(val) : checked);
	}

	render() {
		const {onChange, placeholder, value} = this.props;

		return (
			<TextInput
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onSubmit={this.handleSubmit}
			/>
		);
	}
}

ConfirmInput.propTypes = {
	checked: propTypes.bool,
	placeholder: propTypes.string,
	onChange: propTypes.func,
	onSubmit: propTypes.func,
	value: propTypes.string
};

ConfirmInput.defaultProps = {
	checked: false,
	placeholder: '',
	onChange: noop,
	onSubmit: noop,
	value: ''
};

module.exports = ConfirmInput;
