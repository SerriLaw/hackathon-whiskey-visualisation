import React, { Component } from 'react';
import settings from '../../config/settings';
import submitForm from '../../utils/submit';
import submitFile from '../../utils/file/submit';
import cookie from '../../utils/reentry/cookie';
import validateForm from '../../utils/validate/form';
import SubmitButton from './submit.jpg';
import './styles.css';

class Submit extends Component {
	handleSubmit = async event => {
		if (this.props.isEntryAvailable === false) {
			return;
		}

		try {
			const newState = validateForm(this.props.state);
			if (newState.isValid === false) {
				this.props.setState(newState);
				return;
			}

			const filenames = await submitFile(this.props.state.formData.file.value);
			const response = await submitForm(this.props.state.formData, filenames);

			cookie.createReentryCookie(
				this.props.email,
				settings.compEngine.phaseId,
				response.reentryAvailable,
				response.reentryAfter
			);
			this.props.history.push('/thanks', this.props.userData);
		} catch (error) {
			if (error.message === 'Phase is closed') {
				this.props.history.push('/closed');
			} else {
				this.props.history.push('/error');
			}
		}
	};

	render() {
		return (
			<span
				id="submit"
				className={this.props.isEntryAvailable ? '' : 'submit__invalid'}
				onClick={this.handleSubmit}
			>
				<img src={SubmitButton} alt="submit form" />
			</span>
		);
	}
}
export default Submit;
