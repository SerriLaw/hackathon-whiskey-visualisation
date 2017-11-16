import React, { Component } from 'react';
import { Parser } from 'html-to-react';
import settings from '../../config/settings.json';
import './styles.css';

class NineThirdpartyContent extends Component {
	constructor(props) {
		super(props);
		this.state = { html: '' };
	}

	async componentDidMount() {
		const url =
			this.props.contentType === 'header'
				? settings.default.nineThirdPartyKit.headerUrl
				: settings.default.nineThirdPartyKit.footerUrl;
		const response = await fetch(url, { method: 'get' });
		const htmlInput = await response.text();
		const htmlParser = new Parser();
		const reactElement = htmlParser.parse(htmlInput);
		this.setState({ html: reactElement });
	}

	componentDidUpdate() {
		const element = document.getElementById(this.props.identifier);
		element.className = 'fadeIn';
	}

	render() {
		return (
			<div id={this.props.identifier}>
				{this.props.optional ? null : this.state.html}
			</div>
		);
	}
}

export default NineThirdpartyContent;
