import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './styles.css';

const Records = props =>
	<div>
		<ReactTable
			data={props.whiskies}
			columns={[
				{
					Header: 'Name & Distillery',
					columns: [
						{
							Header: 'Name',
							accessor: 'name',
							minWidth: 370
						},
						{
							Header: 'Distillery',
							accessor: 'distillery',
							minWidth: 170
						}
					]
				},
				{
					Header: 'Ratings',
					columns: [
						{
							Header: 'Aroma',
							accessor: 'aroma',
							maxWidth: 70
						},
						{
							Header: 'Taste',
							accessor: 'taste',
							maxWidth: 70
						},
						{
							Header: 'Finish',
							accessor: 'finish',
							maxWidth: 70
						},
						{
							Header: 'Overall',
							id: 'overall',
							accessor: 'overall',
							maxWidth: 70
						}
					]
				},
				{
					Header: 'Link',
					columns: [
						{
							Header: '',
							Cell: cellInfo =>
								<a href={cellInfo.original.url} target="_blank">
									<span role="img" aria-label="link">
										🔗
									</span>
								</a>
						}
					]
				}
			]}
			defaultSorted={[
				{
					id: 'overall',
					desc: true
				},
				{
					id: 'name',
					desc: false
				}
			]}
			defaultPageSize={10}
			className="-striped -highlight"
		/>
	</div>;
export default Records;
