import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './styles.css';

const filterMethod = (filter, row) => row[filter.id] >= filter.value;

const Records = props => (
	<div>
		<ReactTable
			data={props.whiskies}
			filterable
			columns={[
				{
					Header: 'Details',
					columns: [
						{
							Header: 'Name',
							accessor: 'name',
							minWidth: 370
						},
						{
							Header: 'Distillery',
							accessor: 'distillery',
							minWidth: 120
						},
						{
							Header: 'Country',
							accessor: 'country',
							minWidth: 100
						}
					]
				},
				{
					Header: 'Ratings',
					columns: [
						{
							Header: 'Aroma',
							accessor: 'aroma',
							maxWidth: 70,
							filterMethod
						},
						{
							Header: 'Taste',
							accessor: 'taste',
							maxWidth: 70,
							filterMethod
						},
						{
							Header: 'Finish',
							accessor: 'finish',
							maxWidth: 70,
							filterMethod
						},
						{
							Header: 'Overall',
							id: 'overall',
							accessor: 'overall',
							maxWidth: 70,
							filterMethod
						}
					]
				},
				{
					Header: 'Link',
					columns: [
						{
							Header: '',
							maxWidth: 50,
							Cell: cellInfo => (
								<a href={cellInfo.original.url} target="_blank">
									<span role="img" aria-label="link">
										🔗
									</span>
								</a>
							)
						}
					]
				}
			]}
			getTrProps={(state, rowInfo, column, instance) => {
				return {
					onClick: e => {
						console.log('Cell - onMouseEnter', {
							state,
							rowInfo,
							column,
							instance,
							event: e
						});
						props.handleClick(rowInfo.original);
					}
				};
			}}
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
			defaultPageSize={20}
			className="-striped -highlight"
		/>
	</div>
);
export default Records;
