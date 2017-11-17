import React, { Component } from 'react';
import whiskies from '../../config/whiskey.json';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip
} from 'recharts';
import './styles.css';

class WhiskeyRatingsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: whiskies,
			legendNames: ['Aroma', 'Taste', 'Finish', 'Overall'],
			topTen: whiskies
				.sort(function(a, b) {
					return a.overall < b.overall ? 1 : -1;
				})
				.slice(0, 10)
		};
	}

	render() {
		return (
			<div>
				<h2>Whiskey Ratings</h2>
				<div>
					<h3>Top 10</h3>
					<table>
						<thead>
							<tr>
								<td>Rank</td>
								<td>Whiskey</td>
							</tr>
						</thead>
						<tbody>
							{this.state.topTen.map(function(item, index) {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{item.name}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<LineChart
					width={1000}
					height={600}
					data={this.state.data}
					margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
				>
					<XAxis dataKey="name" hide={true} padding={{ left: 20, right: 20 }} />
					<YAxis hide={true} domain={[0, 10]} />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Line
						type="monotone"
						dataKey="aroma"
						stroke="#53111d"
						strokeWidth="2"
						activeDot={{ r: 10 }}
					/>
					<Line
						type="monotone"
						dataKey="taste"
						stroke="#932d18"
						strokeWidth="2"
						activeDot={{ r: 6 }}
					/>
					<Line
						type="monotone"
						dataKey="finish"
						stroke="#d9762b"
						strokeWidth="2"
						activeDot={{ r: 10 }}
					/>
					<Line
						type="monotone"
						dataKey="overall"
						stroke="#a47963"
						strokeWidth="2"
						activeDot={{ r: 8 }}
					/>
				</LineChart>
				<div className="legend">
					<div className="legendName">
						<span className="icon icon1" />Aroma
					</div>
					<div className="legendName">
						<span className="icon icon2" />Taste
					</div>
					<div className="legendName">
						<span className="icon icon3" />Finish
					</div>
					<div className="legendName">
						<span className="icon icon4" />Overall
					</div>
				</div>
			</div>
		);
	}
}
export default WhiskeyRatingsPage;
