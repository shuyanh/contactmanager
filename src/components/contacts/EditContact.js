import React, { Component } from 'react';

// import { v1 as uuid } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';

class EditContact extends Component {
	state = {
		name: '',
		phone: '',
		email: '',
		errors: {},
	};

	componentWillReceiveProps(nextProps, nextState) {
		const { name, email, phone } = nextProps.contact;
		this.setState({
			name,
			email,
			phone,
		});
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getContact(id);
	}
	handleChange = (e) => {
		// e.preventDefault();
		// console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { name, phone, email } = this.state;
		// console.log('lets add this contact: ', this.state);

		if (name === '') {
			this.setState({
				errors: {
					name: 'Name is required',
				},
			});
			return;
		}
		if (email === '') {
			this.setState({
				errors: {
					email: 'Email is required',
				},
			});
			return;
		}
		if (phone === '') {
			this.setState({
				errors: {
					phone: 'Phone is required',
				},
			});
			return;
		}

		const { id } = this.props.match.params;

		const updatedContact = {
			id,
			name,
			email,
			phone,
		};

		console.log('calling udpateContact: ', updatedContact);
		this.props.updateContact(updatedContact);

		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {},
		});
		this.props.history.push('/');
	};
	render() {
		const { name, email, phone, errors } = this.state;
		// const { errors } = this.state;

		return (
			<div className='card mb-3'>
				<div className='card-header'>Edit Contact</div>
				<div className='card-body'>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<TextInputGroup
							label='Name'
							name='name'
							value={name}
							placeholder='Enter name here'
							onChange={this.handleChange}
							error={errors.name}
						></TextInputGroup>
						<TextInputGroup
							label='Email'
							name='email'
							type='email'
							value={email}
							placeholder='Enter email here'
							onChange={this.handleChange}
							error={errors.email}
						></TextInputGroup>
						<TextInputGroup
							label='Phone'
							name='phone'
							value={phone}
							placeholder='Enter phone here'
							onChange={this.handleChange}
							error={errors.phone}
						></TextInputGroup>
						<input
							type='submit'
							value='Edit contact'
							className='btn btn-light btn-block'
						></input>
					</form>
				</div>
			</div>
		);
	}
}

EditContact.propTypes = {
	contact: PropTypes.object.isRequired,
	getContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	contact: state.contactReducer.contact,
});
export default connect(mapStateToProps, { getContact, updateContact })(
	EditContact
);
