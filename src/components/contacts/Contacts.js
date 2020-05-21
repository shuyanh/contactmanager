import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../ContactProvider';

class Contacts extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					const contacts = value.contacts;
					const loaded = value.loaded;
					return loaded ? (
						<React.Fragment>
							<h1 className='display-4 mb-2'>
								<span className='text-danger'>Contact</span> List
							</h1>
							{contacts.map((contact) => (
								<Contact key={contact.id} contact={contact} />
							))}
						</React.Fragment>
					) : (
						<p>Loading....</p>
					);
				}}
			</Consumer>
		);
	}
}

export default Contacts;
