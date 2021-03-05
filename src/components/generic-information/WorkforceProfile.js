import React, { Component } from 'react';

class WorkforceProfile extends Component
{
	render()
	{
		return(
			<div className="workforce--page">
				<section data-ng-if="state.current.name != 'home'" id="not-home-cover" className="advice--icon--block advice--block-not-home background-main-light container-fluid section--page">
					<div className="container horizontal-nopadding">
						<div className="left-text col-md-8 col-sm-8 col-xs-12 nopadding">
							<h1 className="main-color left-text ng-binding" data-ng-bind="i18nLiterals.L22004">Workforce profile</h1>
							<p data-ng-bind="i18nLiterals.L22030" className="ng-binding">This indicator includes a few key data on ageing workers and the workforce: median age, employment rate of different age groups, total and sex.</p>
							<span data-ng-bind="(i18nLiterals.L20696)+(' ')+(i18nLiterals.L20704)" className="">Source: EUROSTAT. For further information refer to</span> <span><a data-ng-bind="i18nLiterals.L20705" ui-sref="about-tool-detail-page({pSection: 'generic-information', pSubsection: 'workforce_profile', pIndicator: '37'})" className="" href="#!/about-the-system/methodology">Methodology</a></span>
						</div>
						<div className="icon--advice people-group-icon hide-mobile col-sm-4 col-md-4"></div>
					</div>
				</section>

				<div className="filter--indicator--block container">
					<ul className="indicators--group xs-row">
						<li id="filter1">
							<label htmlFor="indicatorSelect" data-ng-bind="i18nLiterals.L20623" className="ng-binding">SELECT THE INDICATOR</label> 
							<select id="indicatorSelect" className="filter--dropdown--list ng-pristine ng-untouched ng-valid" data-ng-model="selectedIndicator" data-ng-change="selectChange()">
								<option value="median-age" data-ng-bind="i18nLiterals.L294" className="ng-binding">Median age of population</option>
								<option value="employment-rate" data-ng-bind="i18nLiterals.L20621" className="ng-binding">Employment rate</option>
								<option value="unemployment-rate" data-ng-bind="i18nLiterals.L291" className="ng-binding">Unemployment rate</option>
							</select>
						</li>
						<li id="filter2" data-ng-className="{'disabled':selectedIndicator == 'median-age' || selectedIndicator == 'unemployment-rate'}" className="disabled">
							<label htmlFor="employeeGroupSelect" data-ng-bind="i18nLiterals.L20622" className="ng-binding">EMPLOYEE GROUP</label> 
							<select id="employeeGroupSelect" className="filter--dropdown--list ng-pristine ng-untouched ng-valid" data-ng-disabled="selectedIndicator == 'median-age' || selectedIndicator== 'unemployment-rate'" data-ng-model="selectedSubIndicator" data-ng-change="selectChange()" disabled="disabled">
								<option data-ng-bind="i18nLiterals.L295" value="ageing-workers" className="ng-binding">Ageing workers</option>
								<option data-ng-repeat="gender in genders" value="Female" data-ng-bind="i18nLiterals['L'+gender.gender_name]" className="ng-binding ">Female</option>
								<option data-ng-repeat="gender in genders" value="Male" data-ng-bind="i18nLiterals['L'+gender.gender_name]" className="ng-binding ">Male</option>
								<option data-ng-repeat="gender in genders" value="Total" data-ng-bind="i18nLiterals['L'+gender.gender_name]" className="ng-binding ">Total</option>
							</select>

							<label data-ng-if="selectedIndicator == 'median-age'" className="alert-disabled " data-ng-bind="i18nLiterals.L20694">Not applied to Median Age</label>
						</li>
						{/* COUNTRY FILTER JUST IN < 1024 PX */}
						<li id="filter3" className="filter--dropdown--wrapper">
							<label htmlFor="countrySelect">Country:</label>
							{/*<label className="main-color  dropdwon-open" onClick="openSelect($event)"></label>*/}
							<div className="filter--dropdown--list">
								<p className="option-title" data-ng-bind="i18nLiterals.L20630" ng-onClick="openSelect($event)">Country</p>
								<ul className="filter--dropdown--options">
								<li data-ng-repeat="country in countries" className="">
									<input id="country-filter-822" defaultChecked="!!country.param &amp;&amp; country.param ==country.country_code" onClick="toggleCountryClick($event, $index)" type="checkbox" value="{&quot;country_code&quot;:&quot;EU27_2020&quot;,&quot;country_name&quot;:822}" /> 
									<label data-ng-if="country.country_code == 'EU27_2020'" htmlFor="country-filter-822" data-ng-bind="i18nLiterals['L'+country.country_name]" className="ng-binding ">EU27_2020</label>
								</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default WorkforceProfile;