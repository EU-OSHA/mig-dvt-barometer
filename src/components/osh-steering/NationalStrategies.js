import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

class NationalStrategies extends Component
{
	render()
	{
		return(
			<div>
				<section data-ng-if="state.current.name != 'home'" id="not-home-cover" className="advice--icon--block advice--block-not-home background-main-light container-fluid section--page">
					<div className="container horizontal-nopadding">
						<div className="text-advice left-text col-md-8 col-sm-8 col-xs-12  nopadding">
						<h1 clclassNameass="main-color left-text">{this.props.literals.L22007}</h1>
						<p>{this.props.literals.L22038}</p>
						<span>{this.props.literals.L20704} </span> 
						<span>
							<Link to="about-tool-detail-page({pSection: 'osh-steering', pSubsection: 'structure_strategy', pIndicator: '46'})">
							{this.props.literals.L20705}
							</Link>
						</span>
						</div>
						<div className="icon--advice national-icon hide-mobile col-sm-4 col-md-4"></div>
					</div>
				</section>

				<section className="filter--letter--section container">
					<ul className="filter--letter--list">
						{/* FILTER BY LETTER */}
						<li data-ng-repeat="letter in alphabet" className="filter-letter-item">
							<a href data-ng-click="addLetter(letter)" data-ng-bind="letter" data-ng-class="{'active': countryFilter.indexOf(letter)!=-1}"></a>
						</li>
						<li className="reset-item">
							<Link data-ng-click="resetFilter()" class="btn-default btn-main-color btn-reset">{this.props.literals.L20628}</Link>
						</li>
					</ul>
				</section>

				<div className="line background-main-light"></div>
				<section className="national--card--section">
					<div className="card--grid xxs-w1 xs-w3 md-w3 w4 container">
					<div data-ng-repeat="country in countries" className="card--block--rounded national--card--item">
						<div className="resources-item">
						<p className="nopadding additional-img text-center">
							<img  className="flags--wrapper" ng-src="../../style/img/flag/{{::country.country_code.toLowerCase()}}.png" />
						</p>
						<h2 className="text-center" data-ng-bind="i18nLiterals['L'+country.country]"></h2>
						<p className="btn--block-full left-text">
							<Link to="country-profile({pIndicator: 'basic-information', pCountry1:country.country_code, pCountry2: 0})" className="btn-default btn-main-color btn-full" title="{this.props.literals.L20626}">{this.props.literals.L20626}</Link>
						</p>
						<p className="btn--block-full left-text">
							<Link to="EU-challenges-response({pCountry:country.country_code})" className="btn-default btn-main-color btn-full" title="{this.props.literals.L20625}" >{this.props.literals.L20625}</Link>
						</p>
						</div>
					</div>
					</div>
				</section>

			</div>
		)
	}
}

export default NationalStrategies;