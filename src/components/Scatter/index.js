import React from 'react';
import { Scatter } from 'recharts';

class CustomScatter extends Scatter {
	constructor(props) {
		super(props);
		console.log(this);
		const points = this.props.points;
	}

	onMouseEnter(arg1, arg2, arg3, arg4) {
		console.log(arg1);
		console.log(arg2);
		console.log(arg3);
		console.log(arg4);
	}

	render() {
		return <div>HELLO</div>;
	}
}

// const renderMarkers = ({ whiskies, handleClick }) => (
// 	<MarkerClusterer
// 		averageCenter
// 		enableRetinaIcons
// 		gridSize={20}
// 		minimumClusterSize={3}
// 	>
// 		{whiskies.map(whiskey => (
// 			<Marker
// 				position={{ lat: whiskey.latitude, lng: whiskey.longitude }}
// 				icon={{ url: markerIcon, anchor: { x: 9, y: 0 } }}
// 				onClick={() => handleClick(whiskey)}
// 			/>
// 		))}
// 	</MarkerClusterer>
// );

// const render = props => (
// 	<GoogleMap
// 		defaultZoom={2}
// 		defaultCenter={{ lat: 15, lng: 25 }}
// 		defaultOptions={{ styles: mapStyles }}
// 	>
// 		{props.isMarkerShown && renderMarkers(props)}
// 	</GoogleMap>
// );

// const MyMapComponent = compose(
// 	withProps({
// 		googleMapURL:
// 			'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
// 		loadingElement: <div style={{ height: `100%` }} />,
// 		containerElement: <div style={{ height: `600px` }} />,
// 		mapElement: <div style={{ height: `100%` }} />
// 	}),
// 	withScriptjs,
// 	withGoogleMap
// )(render);

export default CustomScatter;
