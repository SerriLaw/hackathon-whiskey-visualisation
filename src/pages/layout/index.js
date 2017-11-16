import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/header';
import NineThirdpartyContent from '../../components/nine-thirdparty-content';
import Router from '../router';
import Footer from '../../components/footer';
import './styles.css';

const Layout = () =>
	<div id="wrapper">
		<NineThirdpartyContent
			optional={false}
			contentType="header"
			identifier="msnau_header"
		/>
		<div id="inner_content">
			<Header />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<Footer />
		</div>
		<NineThirdpartyContent
			optional={false}
			contentType="footer"
			identifier="msnau_footer"
		/>
	</div>;

export default Layout;
