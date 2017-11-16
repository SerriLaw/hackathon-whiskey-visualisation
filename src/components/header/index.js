import React from 'react';
import './styles.css';
import logo from './logo.png';
import win from './win.png';

const Header = () =>
	<div id="pageTops" className="view">
		<img src={logo} alt="Logo" id="logiesLogo" />
		<br />
		<br />
		<img src={win} alt="WIN" id="winTile" />
		<div className="main-text">
			<p className="mtext1">
				TV stars, sharp suits, glamorous frocks, <br />
				<nobr>an outrageous outfit or two </nobr> — that's the Logies!
			</p>
			<p className="mtext2">
				Show us what you'd wear on the red carpet and you could win the chance
				to be a seat filler at the awards, tickets to the after party, flights,
				accommodation <nobr>and $500 spending money too.</nobr>
			</p>
		</div>
	</div>;
export default Header;
