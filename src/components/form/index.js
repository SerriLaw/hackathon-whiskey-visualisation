import React, { Component } from 'react';
import cookie from '../../utils/cookie';
import RedCarpet from '../red-carpet';
import Checkbox from '../checkbox';
import Input from '../input/default';
import InputMasked from '../input/masked';
import InputFile from '../input/file';
import InputSelect from '../input/select';
import TextArea from '../input/textarea.js';
import Submit from '../submit';
import TermsPdf from './pdf/terms.pdf';
import './styles.css';

class Form extends Component {
	constructor(props) {
		super(props);

		let state = {
			isValid: true,
			formData: {
				dateOfBirth: {
					value: '',
					isValid: true,
					validation: /^([0-9]{2}\/[0-9]{2}\/[0-9]{4})$/,
					isRequired: true,
					errorMessage: 'Please enter a date of birth of the format DD/MM/YYYY'
				},
				phone: {
					value: '',
					isValid: true,
					validation: /^([0-9]{8,20})$/,
					isRequired: true,
					errorMessage: 'Please enter a phone number with at least 8 digits'
				},
				postcode: {
					value: '',
					isValid: true,
					validation: /^([0-9]{3,4})$/,
					isRequired: true,
					errorMessage: 'Please enter a 3 or 4 digit postcode'
				},
				terms: { value: false, isValid: true, isRequired: true },
				age: { value: false, isValid: true, isRequired: true },
				file: {
					value: '',
					isValid: true,
					isRequired: true,
					maxSize: 5 * 1024 * 1024,
					errorMessage: 'Maximum file size 5MB'
				},
				uuid: { value: '', isValid: true, isRequired: true, maxWords: 25 },
				state: { value: '', isValid: true, isRequired: true }
			}
		};

		const nuid = cookie('NUID');
		if (nuid) {
			state.formData.nuid = { value: nuid };
		}

		this.state = state;
	}

	// experimental property initializer syntax to avoid having to bind "this"
	// see https://facebook.github.io/react/docs/handling-events.html
	updateFormData = (key, value) => {
		let formData = { ...this.state.formData };
		formData[key] = value;
		this.setState({ formData });
	};

	getInputProps = (key, attributes) => {
		return {
			state: this.state.formData[key],
			attributes: {
				name: key,
				disabled: this.props.isEntryAvailable === false,
				...attributes
			},
			updateFormData: this.updateFormData
		};
	};

	render() {
		return (
			<div id="logged-in-form">
				<form>
					<InputMasked
						{...this.getInputProps('dateOfBirth', {
							placeholder: 'Date of birth (DD/MM/YYYY)',
							mask: '99/99/9999'
						})}
					/>

					<Input
						{...this.getInputProps('phone', {
							placeholder: 'Phone number',
							maxLength: 13
						})}
					/>

					<Input
						{...this.getInputProps('postcode', {
							placeholder: 'Postcode',
							maxLength: 4
						})}
					/>

					<InputSelect {...this.getInputProps('state', { id: 'state' })} />

					<TextArea
						{...this.getInputProps('uuid', { placeholder: 'custom field' })}
					/>

					<InputFile {...this.getInputProps('file')} />

					<Checkbox {...this.getInputProps('terms')}>
						I have read and understood the&nbsp;
						<a href={TermsPdf} target="_blank" rel="noopener noreferrer">
							terms and conditions
						</a>, collection statement and&nbsp;
						<a
							href="https://login.nine.com.au/privacy?client_id=9nowweb"
							target="_blank"
							rel="noopener noreferrer"
						>
							privacy policy.
						</a>
					</Checkbox>

					<Checkbox {...this.getInputProps('age')}>
						I am 18 years or older
					</Checkbox>

					{this.props.isEntryAvailable
						? null
						: <div id="already-entered">
								Unfortunately you can only enter this competition once per day.
							</div>}

					<Submit
						state={this.state}
						email={this.props.userData.email}
						isEntryAvailable={this.props.isEntryAvailable}
						history={this.props.history}
						setState={this.setState.bind(this)}
					/>
				</form>

				<RedCarpet image="woman" />
			</div>
		);
	}
}
export default Form;
