import axios from 'axios';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import FormControl from '../../components/molecules/FormControl/FormControl';
import { apiUrl } from '../../constants';
import styles from './Register.module.scss';
const c = classNames.bind(styles);

interface RegisterProps {
	className?: string;
}

function Register({ className }: RegisterProps) {
	const [firstName, setFirstname] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [verificationPassword, setVerificationPassword] = useState('');

	const register = () => {
		const data = {
			firstName,
			lastName,
			email,
			password,
			repeatPassword: verificationPassword,
		};
		axios
			.post(`${apiUrl}/auth/register`, data)
			.then((response) => {
				console.log('Status: ', response.status);
				console.log('Data: ', response.data);
			})
			.catch((error) => {
				console.error('Something went wrong!', error);
			});
	};

	const isValid = () => {
		return (
			verificationPassword !== password &&
			verificationPassword !== '' &&
			password !== '' &&
			firstName !== '' &&
			lastName !== '' &&
			email !== ''
		);
	};

	return (
		<div className={c('wrapper', className)}>
			<h2>Inscription</h2>
			<p>
				Si vous avez deja un compte,
				<span>connectez-vous</span>
			</p>

			<FormControl label="Prénom">
				<Input
					value={firstName}
					onChange={(e) => setFirstname(e.target.value)}
					placeholder="Ex: John"
				/>
			</FormControl>
			<FormControl label="Nom">
				<Input
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					placeholder="Ex: Doe"
				/>
			</FormControl>
			<FormControl label="Email scolaire">
				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Ex: Doe"
				/>
			</FormControl>
			<FormControl label="Mot de passe">
				<Input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Tapper le mot depasse"
				/>
			</FormControl>
			<FormControl label="Confimer le mot de passe">
				<Input
					value={verificationPassword}
					onChange={(e) => setVerificationPassword(e.target.value)}
					placeholder="Ex: "
				/>
			</FormControl>
			<Button onClick={register} disabled={isValid()}>
				S'inscrire
			</Button>
		</div>
	);
}

export default Register;
