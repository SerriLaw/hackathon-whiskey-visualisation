import React from 'react';
import { compose, withProps } from 'recompose';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
import mapStyles from './map-styles';
import markerIcon from './bottle-small.png';

const renderMarkers = ({ whiskies, handleClick }) =>
	<MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
		{whiskies.map(whiskey =>
			<Marker
				position={{ lat: whiskey.latitude, lng: whiskey.longitude }}
				icon={markerIcon}
				onClick={() => handleClick(whiskey)}
			/>
		)}
	</MarkerClusterer>;

const render = props =>
	<GoogleMap
		defaultZoom={2}
		defaultCenter={{ lat: 15, lng: 25 }}
		defaultOptions={{ styles: mapStyles }}
	>
		{props.isMarkerShown && renderMarkers(props)}
	</GoogleMap>;

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
