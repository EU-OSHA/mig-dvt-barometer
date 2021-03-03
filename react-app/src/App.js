import React, { Component } from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import { Button } from 'react-bootstrap';

import './style/App.scss';

const App = ({children}) => 
{
	return(
		<div>
			<Button>This is a button</Button>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default App;