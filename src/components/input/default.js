import React, { Component } from 'react';
import validateInput from '../../utils/validate/input';

class Default extends Component {
	handleChange = event => {
		let state = { ...this.props.state };
		state.value = event.target.value;
		this.props.updateFormData(this.props.attributes.name, state);
	};

	handleBlur = event => {
		let state = { ...this.props.state };

		let validationResult = validateInput(this.props.state);
		state.isValid = validationResult.isValid;
		state.validationMessage = validationResult.validationMessage;

		this.props.updateFormData(this.props.attributes.name, state);
	};

	render() {
		return (
			<div>
				<input
					{...this.props.attributes}
					type={this.props.attributes.type || 'text'}
					className={this.props.state.isValid ? '' : 'error'}
					value={this.props.state.value}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
				/>
				{this.props.state.isValid
					? null
					: <div className="errorMessage">
							{this.props.state.validationMessage}
						</div>}
			</div>
		);
	}
}
export default Default;
