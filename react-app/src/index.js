import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// App
import App from './App';
// Home
import Home from './components/home/Home';
// Generic information
import OSHAuthorities from './components/generic-information/OSHAuthorities';
import EconomicSectorProfile from './components/generic-information/EconomicSectorProfile';
import WorkforceProfile from './components/generic-information/WorkforceProfile';


var hist = createBrowserHistory();
console.log('hist', hist);
ReactDOM.render(
	<Router history={hist} >
		<Switch>
			<Route exact path="/" render={() => <App><Home /></App>} />
			<Route exact path="/generic-information/osh-authorities" render={() => <App><OSHAuthorities /></App>} />
			<Route exact path="/generic-information/economic-sector-profile" render={() => <App><EconomicSectorProfile /></App>} />
			<Route exact path="/generic-information/workforce-profile" render={() => <App><WorkforceProfile /></App>} />
		</Switch>		
	</Router>, 
	document.getElementById('root')
);