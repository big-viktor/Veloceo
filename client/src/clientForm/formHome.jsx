import { useState } from 'react';
import axios from 'axios';
import Titles from '../components/Titles.jsx';

const FormHome = () => {
	const [subject, setSubject] = useState();
	const [message, setMessage] = useState();

	const sendMail = () => {
		axios
			.get('http://localhost:1000/', {
				params: {
					email: 'svitlik.viktor78@gmail.com',
					subject: 'FormHome',
					message,
				},
			})

			.then(() => {
				//success
				console.log('yes');
			})
			.catch(() => {
				console.log('no');
			});
	};

	return (
		<div>
			<Titles title={'blackTitle'} />
			<br />
			<textarea placeholder='Message' onChange={e => setMessage(e.target.value)} />
			<br />
			<button onClick={sendMail}>Send Email</button>
		</div>
	);
};

export default FormHome;
