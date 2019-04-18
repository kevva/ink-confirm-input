import React, {Component} from 'react';
import {render} from 'ink';
import ConfirmInput from '../src';

class UnicornQuestion extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      answer: null
    };
  }

  handleSubmit(val) {
    this.setState({answer: val ? 'You love unicorns!' : 'You are heartless…'});

    setTimeout(() => {
      process.exit(0); // eslint-disable-line unicorn/no-process-exit
    }, 200);
  }

  render() {
    const {answer} = this.state;

    return (
      <>
        <ConfirmInput
          defaultValue="No"
          externalSeparators="Parenthesis"
          question="Do you like unicorns?"
          onSubmit={this.handleSubmit}
        />
        {answer && answer}
      </>
    );
  }
}

render(<UnicornQuestion/>);
