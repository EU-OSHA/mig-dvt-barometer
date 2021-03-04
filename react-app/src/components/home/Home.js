import React, { Component } from 'react';

class Home extends Component
{
	render()
	{
		return(
			<div>
				<section className="advice-home container-fluid section--page eu-background">
					<div className="container column--grid--block">
						<div className="column--item">
							<h2 className="title--section second-color uppercase ng-binding" data-ng-bind="i18n.L22122">ABOUT US</h2>
							<p className="main-title">
								<span className="title ng-binding" data-ng-bind="i18n.L22020">OSH BAROMETER</span> 
								<span className="subtitle ng-binding" data-ng-bind="i18n.L22107">Data visualisation tool</span>
							</p>
							<div data-ng-bind-html="i18n.L22108" className="">
								<p>The OSH Barometer is an EU-wide public information system on the most important facts and figures of <strong>Occupational Safety and Health</strong>. The system provides visualised information for important OSH indicators at EU and national level; it is based on statistics, surveys and public data.</p>
								<p>The OSH Barometer presents data from several different sources; some dating back to 2010 where trends are presented. At the time these data were collected, the UK was still a member of the European Union and therefore the UK results are included in the OSH Barometer and the EU average is presented as EU28. In successive updates of the OSH Barometer, UK data will be progressively eliminated.</p>
							</div>
							<p className="btn--block-full left-text">
								<a data-ui-sref="about-tool" className="btn-default btn-main-color ng-binding" data-ng-bind="i18n.L22110" href="about-the-system">Discover the tool</a>
							</p>
						</div>
						<div className="column--item valign eu-background">
							<p className="lead-title ng-binding" data-ng-bind="i18n.L22109">The OSH BAROMETER is a reliable public information system on facts and figures of OSH in the EU.</p>
						</div>
					</div>
				</section>
				<div className="container preferences--lock">
					<h2 className="title-section main-color text-center ng-binding" data-ng-bind="i18n.L22111">Select your preferences</h2>
					<div className="preferences-text ng-binding" data-ng-bind-html="i18n.L22112">
						<p>The countries selected will always be shown first be kept while navigating through the tool.</p>
						<p>You can change the country selection on every page. To change your preferences please return to this page. </p>
					</div>
					<form className="ng-pristine ng-valid">
						<div className="country-selected-wrapper">
							<select data-ng-model="pCountry1" data-ng-change="changeCountry()" data-ng-disabled="selectDisabled" className="ng-pristine ng-untouched ng-valid">
								<option value="0" disabled="disabled" data-ng-bind="i18n.L22113" className="">Choose country of interest</option>
								<option value="AT">(AT) Austria</option>
								<option value="BE">(BE) Belgium</option>
								<option value="BG">(BG) Bulgaria</option>
								<option value="CH">(CH) Switzerland</option>
								<option value="CY">(CY) Cyprus</option>
								<option value="CZ">(CZ) Czechia</option>
								<option value="DE">(DE) Germany</option>
								<option value="DK">(DK) Denmark</option>
								<option value="EE">(EE) Estonia</option>
								<option value="EL">(EL) Greece</option>
								<option value="ES">(ES) Spain</option>
								<option value="FI">(FI) Finland</option>
								<option value="FR">(FR) France</option>
								<option value="HR">(HR) Croatia</option>
								<option value="HU">(HU) Hungary</option>
								<option value="IE">(IE) Ireland</option>
								<option value="IS">(IS) Iceland</option>
								<option value="IT">(IT) Italy</option>
								<option value="LT">(LT) Lithuania</option>
								<option value="LU">(LU) Luxembourg</option>
								<option value="LV">(LV) Latvia</option>
								<option value="MT">(MT) Malta</option>
								<option value="NL">(NL) Netherlands</option>
								<option value="NO">(NO) Norway</option>
								<option value="PL">(PL) Poland</option>
								<option value="PT">(PT) Portugal</option>
								<option value="RO">(RO) Romania</option>
								<option value="SE">(SE) Sweden</option>
								<option value="SI">(SI) Slovenia</option>
								<option value="SK">(SK) Slovakia</option>
							</select>
							<label className="country-unlock disabled" data-ng-className="{disabled: pCountry1=='0'}" ng-click="pCountry1=='0' || saveCountry($event)" data-ng-disabled="true" disabled="disabled">
								<i className="fa" aria-hidden="true"></i>
								<i className="fas fa-lock-open"></i>
								</label>
						</div>
						<div className="country-selected">
							<label data-ng-show="selectDisabled" className="ng-hide">
								&nbsp; <i className="fa fa-check" aria-hidden="true"></i> 
								<span data-ng-bind="i18n.L22186" className="">Country selected!
								</span>
							</label>
						</div>
					</form>
				</div>
				<section className="section--page section--our--methodology">
					<div className="agencies--logos--block">
						<ul>
							<li><a href="https://ec.europa.eu/eurostat/" title="visit the  web" target="_blank">
								<img src="../style/img/eurostat-logo.png" /></a>
							</li>
							<li><a href="https://www.eurofound.europa.eu/" title="visit the  web" target="_blank">
								<img src="../style/img/eurofound-logo.png" /></a>
							</li>
							<li>
								<a href="https://osha.europa.eu/" title="visit the  web" target="_blank"><img src="../style/img/logo.png" /></a>
							</li>
							<li>
								<a href="https://visualisation.osha.europa.eu/esener#!/en" title="visit the web" target="_blank">
								<img src="../style/img/esener-logo.png" /></a>
							</li>
						</ul>
					</div>
					<div className="content-methodology">
						<h2 data-ng-bind="i18n.L22114" className="">METHODOLOGY</h2>
						<h3 data-ng-bind="i18n.L22115" className="">EU-OSHA ensures the highest possible transparency and data quality</h3>
						<p data-ng-bind="i18n.L22116" className="">This methodology informs about our approach, the sources and selection of data, calculation methods and it contains all references and data sources that were used to provide texts, diagrams and tables.</p>
						<p className="btn--wrapper btn--block-arrow">
							<a ui-sref="about-tool-detail-page({pSection: father, pSubsection: section.toLowerCase(), pIndicator: pIndicatorID})" className="btn-default btn-main-color text-center ng-binding" data-ng-bind="i18n.L22117" href="#!/about-the-system/methodology">Discover the methodology</a>
						</p>
					</div>
				</section>
			</div>
		)
	}
}

export default Home;