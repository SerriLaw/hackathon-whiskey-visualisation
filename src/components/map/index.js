import React from 'react';
import { compose, withProps } from 'recompose';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps';
import mapStyles from './map-styles';

const MyMapComponent = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)(props =>
	<GoogleMap
		defaultZoom={2}
		defaultCenter={{ lat: 15, lng: 25 }}
		defaultOptions={{ styles: mapStyles }}
	>
		{props.isMarkerShown &&
			<Marker position={{ lat: -34.397, lng: 150.644 }} />}
	</GoogleMap>
);

export default MyMapComponent;
