import React, { Component } from 'react';
import validate from '../../utils/file/validate';

class File extends Component {
	handleChange = event => {
		let state = { ...this.props.state };
		state.value = event.target.files[0];

		let validationResult = validate(state);
		state.isValid = validationResult.isValid;
		state.validationMessage = validationResult.validationMessage;

		this.props.updateFormData(event.target.name, state);
	};

	render() {
		return (
			<div>
				<input
					type="file"
					{...this.props.attributes}
					className={this.props.state.isValid ? '' : 'error'}
					onChange={this.handleChange}
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
export default File;
