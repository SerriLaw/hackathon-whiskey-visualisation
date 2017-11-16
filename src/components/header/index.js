import React from 'react';
import './styles.css';

const Header = () => (
	<div id="pageTops" className="view">
		<header>
			<h1>Whiskey Visualisation</h1>
			<h6>Whiskey - The cause of, and solution to, all life&#39;s problems</h6>
		</header>
		<nav>
			<ul className="navigation">
				<li>
					<a href="/map">Whiskey Map</a>
				</li>
				<li>
					<a href="/whiskey-ratings">Sorted by Ratings</a>
				</li>
				<li>
					<a href="/whiskey-colors">Colour Wheel</a>
				</li>
				<li>
					<a href="/whiskey-taste-profile">Taste Profile</a>
				</li>
			</ul>
		</nav>
	</div>
);
export default Header;
