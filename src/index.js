'use strict';
const {h, Component, Text, Color} = require('ink');
const propTypes = require('prop-types');
const TextInput = require('ink-text-input');

const noop = () => {};

const Defaults = {
	InputType: {
		Yes: "Yes",
		No: "No"
	},
	ExternalSeparator: {
		Nothing: "Nothing",
		Parenthesis: "Parenthesis",
		Brackets: "Brackets"
	}
}

class ConfirmInput extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			input: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	get defaultValue() {
		const { defaultValue } = this.props;
		return defaultValue == Defaults.InputType.Yes;
	}

	get options () { 
		const { externalSeparators } = this.props;
		const options = this.defaultValue ? "Y/n" : "y/N";

		switch (externalSeparators) {
			case Defaults.ExternalSeparator.Brackets:
				return `[${options}]`;
			case Defaults.ExternalSeparator.Parenthesis:
				return `(${options})`;
			default:
				return options
		}
	}

	_handleResult(input) {
		if (input.length == 0) {
			return this.defaultValue
		}

		if (/^(?:y|yes|true|1)$/i.test(input)) {
			return true;
		}

		if (/^(?:n|no|false|0)$/i.test(input)) {
			return false;
		}

		return this.defaultValue
	}

	handleSubmit(input) {
		const { onSubmit } = this.props;
		onSubmit(this._handleResult(input));
	}

	handleChange(input) {
		const { onChange } = this.props;
		this.setState({ input }, () => onChange(input));
	}

	render() {
		const { question, placeholder } = this.props;

		return (
			<div>
				<Text>{question} <Color dim>{this.options}</Color></Text>
				<TextInput
					value={this.state.input}
					placeholder={placeholder}
					onChange={(val) => this.handleChange(val)}
					onSubmit={(val) => this.handleSubmit(val)}
				/>
			</div>
		);
	}
}

ConfirmInput.propTypes = {
	defaultValue: propTypes.oneOf(Object.values(Defaults.InputType)),
	externalSeparators: propTypes.oneOf(Object.values(Defaults.ExternalSeparator)),
	question: propTypes.string,
	placeholder: propTypes.string,
	onChange: propTypes.func,
	onSubmit: propTypes.func
};

ConfirmInput.defaultProps = {
	defaultValue: Defaults.InputType.No,
	externalSeparators: Defaults.ExternalSeparator.Brackets,
	question: '',
	placeholder: '',
	onChange: noop,
	onSubmit: noop
};

module.exports = ConfirmInput;
