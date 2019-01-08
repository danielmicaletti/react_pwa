import React, { Component } from 'react';

class ErrorBoundary extends Component {

	constructor(props) {
		super(props);

		this.state = {
			hasError: false
		};
	}

	componentDidCatch(error, data) {
		console.log(error);
		console.log(data);

		this.setState({ hasError: true });
	}

	render() {
		const { hasError } = this.state;


		return ( hasError ?

					<h1>Oooooops. That's not good</h1>
				:
					this.props.children
		);
	}
}

export default ErrorBoundary;