import React, { Component } from 'react';

// import { v1 as uuid } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';

class AddContact extends Component {
	state = {
		name: '',
		phone: '',
		email: '',
		errors: {},
		adding: false,
	};
	handleChange = (e) => {
		// e.preventDefault();
		// console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		this.setState({ adding: true });

		e.preventDefault();
		console.log('lets add this contact: ', this.state);
		const { name, email, phone } = this.state;

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
		const newContact = {
			// id: uuid(),
			name,
			email,
			phone,
		};
		// const res = await axios.post(
		// 	'https://jsonplaceholder.typicode.com/users',
		// 	newContact
		// );
		this.props.addContact(newContact);

		// dispatch({ type: 'ADD_CONTACT', payload: res.data });

		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {},
			adding: false,
		});
		this.props.history.push('/');
	};
	render() {
		const { name, email, phone, errors, adding } = this.state;

		return (
			<div className='card mb-3'>
				<div className='card-header'>Add Contact</div>
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
							value='add contact'
							className='btn btn-light btn-block'
						></input>
					</form>
				</div>
			</div>
		);
	}
}

AddContact.propTypes = {
	addContact: PropTypes.func.isRequired,
};
export default connect(null, { addContact })(AddContact);
