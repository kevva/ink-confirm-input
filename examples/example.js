'use strict';
const { h, render, Component } = require('ink');
const ConfirmInput = require('../src');

class UnicornQuestion extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			answer: null
		};
	}

	handleChange(val) {
		console.log(`Change: ${val}`)
	}

	handleSubmit(val) {
        this.setState({ answer: val ? 'You love unicorns!' : 'You are heartless…' });
        
        setTimeout(() => {
            // eslint-disable-line unicorn/no-process-exit
            process.exit(0);
        }, 200);
	}

	render() {
		const {answer, input} = this.state;

		return (
			<div>
				<ConfirmInput
                    defaultValue="No"
                    externalSeparators="Parenthesis"
                    question="Do you like unicorns?"
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
				/>
				{answer && answer}
			</div>
		);
	}
}

render(<UnicornQuestion />);