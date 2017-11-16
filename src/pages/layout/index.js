import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../router';
import './styles.css';

const Layout = () => (
	<div id="wrapper">
		<div id="inner_content">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	</div>
);

export default Layout;
