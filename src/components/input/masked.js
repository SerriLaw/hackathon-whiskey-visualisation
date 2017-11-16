import React from 'react';
import DefaultInput from './default';
import MaskedInput from 'react-input-mask';

class Masked extends DefaultInput {
	render() {
		return (
			<div>
				<MaskedInput
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
export default Masked;
