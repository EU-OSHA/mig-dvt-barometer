import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

// App
import App from './App';
// Home
import Home from './components/home/Home';
// Generic information
import OSHAuthorities from './components/generic-information/OSHAuthorities';
import EconomicSectorProfile from './components/generic-information/EconomicSectorProfile';
import WorkforceProfile from './components/generic-information/WorkforceProfile';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter >
			<Switch>
				<Route exact path="/" render={() => <App><Home /></App>} />
				<Route exact path="/generic-information/osh-authorities" render={() => <App><OSHAuthorities /></App>} />
				<Route 
					path="/generic-information/economic-sector-profile/:country1/:country2?" 
					render={routeParams => <App><EconomicSectorProfile country1={routeParams.match.params.country1} country2={routeParams.match.params.country2} /></App>} 
				/>
				<Route exact path="/generic-information/workforce-profile" render={() => <App><WorkforceProfile /></App>} />
			</Switch>		
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);