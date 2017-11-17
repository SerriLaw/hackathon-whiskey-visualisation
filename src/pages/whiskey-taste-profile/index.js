import React, { Component } from 'react';
import whiskies from '../../config/whiskey.json';
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	LabelList,
	Label,
	Legend,
	Text
} from 'recharts';
import './styles.css';

class WhiskeyTasteProfilePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: whiskies
		};
	}

	getPoints(data) {}

	render() {
		return (
			<div>
				<h2>Taste Profile</h2>
				<div className="container">
					<div className="row">
						<h3>SMOKY</h3>
					</div>
					<div className="aligner">
						<div className="mrow-one">
							<h3>LIGHT</h3>
						</div>
						<div className="mrow">
							<ScatterChart
								width={800}
								height={800}
								margin={{ right: 20, left: 20 }}
							>
								<XAxis
									dataKey={'light_rich'}
									type="number"
									name="Light to Rich"
									hide={true}
									domain={[0, 10]}
									padding={{ left: 10, right: 10 }}
								/>
								<YAxis
									dataKey={'delicate_smoky'}
									type="number"
									name="Delicate to Smoky"
									hide={true}
									domain={[0, 10]}
									padding={{ top: 10, bottom: 10 }}
								/>

								<CartesianGrid strokeDasharray="3 3" />
								<Scatter data={this.state.data} fill="#592403" />
								<Tooltip cursor={false} />
							</ScatterChart>
						</div>
						<div className="mrow-last">
							<h3>RICH</h3>
						</div>
					</div>
					<div className="row">
						<h3>DELICATE</h3>
					</div>
				</div>
			</div>
		);
	}
}
export default WhiskeyTasteProfilePage;
