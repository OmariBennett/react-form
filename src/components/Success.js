import React, { Component } from 'react';
import { MuiThemeProvider, AppBar } from '@material-ui/core';

export default class Success extends Component {
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
			values: { firstName },
		} = this.props;

		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar position='relative'>
						<h1>Success</h1>
					</AppBar>
					<h2>Thank You, {firstName} For Your Submission</h2>
					<p>You will get an email with further instructions.</p>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}
