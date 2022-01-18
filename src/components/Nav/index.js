import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<img id='nav-logo' src={logo} alt='Logo'/>
				<Link to='/'>Home</Link>
				<Link to='/'>Skills</Link>
				<Link to='/'>Examples</Link>
				<Link to='/'>Comtact</Link>
			</nav>
		);
	}
}
