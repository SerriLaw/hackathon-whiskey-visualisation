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
							accessor: 'name'
						},
						{
							Header: 'Distillery',
							accessor: 'distillery'
						}
					]
				},
				{
					Header: 'Ratings',
					columns: [
						{
							Header: 'Aroma',
							accessor: 'aroma'
						},
						{
							Header: 'Taste',
							accessor: 'taste'
						},
						{
							Header: 'Finish',
							accessor: 'finish'
						},
						{
							Header: 'Overall',
							accessor: 'overall'
						}
					]
				},
				{
					Header: 'Link',
					columns: [
						{
							Header: 'Link',
							accessor: 'url'
						}
					]
				}
			]}
			defaultPageSize={10}
			className="-striped -highlight"
		/>
	</div>;
export default Records;
