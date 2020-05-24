import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	const { branding } = props;
	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
			<div className='container'>
				<a href='/' className='navbar-brand'>
					{branding}
				</a>
				<div>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item'>
							<NavLink to='/' className='nav-link'>
								<i className='fas fa-home'></i>
								Home
							</NavLink>
						</li>

						<li className='nav-item'>
							<NavLink to='/contact/add' className='nav-link'>
								<i className='fas fa-plus'></i>
								Add
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/about' className='nav-link'>
								<i className='fas fa-question'></i>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

// const headingStyle = { color: 'red', fontSize: '50px' };
Header.defaultProps = {
	branding: 'My App',
};

Header.propTypes = {
	branding: PropTypes.string.isRequired,
};
export default Header;
