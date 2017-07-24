import {h, build, renderToString, Text} from 'ink';
import {spy} from 'sinon';
import test from 'ava';
import ConfirmInput from '.';

test('render', t => {
	t.is(renderToString(<ConfirmInput placeholder='Yes'/>), renderToString(<Text dim>Yes</Text>));
});

test('return boolean on submit', t => {
	const setRef = spy();
	const onChange = spy();
	const onSubmit = spy();

	build(<ConfirmInput ref={setRef} onChange={onChange} onSubmit={onSubmit}/>);

	const ref = setRef.firstCall.args[0];
	ref.handleSubmit('yes');

	t.false(onChange.called);
	t.true(onSubmit.calledOnce);
	t.deepEqual(onSubmit.firstCall.args, [true]);
});

test('return boolean on change', t => {
	const setRef = spy();
	const onChange = spy();
	const onSubmit = spy();

	build(<ConfirmInput ref={setRef} onChange={onChange} onSubmit={onSubmit}/>);

	const ref = setRef.firstCall.args[0];
	ref.handleChange('no');

	t.true(onChange.calledOnce);
	t.deepEqual(onChange.firstCall.args, [false]);
	t.false(onSubmit.called);
});
