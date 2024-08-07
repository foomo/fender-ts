import { string } from 'superstruct';
import { fend, min, optional } from '../../../src';

export const Struct = fend(string(), optional, min(10));

export const data = 'foobar';

export const failures = [
	{
		value: 'foobar',
		type: 'string',
		refinement: 'min',
		path: [],
		branch: [data],
	},
];
