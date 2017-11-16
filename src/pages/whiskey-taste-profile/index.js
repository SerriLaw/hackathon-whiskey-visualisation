import React, { Component } from 'react';
import whiskies from '../../config/whiskey.json';
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	ZAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import './styles.css';

class WhiskeyTasteProfilePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{ smoky: 100, rich: 200 },
				{ smoky: 120, rich: 100 },
				{ smoky: 170, rich: 300 },
				{ smoky: 140, rich: 250 },
				{ smoky: 150, rich: 400 },
				{ smoky: 110, rich: 280 }
			]
		};
	}

	render() {
		return (
			<ScatterChart
				width={1000}
				height={400}
				margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
			>
				<XAxis
					dataKey={'smoky'}
					type="number"
					name="smoky"
					hide={true}
					domain={[0, 100]}
				/>
				<YAxis
					dataKey={'rich'}
					type="number"
					name="rich"
					hide={true}
					domain={[0, 100]}
				/>

				<CartesianGrid />
				<Scatter
					data={this.state.data}
					fill="#b3c335"
					points={[{ cx: 12, cy: 12, r: 4, payload: { x: 12, y: 45, z: 9 } }]}
				/>
				<Tooltip cursor={{ strokeDasharray: '3 3' }} />
			</ScatterChart>
		);
	}
}
export default WhiskeyTasteProfilePage;
