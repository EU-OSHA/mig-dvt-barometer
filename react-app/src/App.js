import React, { Component } from 'react';

import './style/css/bootstrap-dvt.css';
import './style/base/common.scss';
import './style/base/menu.scss';
import './style/App.scss';

class App extends Component
{
	render()
	{
		return(
<div>
	<header data-ng-class="getPageSetClass()" class="ng-isolate-scope">
		<section class="bar-header container-fluid">
			<div class="header--top">
			  	<div class="osh-barometer-legend">
			    	<h1 class="main-title"><a ui-sref="home" title="OSH BAROMETER Home" href=""><span class="title">OSH BAROMETER</span> <span class="lead-title">Data Visualisation Tool</span></a></h1>
			  	</div>
			  	<div class="eu-osha-logo">
			        <a href="https://osha.europa.eu" role="link" title="EUOSHA corporate website" tabindex="0" >
						<picture>
							<source media="(max-width:619px)" srcset="/style/img/EU-OSHA-en-x2.png" />
							<img src="/style/img/EU-OSHA-en.png" alt="European Agency for Safety and Health at Work" />
						</picture>
			        </a>
			    </div>
			 	<nav class="menu-tools-top">
			      	<ul class="menu-tools-top--items list-inline">
			          <li class="search--block">
			            <i class="fa fa-search icon-glass-tablet tablet-show" aria-hidden="true"></i>
			            <form action="" class="search--form ng-pristine ng-valid">
			              <div class="form-group has-feedback"><label for="search" class="sr-only ng-binding" data-ng-bind="i18n_literals.L378">Search</label> <input type="text" class="form-control" name="search" id="search" placeholder="Search" /> <i class="fa fa-search form-control-feedback" aria-hidden="true"></i></div>
			            </form>
			          </li>
			          <li class="zoom--text"><span class="a_small"><a onclick="zoomSmall()" title="Smaller text">a</a></span> <span class="a_medium"><a onclick="zoomMedium()" title="Optimised defaults">a</a></span> <span class="a_big"><a onclick="zoomBig()" title="Bigger text">a</a></span></li>
			          <li class="print--block"><a href="javascript:" title="Print page" onclick="window.print()"><i class="fa fa-print" aria-hidden="true"></i><label for="search" class="sr-only ng-binding" data-ng-bind="i18n_literals.L364">Print page</label></a></li>
			          <li id="google_translate_element_wrapper">
			          </li>
			        </ul>
			 	</nav>
			</div>
			<nav class="bar-main-menu navbar">
			  <div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-menu" aria-expanded="false"><span class="sr-only">Toggle navigation</span> <span class="icon-bar bar1"></span> <span class="icon-bar bar2"></span> <span class="icon-bar bar3"></span></button></div>
			  <div class="collapse navbar-collapse" id="main-menu">

			    <ul class="nav navbar-nav">
			      <li class="dropdown ng-scope main-menu-selected" ng-repeat="level0 in structure" ng-class="isCurrentStateMenu('home')">
			        <a ng-if="!level0.levels &amp;&amp; level0.sref" ui-sref="home" accesskey="0" tabindex="1" class="ng-scope" href="">
			        <span ng-if="level0.id == 'home'" data-ng-bind-html="level0.name" class="ng-binding ng-scope"><i class="fa fa-home"></i> <span>Home</span></span>
			        </a>
			      </li>
			      
			      <li class="dropdown ng-scope" ng-repeat="level0 in structure" ng-class="isCurrentStateMenu('generic-information')">
			        <a ng-if="level0.levels &amp;&amp; level0.target" class="dropdown-toggle ng-scope" data-toggle="dropdown" role="button" aria-haspopup="true" target="_self" aria-expanded="false" tabindex="2"><span data-ng-bind-html="i18n_literals[level0.name]" class="ng-binding">Generic information</span> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
			        <ul class="dropdown-menu ng-scope" ng-if="level0.levels">

			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('osh-authorities')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="osh-authorities" id="osh-authorities" accesskey="1" class="ng-scope" href="generic-information/osh-authorities">
			             	<span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">OSH authorities</span>
			            </a>
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('economic-sector-profile')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="economic-sector-profile" id="economic-sector-profile" accesskey="" class="ng-scope" href="generic-information/economic-sector-profile"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Economic and sector profile</span></a>
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('workforce-profile')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="workforce-profile" id="workforce-profile" accesskey="" class="ng-scope" href="generic-information/workforce-profile/median-age/ageing-workers"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Workforce profile</span></a>
			          </li>
			          
			        </ul>
			      </li>
			      
			      <li class="dropdown ng-scope" ng-repeat="level0 in structure" ng-class="isCurrentStateMenu('osh-steering')">
			        <a ng-if="level0.levels &amp;&amp; level0.target" class="dropdown-toggle ng-scope" data-toggle="dropdown" role="button" aria-haspopup="true" target="_self" aria-expanded="false" tabindex="6"><span data-ng-bind-html="i18n_literals[level0.name]" class="ng-binding">Steering of OSH</span> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
			        <ul class="dropdown-menu ng-scope" ng-if="level0.levels">
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('regulation')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="regulation" id="regulation" accesskey="2" class="ng-scope" href="osh-steering/regulation/secondary-legislation/AT/BE"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Regulation</span></a>
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('national-strategies')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="national-strategies" id="national-strategies" accesskey="" class="ng-scope" href="osh-steering/national-strategies"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">National strategies</span></a>
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('structure-strategy')" class="ng-scope hidden">
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('response-strategy')" class="ng-scope hidden">
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('social-dialogue')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="social-dialogue" id="social-dialogue" accesskey="" class="ng-scope" href="osh-steering/social-dialogue"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Social dialogue</span></a>
			          </li>
			          
			        </ul>
			      </li>
			      
			      <li class="dropdown ng-scope" ng-repeat="level0 in structure" ng-class="isCurrentStateMenu('osh-outcomes-working-conditions')">
			        <a ng-if="level0.levels &amp;&amp; level0.sref" ui-sref="osh-outcome" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" tabindex="10"><span data-ng-bind-html="i18n_literals[level0.name]" class="ng-binding">OSH outcomes and working conditions</span> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
			        <ul class="dropdown-menu ng-scope" ng-if="level0.levels">

			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('work-accidents')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="work-accidents" id="work-accidents" accesskey="3" class="ng-scope" href="osh-outcomes-working-conditions/work-accidents/non-fatal-work-accidents"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Work accidents</span></a>
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('health-perception-of-workers')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="health-perception-of-workers" id="health-perception-of-workers" accesskey="" class="ng-scope" href="osh-outcomes-working-conditions/health-perception-of-workers"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Health perception of the workers</span></a>
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('osh-culture')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="osh-culture" id="osh-culture" accesskey="" class="ng-scope" href="osh-outcomes-working-conditions/osh-culture/health-and-safety-discussed"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">OSH culture and health awareness</span></a>
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('working-conditions')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="working-conditions" id="working-conditions" accesskey="" class="ng-scope" href="osh-outcomes-working-conditions/working-conditions"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Working conditions</span></a>
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('overall-opinion')" class="ng-scope hidden">
			             
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('mental-risk')" class="ng-scope hidden">
			             
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('physical-risk')" class="ng-scope hidden">
			             
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('prevention-companies')" class="ng-scope">
			             <a ng-if="level1.sref" ui-sref="prevention-companies({pIndicator: 'risk-assessment', pSplit: 'sector'})" id="prevention-companies" accesskey="" class="ng-scope" href="osh-outcomes-working-conditions/prevention-companies/risk-assessment/sector"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Prevention in companies</span></a>
			          </li>
			          
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('worker-involvement')" class="ng-scope">
			            <a ng-if="level1.sref" ui-sref="worker-involvement" id="worker-involvement" accesskey="" class="ng-scope" href="osh-outcomes-working-conditions/worker-involvement/esener"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Worker involvement</span></a>
			            </li>
			        </ul>
			      </li>
			      
			      <li class="dropdown ng-scope" ng-repeat="level0 in structure" ng-class="isCurrentStateMenu('osh-infrastructure')">
			        <a ng-if="level0.levels &amp;&amp; level0.target" class="dropdown-toggle ng-scope" data-toggle="dropdown" role="button" aria-haspopup="true" target="_self" aria-expanded="false" tabindex="17"><span data-ng-bind-html="i18n_literals[level0.name]" class="ng-binding">OSH infrastructure</span> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
			        <ul class="dropdown-menu ng-scope" ng-if="level0.levels">
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('enforcement-capacity')" class="ng-scope">
			            <a ng-if="level1.sref" ui-sref="enforcement-capacity({pIndicator: 'establishments-inspected'})" id="enforcement-capacity" accesskey="4" class="ng-scope" href="osh-infrastructure/enforcement-capacity/establishments-inspected"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Enforcement capacity</span></a>
			          </li>
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('osh-statistics')" class="ng-scope">
			            <a ng-if="level1.sref" ui-sref="osh-statistics" id="osh-statistics" accesskey="" class="ng-scope" href="osh-infrastructure/osh-statistics/"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">OSH statistics, surveys and research</span></a>
			          </li>
			        </ul>

			      </li>
			      
			      <li class="dropdown ng-scope" ng-repeat="level0 in structure" ng-class="isCurrentStateMenu('about-tool')">
			        <a ng-if="level0.levels &amp;&amp; level0.target" class="dropdown-toggle ng-scope" data-toggle="dropdown" role="button" aria-haspopup="true" target="_self" aria-expanded="false" tabindex=""><span data-ng-bind-html="i18n_literals[level0.name]" class="ng-binding">About the system</span> <i class="fa fa-angle-down" aria-hidden="true"></i> </a>
			        <ul class="dropdown-menu ng-scope" ng-if="level0.levels">
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('introduction')" class="ng-scope">
			            <a ng-if="level1.sref" ui-sref="about-tool" id="introduction" accesskey="5" class="ng-scope" href="about-the-system"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">General information</span></a>
			          </li>
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('detail-information')" class="ng-scope">
			            	<a ng-if="level1.sref" ui-sref="about-tool-detail-page" id="detail-information" accesskey="21" class="ng-scope" href="about-the-system/methodology"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Methodology</span></a>
			          </li>
			          <li ng-repeat="level1 in level0.levels" ng-class="isCurrentStateMenu('country-report')" class="ng-scope">
			          	<a ng-if="level1.sref" ui-sref="country-report" id="country-report" accesskey="21" class="ng-scope" href="country-report"><span data-ng-bind-html="i18n_literals[level1.name]" class="ng-binding">Country reports</span></a>
			          </li>
			        </ul>
			      </li>
			    </ul>
			  </div>
			</nav>
		</section>
		<section class="breadcrumbs--social--network">
			<div class="breadcrumbs">
				<p class="path ng-binding" data-ng-bind-html="breadCrumb" id="breadCrumbs"><span class="current-page">Home</span></p>
			</div>
			<div class="social--network--nav" id="osha-menu-social">
				<label data-ng-bind="i18n_literals.L369" class="ng-binding">Share this on:</label>
				<ul>
				<li><a class="main-color" target="_blank" socialshare="" socialshare-provider="twitter" title="Twitter" socialshare-text="Home - OSH Barometer | Data Visualisation" socialshare-url="https://visualisation.osha.europa.eu/osh-barometer"><i class="fa fa-lg fa-twitter" aria-hidden="true"></i><span class="sr-only ng-binding" data-ng-bind="(i18n_literals.L369) + (i18n_literals.L370)">Share this on:Twitter</span></a></li>
				<li><a class="main-color" target="_blank" socialshare="" socialshare-provider="facebook" title="Facebook" socialshare-url="https://visualisation.osha.europa.eu/osh-barometer"><i class="fa fa-lg fa-facebook" aria-hidden="true"></i><span class="sr-only ng-binding" data-ng-bind="(i18n_literals.L369) + (i18n_literals.L371)">Share this on:Facebook</span></a></li>
				<li><a class="main-color" target="_blank" socialshare="" socialshare-provider="linkedin" title="LinkedIn" socialshare-url="https://visualisation.osha.europa.eu/osh-barometer"><i class="fa fa-lg fa-linkedin" aria-hidden="true"></i><span class="sr-only ng-binding" data-ng-bind="(i18n_literals.L369) + (i18n_literals.L372)">Share this on:LinkedIn</span></a></li>
				</ul>
			</div>
		</section>
	</header>
	<section class="advice-home container-fluid section--page eu-background">
		<div class="container column--grid--block">
			<div class="column--item">
				<h2 class="title--section second-color uppercase ng-binding" data-ng-bind="i18n.L22122">ABOUT US</h2>
				<p class="main-title">
					<span class="title ng-binding" data-ng-bind="i18n.L22020">OSH BAROMETER</span> 
					<span class="subtitle ng-binding" data-ng-bind="i18n.L22107">Data visualisation tool</span>
				</p>
				<div data-ng-bind-html="i18n.L22108" class="ng-binding">
					<p>The OSH Barometer is an EU-wide public information system on the most important facts and figures of <strong>Occupational Safety and Health</strong>. The system provides visualised information for important OSH indicators at EU and national level; it is based on statistics, surveys and public data.</p>
					<p>The OSH Barometer presents data from several different sources; some dating back to 2010 where trends are presented. At the time these data were collected, the UK was still a member of the European Union and therefore the UK results are included in the OSH Barometer and the EU average is presented as EU28. In successive updates of the OSH Barometer, UK data will be progressively eliminated.</p>
				</div>
			  	<p class="btn--block-full left-text">
			  		<a data-ui-sref="about-tool" class="btn-default btn-main-color ng-binding" data-ng-bind="i18n.L22110" href="about-the-system">Discover the tool</a>
			  	</p>
			</div>
			<div class="column--item valign eu-background">
				<p class="lead-title ng-binding" data-ng-bind="i18n.L22109">The OSH BAROMETER is a reliable public information system on facts and figures of OSH in the EU.</p>
			 </div>
		</div>
	</section>
</div>

		)
	}
}

export default App;