import React from 'react';
import {render} from 'ink-testing-library';
import {spy} from 'sinon';
import test from 'ava';
import chalk from 'chalk';
import ConfirmInput from './dist';

chalk.enabled = true;
chalk.level = 0;

test('render', t => {
  const {lastFrame} = render(
    <ConfirmInput
      question="Some random question"
      defaultValue="No"
      externalSeparators="Parenthesis"
    />
  );

  t.is(lastFrame(), 'Some random question (y/N)');
});

test('return boolean on submit', t => {
  const setRef = spy();
  const onChange = spy();
  const onSubmit = spy();

  render(<ConfirmInput ref={setRef} onChange={onChange} onSubmit={onSubmit}/>);

  const ref = setRef.firstCall.args[0];
  ref.handleSubmit('yes');

  t.false(onChange.called);
  t.true(onSubmit.calledOnce);
  t.deepEqual(onSubmit.firstCall.args, [true]);
});
