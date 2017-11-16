import React, { Component } from 'react';
import './styles.css';

class Checkbox extends Component {
	handleChange = event => {
		if (this.props.attributes.disabled) {
			return;
		}

		let state = { ...this.props.state };
		state.value = !this.props.state.value;
		this.props.updateFormData(this.props.attributes.name, state);
	};

	render() {
		return (
			<div
				className={`checkbox-container ${this.props.state.isValid
					? ''
					: 'error'} ${this.props.isEntryAvailable ? '' : 'disabled'}`}
				onClick={this.handleChange}
			>
				<span
					className={`checkbox-image ${this.props.state.value
						? 'checked'
						: ''}`}
				/>
				<span className="checkbox-text">
					{this.props.children}
				</span>
			</div>
		);
	}
}
export default Checkbox;
