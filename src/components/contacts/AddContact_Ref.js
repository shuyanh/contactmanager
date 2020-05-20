import React, { Component } from 'react';
import { Consumer } from '../../ContactProvider';

class AddContact extends Component {
	constructor(props) {
		super(props);
		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
	}
	static defaultProps = {
		name: 'fred smith',
		email: 'fred@yahoo.com',
		phone: '666-666-9888',
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value,
		};
		console.log('lets add this contact: ', contact);
	};
	render() {
		const { name, email, phone } = this.props;
		return (
			<div>
				<div className='card mb-3'>
					<div className='card-header'>Add Contact</div>
					<div className='card-body'>
						<form onSubmit={this.handleSubmit}>
							<div className='form-group'>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									name='name'
									className='form-control form-control-lg'
									placeholder='enter name here....'
									defaultValue={name}
									ref={this.nameInput}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									name='email'
									className='form-control form-control-lg'
									placeholder='enter email here....'
									defaultValue={email}
									ref={this.phoneInput}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='phone'>Phone</label>
								<input
									type='text'
									name='phone'
									className='form-control form-control-lg'
									placeholder='enter phone here....'
									defaultValue={phone}
									ref={this.emailInput}
								/>
							</div>
							<input
								type='submit'
								value='add contact'
								className='btn btn-light btn-block'
							></input>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddContact;
