// Start Main App (2nd level)
import React from 'react';
import { Route } from 'react-router-dom'; // Not currently necessary

//Pages
import ChallengePage from './pages/ChallengePage.js';

function App() {
	return (
		<div className="Home">

			<Route exact path="/" component={ChallengePage} />

		</div>
	);
}

export default App;
