import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [btnText, setBtnText] = useState('Submit');
	const form = useRef();

	const handleChange = (e) => {
		e.preventDefault();
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
		emailjs
			.sendForm(
				'service_wyb3pui',
				'template_of35ofi',
				form.current,
				'ZJjMPWK3_lZ_gUpKQ'
			)
			.then(
				(result) => {
					console.log(result.text);
					setBtnText('Message Sent!');
					setTimeout(() => {
						window.location.reload();
					}, 3000);
				},
				(error) => {
					console.log(error.text);
					setBtnText('Error!');
				}
			);
	};

	return (
		<form ref={form} onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Jane Doe"
					defaultValue={formState.name}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email address
				</label>
				<input
					type="email"
					name="email"
					className="form-control"
					placeholder="jane@doe.com"
					defaultValue={formState.email}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="message" className="form-label">
					Message
				</label>
				<textarea
					name="message"
					className="form-control"
					rows="3"
					defaultValue={formState.message}
					onChange={handleChange}
				></textarea>
			</div>
			<button type="submit" className="btn btn-primary">
				{btnText}
			</button>
		</form>
	);
};

export default Contact;
