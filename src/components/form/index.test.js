import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import SUT from './index';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<MemoryRouter>
			<SUT userData={{ email: 'here@there.com' }} />
		</MemoryRouter>,
		div
	);
});

it('shallow renders without crashing', () => {
	const div = document.createElement('div');
	shallow(<SUT userData={{ email: 'here@there.com' }} />, div);
});
