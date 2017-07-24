import {h, build, renderToString} from 'ink';
import {spy} from 'sinon';
import test from 'ava';
import ConfirmInput from '.';

test('render', t => {
	t.is(renderToString(<ConfirmInput value='Yes'/>), 'Yes');
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
