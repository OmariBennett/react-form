import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export default class UserForm extends Component {
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		occupation: '',
		city: '',
		bio: '',
	};

	// Proceed to the next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({ step: step + 1 });
	};

	// Proceed to the prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({ step: step - 1 });
	};

	// Handle fields change
	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
		const {
			firstName,
			lastNamefirstName,
			emailfirstName,
			occupationfirstName,
			cityfirstName,
			biofirstName,
		} = this.state;
		const value = {
			firstName,
			lastNamefirstName,
			emailfirstName,
			occupationfirstName,
			cityfirstName,
			biofirstName,
		};

		switch (step) {
			case 1:
				return (
					<FormUserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						value={value}
					/>
				);
			case 2:
				return <h1>FormPersonalDetails</h1>;
			case 3:
				return <h1>Confirm</h1>;
			case 4:
				return <h1>Success</h1>;
			default:
				<h1>Hola World</h1>;
		}
	}
}
