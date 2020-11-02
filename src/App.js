// Start Main App (2nd level)
import React from 'react';
import { Route } from 'react-router-dom';

import Example from './components/Example.js';

function App() {
	return (
		<div className="Home">

			<Route exact path="/" component={Example} />

		</div>
	);
}

export default App;
