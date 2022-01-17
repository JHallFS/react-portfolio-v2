import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

class Portfolio extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path="/" element={<Home/>} />
				</Routes>
			</Router>
		);
	}
}

export default Portfolio;
