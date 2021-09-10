import React, { Component } from 'react';
import {
	MuiThemeProvider,
	AppBar,
	Button,
	List,
	ListItemText,
} from '@material-ui/core';

export default class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		// Process Form here
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {
			values: { firstName, lastName, occupation, city, bio },
		} = this.props;

		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar position='relative'>
						<h1>Confirm User Data</h1>
					</AppBar>
					<List>
						<ListItemText primary='First Name' secondary={firstName} />
						<ListItemText primary='Last Name' secondary={lastName} />
						<ListItemText primary='Occupation' secondary={occupation} />
						<ListItemText primary='City' secondary={city} />
						<ListItemText primary='Bio' secondary={bio} />
					</List>

					<br />
					<Button variant='contained' style={style.button} onClick={this.back}>
						back
					</Button>
					<Button
						variant='contained'
						color='primary'
						style={style.button}
						onClick={this.continue}>
						confirm & contunue
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
