import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

class Home extends Component
{
	render()
	{
		return(
			<div>
				<section className="advice-home container-fluid section--page eu-background">
					<div className="container column--grid--block">
						<div className="column--item">
							<h2 className="title--section second-color uppercase">{this.props.literals.L22122}</h2>
							<p className="main-title">
								<span className="title">{this.props.literals.L22020}</span> 
								<span className="subtitle">{this.props.literals.L22107}</span>
							</p>
							<div className="">							
							{ReactHtmlParser(this.props.literals.L22108)}
							</div>
							<p className="btn--block-full left-text">
								<a data-ui-sref="about-tool" className="btn-default btn-main-color ng-binding" data-ng-bind="i18n.L22110" href="about-the-system">Discover the tool</a>
							</p>
						</div>
						<div className="column--item valign eu-background">
							<p className="lead-title ng-binding">{this.props.literals.L22109}</p>
						</div>
					</div>
				</section>
				<div className="container preferences--lock">
					<h2 className="title-section main-color text-center ng-binding">{this.props.literals.L22111}</h2>
					<div className="preferences-text ng-binding">
						{ReactHtmlParser(this.props.literals.L22112)}
					</div>
					<form className="ng-pristine ng-valid">
						<div className="country-selected-wrapper">
							<select data-ng-model="pCountry1" data-ng-change="changeCountry()" data-ng-disabled="selectDisabled" className="ng-pristine ng-untouched ng-valid">
								<option value="0" disabled="disabled" className="">{this.props.literals.L22113}</option>
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
								<span className="">{this.props.literals.L22186}
								</span>
							</label>
						</div>
					</form>
				</div>

				{/* CARROUSEL HOME */}
				<section class=" section--page carrousel-items background-main-lighter">
					<div class="container discover--charts--section">
						<h2 class="title-section main-color"></h2>
						<div class="carousel-control-group">
							<Link class="left carousel-control" href="#carousel-tilenav" ng-non-bindable data-slide="next">
								<i class="fa fa-angle-right" aria-hidden="true"></i>
							</Link>
							<Link class="right carousel-control" href="#carousel-tilenav" ng-non-bindable data-slide="prev">
								<i class="fa fa-angle-left" aria-hidden="true"></i>
							</Link>
						</div>
					</div>
					<div class="carousel carousel-showmanymoveone slide" id="carousel-tilenav" data-interval="false">
						<div class="carousel-inner">
							<div class="item active">
								<div class="col-xs-12 col-sm-6 col-md-4 col-ml-3 col-lg-2">
									<div class="content">
										<Link class="icon--card economic-chart-icon" ui-sref="economic-sector-profile ({pCountry:pCountry1})">
										</Link>
										<h3 class="title--card">
											<Link ui-sref="economic-sector-profile ({pCountry:pCountry1})">
											{this.props.literals.L22003}
											</Link>
										</h3>
										<p class="content-text">{ReactHtmlParser(this.props.literals.L22028)}</p>
									</div>
									<p class="btn--card--carousel">
										<Link ui-sref="economic-sector-profile ({pCountry:pCountry1})" class="btn-default btn-main-color btn-full">
										{this.props.literals.L22026}
										</Link>
									</p>
								</div>
							</div>
							<div class="item">
							<div class="col-xs-12 col-sm-6 col-md-4 col-ml-3 col-lg-2">
								<div class="content">
									<Link class="icon--card national-icon" ui-sref="national-strategies">
									</Link>
									<h3 class="title--card">
										<Link ui-sref="national-strategies">
										{this.props.literals.L22007}
										</Link>
									</h3>
									<p class="content-text">{ReactHtmlParser(this.props.literals.L22038)}</p>
								</div>
								<p class="btn--card--carousel">
									<Link ng-if="strategyCountrySelected != '0'" ui-sref="country-profile({pIndicator: 'basic-information', pCountry1: strategyCountrySelected, pCountry2: 0})" class="btn-default btn-main-color btn-full">
									{this.props.literals.L22026}
									</Link>
									<Link ng-if="strategyCountrySelected == '0'" ui-sref="national-strategies" class="btn-default btn-main-color btn-full">
									{this.props.literals.L22026}
									</Link>
								</p>
							</div>
							</div>
							<div class="item">
								<div class="col-xs-12 col-sm-6 col-md-4 col-ml-3 col-lg-2">
									<div class="content">
										<Link class="icon--card work-accidents-icon" ui-sref="work-accidents ({pCountry1:pCountry1})">
										</Link>
										<h3 class="title--card">
											<Link ui-sref="work-accidents ({pCountry1:pCountry1})">
											{this.props.literals.L22010}
											</Link>
										</h3>
										<p class="content-text">{ReactHtmlParser(this.props.literals.L22050)}</p>
									</div>
									<p class="btn--card--carousel">
										<Link ui-sref="work-accidents ({pCountry1:pCountry1})" class="btn-default btn-main-color btn-full">
										{this.props.literals.L22026}
										</Link>
									</p>
								</div>
							</div>
							<div class="item">
								<div class="col-xs-12 col-sm-6 col-md-4 col-ml-3 col-lg-2">
									<div class="content">
										<Link class="icon--card statistics-icon" ui-sref="osh-statistics">
										</Link>
										<h3 class="title--card">
											<Link ui-sref="osh-statistics">
											{this.props.literals.L22018}
											</Link>
										</h3>
										<p class="content-text">{ReactHtmlParser(this.props.literals.L22065)}</p>
									</div>
									<p class="btn--card--carousel">
										<Link ng-if="statisticsCountrySelected != '0'" ui-sref="osh-statistics({pCountry: statisticsCountrySelected})" class="btn-default btn-main-color btn-full">
										{this.props.literals.L22026}
										</Link>
										<Link ng-if="statisticsCountrySelected == '0'" ui-sref="osh-statistics" class="btn-default btn-main-color btn-full">
										{this.props.literals.L22026}
										</Link>
									</p>
								</div>
							</div>
							<div class="item">
								<div class="col-xs-12 col-sm-6 col-md-4 col-ml-3 col-lg-2">
									<div class="content">
										<Link class="icon--card working-conditons-icon" ui-sref="working-conditions">
										</Link>
										<h3 class="title--card">
											<Link ui-sref="working-conditions">
											{this.props.literals.L22013}
											</Link>
										</h3>
										<p class="content-text">{ReactHtmlParser(this.props.literals.L22054)}</p>
									</div>
									<p class="btn--card--carousel">
										<Link ui-sref="working-conditions" class="btn-default btn-main-color btn-full">
										{this.props.literals.L22026}
										</Link>
									</p>
								</div>
							</div>
							<div class="item">
								<div class="col-xs-12 col-sm-6 col-md-4 col-ml-3 col-lg-2">
									<div class="content">
										<Link class="icon--card people-group-icon" ui-sref="workforce-profile">
										</Link>
										<h3 class="title--card">
											<Link ui-sref="workforce-profile" >
											{this.props.literals.L22004}
											</Link>
										</h3>
										<p class="content-text">{ReactHtmlParser(this.props.literals.L22030)}</p>
									</div>
									<p class="btn--card--carousel">
										<Link ui-sref="workforce-profile" class="btn-default btn-main-color btn-full">
										{this.props.literals.L22026}
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* CARROUSEL HOME */}

				<section className="section--page section--our--methodology">
					<div className="agencies--logos--block">
						<ul>
							<li><a href="https://ec.europa.eu/eurostat/" title="visit the  web" target="_blank">
								<img src={require("../../style/img/eurostat-logo.png")} /></a>
							</li>
							<li><a href="https://www.eurofound.europa.eu/" title="visit the  web" target="_blank">
								<img src={require("../../style/img/eurofound-logo.png")} /></a>
							</li>
							<li>
								<a href="https://osha.europa.eu/" title="visit the  web" target="_blank">
								<img src={require("../../style/img/logo.png")} /></a>
							</li>
							<li>
								<a href="https://visualisation.osha.europa.eu/esener#!/en" title="visit the web" target="_blank">
								<img src={require("../../style/img/esener-logo.png")} /></a>
							</li>
						</ul>
					</div>
					<div className="content-methodology">
						<h2 className="">{this.props.literals.L22114}</h2>
						<h3 className="">{this.props.literals.L22115}</h3>
						<p className="">{this.props.literals.L22116}</p>
						<p className="btn--wrapper btn--block-arrow">
							<a ui-sref="about-tool-detail-page({pSection: father, pSubsection: section.toLowerCase(), pIndicator: pIndicatorID})" className="btn-default btn-main-color text-center ng-binding" href="#!/about-the-system/methodology">{this.props.literals.L22117}</a>
						</p>
					</div>
				</section>
			</div>
		)
	}
}

export default Home;