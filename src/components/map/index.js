import React from 'react';
import { compose, withProps } from 'recompose';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps';
import whiskies from '../../config/whiskey';
import mapStyles from './map-styles';
import markerIcon from './marker.jpg';

const renderMarkers = () =>
	whiskies.map(whiskey => (
		<Marker
			position={{ lat: whiskey.latitude, lng: whiskey.longitude }}
			icon={markerIcon}
		/>
	));

const render = props => (
	<GoogleMap
		defaultZoom={2}
		defaultCenter={{ lat: 15, lng: 25 }}
		defaultOptions={{ styles: mapStyles }}
	>
		{props.isMarkerShown && renderMarkers()}
	</GoogleMap>
);

const MyMapComponent = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `600px` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)(render);

export default MyMapComponent;
