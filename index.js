'use strict';
const {h, Component} = require('ink');
const propTypes = require('prop-types');
const TextInput = require('ink-text-input');

const noop = () => {};

class ConfirmInput extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {value: ''};
	}

	handleChange(value) {
		const {checked, onChange} = this.props;
		this.setState({value});
		onChange(value ? /^y(es)?/i.test(value) : checked);
	}

	handleSubmit(value) {
		const {checked, onSubmit} = this.props;
		this.setState({value});
		onSubmit(value ? /^y(es)?/i.test(value) : checked);
	}

	render() {
		const {placeholder} = this.props;
		const {value} = this.state;

		return (
			<TextInput
				placeholder={placeholder}
				value={value}
				onChange={this.handleChange}
				onSubmit={this.handleSubmit}
			/>
		);
	}
}

ConfirmInput.propTypes = {
	checked: propTypes.bool,
	placeholder: propTypes.string,
	onChange: propTypes.func,
	onSubmit: propTypes.func
};

ConfirmInput.defaultProps = {
	checked: false,
	placeholder: '',
	onChange: noop,
	onSubmit: noop
};

module.exports = ConfirmInput;
