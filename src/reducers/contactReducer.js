import {
	GET_CONTACTS,
	DELETE_CONTACT,
	ADD_CONTACT,
	UPDATE_CONTACT,
	GET_CONTACT,
} from '../actions/types';

const initialState = {
	contacts: [],
	contact: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CONTACTS:
			console.log('returning action.payload', action.payload);
			return {
				...state,
				contacts: action.payload,
			};
		case GET_CONTACT:
			console.log('returning action.payload', action.payload);
			return {
				...state,
				contact: action.payload,
			};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload
				),
			};
		case ADD_CONTACT:
			return {
				...state,
				contacts: [action.payload, ...state.contacts],
			};
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map((contact) =>
					contact.id === action.payload.id
						? (contact = action.payload)
						: contact
				),
			};
		default:
			return state;
	}
}
