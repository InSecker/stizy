import axios from 'axios';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import FormControl from '../../components/molecules/FormControl/FormControl';
import { apiUrl } from '../../constants';
import styles from './Login.module.scss';
const c = classNames.bind(styles);

interface LoginProps {
	className?: string;
}

function Login({ className }: LoginProps) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = () => {
		console.log('fsdfs');
		const data = {
			email,
			password,
		};
		axios
			.post(`${apiUrl}/auth/login`, data)
			.then((response) => {
				console.log('Status: ', response.status);
				console.log('Data: ', response.data);
				localStorage.setItem('token', response.data.token);
			})
			.catch((error) => {
				console.error('Something went wrong!', error);
			});
	};

	const isValid = () => {
		return password !== '' && email !== '';
	};

	return (
		<div className={c('wrapper', className)}>
			<h2>Connexion</h2>
			<p>
				Pas de compte ?<span>Inscrivez-vous</span>
			</p>

			<FormControl label="Email scolaire">
				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Ex: john.doe@hetic.net"
				/>
			</FormControl>
			<FormControl label="Mot de passe">
				<Input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Tapper le mot depasse"
				/>
			</FormControl>
			<p>Mot de passe oublié</p>
			<Button onClick={login}>Se connecter</Button>
		</div>
	);
}

export default Login;
