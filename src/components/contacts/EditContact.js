import React, { Component } from 'react';
import { Consumer } from '../../ContactProvider';
// import { v1 as uuid } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
	state = {
		name: '',
		phone: '',
		email: '',
		errors: {},
	};

	async componentDidMount() {
		const { id } = this.props.match.params;
		const res = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);
		const contact = res.data;
		this.setState({
			name: contact.name,
			email: contact.email,
			phone: contact.phone,
		});
	}
	handleChange = (e) => {
		// e.preventDefault();
		// console.log(e.target.value);
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (dispatch, e) => {
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
		const updatedContact = {
			// id: uuid(),
			name,
			email,
			phone,
		};

		const { id } = this.props.match.params;

		const res = await axios.put(
			`https://jsonplaceholder.typicode.com/users/${id}`,
			updatedContact
		);
		dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

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

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className='card mb-3'>
							<div className='card-header'>Edit Contact</div>
							<div className='card-body'>
								<form onSubmit={this.handleSubmit.bind(this, dispatch)}>
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
				}}
			</Consumer>
		);
	}
}

export default EditContact;
