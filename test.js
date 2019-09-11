import React, {useState} from 'react';
import test from 'ava';
import chalk from 'chalk';
import {render} from 'ink-testing-library';
import {spy} from 'sinon';
import ConfirmInput from '.';

const CURSOR = chalk.inverse(' ');
const ENTER = '\r';

const StatefulConfirmInput = props => {
	const [value, setValue] = useState('');

	return (
		<ConfirmInput {...props} value={value} onChange={setValue}/>
	);
};

test('render', t => {
	const {lastFrame} = render(<ConfirmInput value="Yes"/>);
	t.is(lastFrame(), `Yes${CURSOR}`);
});

test('return boolean on submit', t => {
	const onSubmit = spy();
	const {lastFrame, stdin} = render(<StatefulConfirmInput onSubmit={onSubmit}/>);

	t.is(lastFrame(), CURSOR);
	stdin.write('Yes');
	t.is(lastFrame(), `Yes${CURSOR}`);

	stdin.write(ENTER);
	t.true(onSubmit.calledOnce);
	t.true(onSubmit.calledWith(true));
});
