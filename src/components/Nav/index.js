import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<img id='nav-logo' src={logo} alt='Logo'/>
				<input type='checkbox' className='nav-toggle' id='nav-toggle' />
				<label htmlFor="nav-toggle" className='toggle-label'><span>X</span></label>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/'>About Me</Link>
					</li>
					<li>
						<Link to='/'>Skills</Link>
					</li>
					<li>
						<Link to='/'>Examples</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
