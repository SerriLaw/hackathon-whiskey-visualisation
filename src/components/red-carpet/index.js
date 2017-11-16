import React from 'react';
import './styles.css';
import allImages from './img';

const RedCarpet = props => {
	const images = allImages[props.image || 'man'];

	return (
		<div className="red-carpet__container">
			<img src={images.bg} alt="logies red carpet" className="red-carpet__bg" />
			<img src={images.flash1} alt="" className="red-carpet__flash flash1" />
			<img src={images.flash2} alt="" className="red-carpet__flash flash2" />
			<img src={images.flash3} alt="" className="red-carpet__flash flash3" />
			<img src={images.flash4} alt="" className="red-carpet__flash flash4" />
		</div>
	);
};
export default RedCarpet;
