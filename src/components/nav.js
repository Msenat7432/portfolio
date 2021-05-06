import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"

const nav = () => {
    return (
			<nav className='navbar navbar-expand-lg navbar-light bg-dark'>
				<div className='container'>
					<a className='navbar-brand' href='home'>
						Navbar
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
				    <FontAwesomeIcon icon={faBars} style = {{color: '#fff'}}  />
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<a className='nav-link ' aria-current='page' href='about'>
									about
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link ' href='portfolio'>
									portfolio
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link ' href='experience'>
									experience
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link ' href='contact'>
									contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
};

export default nav;