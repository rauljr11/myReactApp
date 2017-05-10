import React from 'react';

class App extends React.Component {
	render() {
		return (
				<div>
				<Header />
				<Content />
				<Footer />
				</div>
			);
	}
}

class Header extends React.Component {
	render() {
		return (
				<div>
					<h1>Header</h1>
				</div>
			);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div>
				<h1>Footer</h1>
			</div>
		);
	}
}

class Content extends React.Component {

	constructor() {
		super();

		this.state = {
			data: [
				{
					"id": 1,
					"name": "Foo",
					"age": 23
				},
				{
					"id": 2,
					"name": "Bar",
					"age": 28
				},
				{
					"id": 3,
					"name": "Foobar",
					"age": 26
				}
			]
		}

		this.setStateHandler = this.setStateHandler.bind(this);
 	};

 	setStateHandler() {
 		var currentState = this.state.data;
 		currentState.push({
 			"id": 4,
 			"name": "FooFoo",
 			"age": 34
 		});

 		currentState.push({
 			"id": 5,
 			"name": "Barbar",
 			"age": 30
 		});

 		this.setState({data: currentState});
 	}

	render() {
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>Name</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
					</tbody>
				</table>
				<button onClick = {this.setStateHandler}>Set State</button>
			</div>
		);
	}
}

class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}

export default App;