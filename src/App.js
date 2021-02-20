import React, { useState } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import axios from 'axios';
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [email, setAge] = useState('');
	const [city, setSalary] = useState('');
	const [hobby, setHobby] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { name, email, city, hobby };

		axios
			.post(
				'https://sheet.best/api/sheets/290f8b68-8813-4ad9-8925-96a5659d2775',
				objt
			)
			.then((response) => {
				console.log(response);
			});
	};

	return (
		<Container fluid className="container">
			<Header as="h2">Form Kontak Googlesheet</Header>
			<Form className="form">
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Enter your Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input
						placeholder="Enter your email"
						onChange={(e) => setAge(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>City</label>
					<input
						placeholder="Enter your city"
						onChange={(e) => setSalary(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Hobby</label>
					<input
						placeholder="Enter your hobby"
						onChange={(e) => setHobby(e.target.value)}
					/>
				</Form.Field>

				<Button color="instagram" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default App;

