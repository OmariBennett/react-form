import React, { Component } from 'react';
import { MuiThemeProvider, AppBar, TextField, Button } from '@material-ui/core';

export default class FormPersonalDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
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
						label='Enter Personal Occupation'
						placeholder='Occupation'
						onChange={handleChange('occupation')}
						defaultValue={values.occupation}
					/>
					<br />
					<TextField
						label='Enter Your City'
						placeholder='City'
						onChange={handleChange('city')}
						defaultValue={values.city}
					/>
					<br />
					<TextField
						label='Enter Your bio'
						placeholder='First bio'
						onChange={handleChange('bio')}
						defaultValue={values.bio}
					/>
					<br />
					<Button variant='contained' style={style.button} onClick={this.back}>
						back
					</Button>
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
