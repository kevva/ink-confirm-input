# ink-confirm-input [![Build Status](https://travis-ci.org/kevva/ink-confirm-input.svg?branch=master)](https://travis-ci.org/kevva/ink-confirm-input)

> Confirmation input component for [Ink](https://github.com/vadimdemedes/ink)


## Install

```
$ npm install ink-confirm-input
```


## Usage

```js
const { h, render, Component } = require('ink');
const ConfirmInput = require('ink-confirm-input');

class UnicornQuestion extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			answer: null,
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

render(<UnicornQuestion/>);
```


## API

### &lt;ConfirmInput/&gt;

#### question

Type: `string`

The message you want to show before asking the input.


#### defaultValue

Type: `enum(Yes, No)`

Default: `Yes`

The default value of the input. The default value is shown in UpperCase.

#### externalSeparators

Type: `enum(Nothing, Parenthesis, Brackets)`

Default: `Brackets`

The external separator that is shown around the Yes No options.

#### placeholder

Type: `string`

Text to display when `value` is empty.

#### onChange

Type: `Function`

Function to call when value updates. Returns a `string` with the input.

#### onSubmit

Type: `Function`

Function to call when user press <kbd>Enter</kbd>. Returns a `boolean` for the answer.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
