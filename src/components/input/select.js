import React from 'react';
import DefaultInput from './default';

class Select extends DefaultInput {
	render() {
		return (
			<div>
				{this.props.attributes.label
					? <label>
							{this.props.attributes.label}
						</label>
					: null}
				<select
					{...this.props.attributes}
					className={this.props.state.isValid ? '' : 'error'}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
				>
					<option value="">State</option>
					<option value="NSW">NSW</option>
					<option value="QLD">QLD</option>
					<option value="VIC">VIC</option>
					<option value="WA">WA</option>
					<option value="SA">SA</option>
					<option value="TAS">TAS</option>
					<option value="NT">NT</option>
					<option value="ACT">ACT</option>
				</select>
				{this.props.state.isValid
					? null
					: <div className="errorMessage">
							{this.props.state.validationMessage}
						</div>}
			</div>
		);
	}
}
export default Select;
