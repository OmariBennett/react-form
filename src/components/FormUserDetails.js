import React, { Component } from 'react';
import { MuiThemeProvider, AppBar, TextField, Button } from '@material-ui/core';

export default class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;

		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar position='relative'>
						<h1>Enter User Details</h1>
					</AppBar>

					<TextField
						label='Enter Your First Name'
						placeholder='First Name'
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
					/>
					<br />
					<TextField
						label='Enter Your Last Name'
						placeholder='Last Name'
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<br />
					<TextField
						label='Enter Your Email'
						placeholder='First Email'
						onChange={handleChange('email')}
						defaultValue={values.email}
					/>
					<br />
					<Button
						variant='contained'
						color='primary'
						style={style.button}
						onClick={this.continue}>
						contune
					</Button>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const style = {
	button: {
		margin: 15,
	},
};
