import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/header';
import Router from '../router';
import Footer from '../../components/footer';
import './styles.css';

const Layout = () =>
	<div id="wrapper">
		<div id="inner_content">
			<Header />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<Footer />
		</div>
	</div>;

export default Layout;
