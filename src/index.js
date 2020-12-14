import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// creating a history object that listens and keeps track of URL changes
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.querySelector('#root')
);
