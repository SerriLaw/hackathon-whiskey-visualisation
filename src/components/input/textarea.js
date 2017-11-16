import React from 'react';
import DefaultInput from './default';

class Textarea extends DefaultInput {
	constructor(props) {
		super(props);
		this.state = {
			wordCount: props.state.maxWords
		};
	}

	handleKeyUp = event => {
		const value = event.target.value;
		if (value) {
			const words = value.match(/\S+/g).length;
			const wordCount = this.props.state.maxWords - words;
			this.setState({ wordCount });
		}
	};

	render() {
		return (
			<div>
				{this.props.attributes.label
					? <label>
							{this.props.attributes.label}
						</label>
					: null}
				<textarea
					{...this.props.attributes}
					className={this.props.state.isValid ? '' : 'error'}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
					onKeyUp={this.handleKeyUp}
				/>
				<div id="remaining">
					Remaining: <span id="counter">{this.state.wordCount}</span>
				</div>
				{this.props.state.isValid
					? null
					: <div className="errorMessage">
							{this.props.state.validationMessage}
						</div>}
			</div>
		);
	}
}
export default Textarea;
