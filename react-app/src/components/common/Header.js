import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component
{
	render()
	{
		return(
			<div id="header">
				<h1>OSH-Barometer</h1>
				<NavLink className="header-link" to="/">Home</NavLink>
				<NavLink className="header-link" to="/generic-information/osh-authorities">OSH Authorities</NavLink>
				<NavLink className="header-link" to="/generic-information/economic-sector-profile">Economic and Sector Profile</NavLink>
				<NavLink className="header-link" to="/generic-information/workforce-profile">Workforce Profile</NavLink>
			</div>
		)
	}
}

export default Header;