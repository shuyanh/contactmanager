import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
	state = {
		loaded: true,
	};

	componentDidMount() {
		this.props.getContacts();
	}
	render() {
		const contacts = this.props.contacts;
		const loaded = this.state.loaded;

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
	}
}

Contacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	getContacts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	contacts: state.contactReducer.contacts,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
