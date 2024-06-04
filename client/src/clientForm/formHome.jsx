import { useState } from 'react';
import axios from 'axios';
import Titles from '../components/Titles.jsx';
import TextTitle from '../components/TextTitle';
import styles from './style/form.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next';

const FormHome = () => {
	const { t } = useTranslation();
	const [subject, setSubject] = useState();
	const [name, setName] = useState();
	const [numbers, setNumbers] = useState();
	const [maill, setMaill] = useState();
	const [message, setMessage] = useState();

	const sendMail = () => {
		axios
			.get('http://localhost:1000/', {
				params: {
					email: 'svitlik.viktor78@gmail.com',
					subject: 'FormHome',
					name,
					numbers,
					maill,
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
		<div className={styles['container_form']}>
			<textarea
				className={styles['form_name']}
				placeholder={t(['formName'])}
				onChange={e => setName(e.target.value)}
			/>
			<textarea
				className={styles['form_name']}
				placeholder={t(['formNumber'])}
				onChange={e => setNumbers(e.target.value)}
			/>
			<textarea
				className={styles['form_name']}
				placeholder={t(['formMail'])}
				onChange={e => setMaill(e.target.value)}
			/>
			<textarea
				className={styles[('form_name', 'form_zprava')]}
				placeholder={t(['formMessage'])}
				onChange={e => setMessage(e.target.value)}
			/>

			<button onClick={sendMail}>Send Email</button>
		</div>
	);
};

export default FormHome;
