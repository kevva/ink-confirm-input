# ink-confirm-input [![Build Status](https://travis-ci.org/kevva/ink-confirm-input.svg?branch=master)](https://travis-ci.org/kevva/ink-confirm-input)

> Confirmation input component for [Ink](https://github.com/vadimdemedes/ink)


## Install

```
$ npm install ink-confirm-input
```


## Usage

```js
const {h, render, Component, Text} = require('ink');
const ConfirmInput = require('ink-confirm-input');

class UnicornQuestion extends Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {answer: null};
	}

	handleSubmit(val) {
		if (!val) {
			this.setState({answer: 'You are heartless…'});
			return;
		}

		this.setState({answer: 'You love unicorns!'});
	}

	render() {
		const {answer} = this.state;

		return (
			<div>
				Do you like unicorns? (Y/n)

				<ConfirmInput
					checked
					onSubmit={this.handleSubmit}
				/>

				{answer && <span>{answer}</span>}
			</div>
		);
	}
}

render(<UnicornQuestion/>);
```


## API

### &lt;ConfirmInput/&gt;

#### checked

Type: `boolean`

Whether to return `true/(yes)` or `false/(no)` by default.

#### placeholder

Type: `string`

Text to display when `value` is empty.

#### onChange

Type: `Function`

Function to call when value updates. Returns a `boolean`.

#### onSubmit

Type: `Function`

Function to call when user press <kbd>Enter</kbd>. Returns a `boolean`.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
