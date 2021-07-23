import axios from 'axios';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import Button from '../../components/atoms/Button/Button';
import { default as FormField } from '../../components/molecules/FormField/FormField';
import { apiUrl, emailRegex } from '../../constants';
import { AppContext } from '../../store';
import styles from './Login.module.scss';

const c = classNames.bind(styles);

interface TForm {
	mail: string;
	password: string;
}

interface LoginProps {
	className?: string;
}

function Login({ className }: LoginProps) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<TForm | null>(null);
	const router = useRouter();
	const { setUser } = useContext(AppContext);

	const login = (e) => {
		e.preventDefault();
		let tempErrors: TForm = {
			mail: '',
			password: '',
		};
		if (email === '') {
			tempErrors.mail = 'Ce champs est requis';
		} else if (!emailRegex.test(email)) {
			tempErrors.mail = "L'adresse email est invalide";
		} else {
			tempErrors.mail = '';
		}
		if (password === '') {
			tempErrors.password = 'Ce champs est requis';
		}
		const data = {
			email,
			password,
		};
		if (tempErrors.mail !== '') {
			setErrors(tempErrors);
		} else if (tempErrors.password !== '') {
			setErrors(tempErrors);
		} else {
			setErrors(null);
			setLoading(true);
			axios
				.post(`${apiUrl}/auth/login`, data)
				.then((response) => {
					setLoading(false);
					localStorage.setItem('token', response.data.token);
					setUser(response.data.user);
					router.push('/');
				})
				.catch((error) => {
					console.error('Something went wrong!', error);
				});
		}
	};
	console.log(errors);
	return (
		<div className={c('wrapper', className)}>
			<h2 className={c('title')}>Connexion</h2>
			<div className={c('no-account')}>
				Pas de compte ?{' '}
				<Link href="/register">
					<a>
						<span className={c('register')}>Inscrivez-vous</span>
					</a>
				</Link>
			</div>
			<form onSubmit={(e) => login(e)} noValidate>
				<FormField
					className={c('form-field')}
					label="Email scolaire"
					error={errors?.mail}
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Ex: john.doe@hetic.net"
				/>
				<FormField
					error={errors?.password}
					className={c('form-field')}
					label="Mot de passe"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Tapper le mot de passe"
				/>

				<Link href="/forgot-password">
					<a className={c('register')}>Mot de passe oublié</a>
				</Link>
				<Button loading={loading} className={c('button')} type="submit">
					Se connecter
				</Button>
			</form>
		</div>
	);
}

export default Login;
