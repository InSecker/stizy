import axios from 'axios';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import Button from '../../components/atoms/Button/Button';
import { default as FormField } from '../../components/molecules/FormField/FormField';
import { apiUrl, emailRegex } from '../../constants';
import styles from './Register.module.scss';

const c = classNames.bind(styles);

interface RegisterProps {
	className?: string;
}

interface TFormError {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	verificationPassword: string;
}

function Register({ className }: RegisterProps) {
	const [firstName, setFirstname] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [verificationPassword, setVerificationPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<TFormError | null>(null);
	const router = useRouter();

	const register = (e: FormEvent) => {
		e.preventDefault();
		let tempErrors: TFormError = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			verificationPassword: '',
		};

		const data = {
			firstName,
			lastName,
			email,
			password,
			repeatPassword: verificationPassword,
		};

		if (firstName === '') {
			tempErrors.firstName = 'Ce champs est requis';
		}
		if (lastName === '') {
			tempErrors.lastName = 'Ce champs est requis';
		}
		if (email === '') {
			tempErrors.email = 'Ce champs est requis';
		} else if (!emailRegex.test(email)) {
			tempErrors.email = "L'adresse email est invalide";
		} else {
			tempErrors.email = '';
		}
		if (password === '') {
			tempErrors.password = 'Ce champs est requis';
		}
		if (verificationPassword === '') {
			tempErrors.verificationPassword = 'Ce champs est requis';
		}
		if (password !== verificationPassword) {
			tempErrors.password = 'Les mots de passe ne corrresponde pas ';
			tempErrors.verificationPassword =
				'Les mots de passe ne corrresponde pas ';
		}
		const hasErrors = Object.values(tempErrors).every((x) => x === '');
		console.log(hasErrors);
		if (!hasErrors) {
			setErrors(tempErrors);
		} else {
			setErrors(null);
			setLoading(true);
			axios
				.post(`${apiUrl}/auth/register`, data)
				.then(() => {
					router.push('/login');
				})
				.catch((error) => {
					console.error('Something went wrong!', error);
				});
		}
	};

	return (
		<div className={c('wrapper', className)}>
			<h2 className={c('title')}>Inscription</h2>
			<p className={c('no-account')}>
				Si vous avez deja un compte,
				<span>
					<Link href="/login">
						<a className={c('login')}> connectez-vous !</a>
					</Link>
				</span>
			</p>
			<form onSubmit={(e) => register(e)}>
				<section className={c('names')}>
					<FormField
						className={c('form-field', 'first-name')}
						label="Prénom"
						value={firstName}
						onChange={(e) => setFirstname(e.target.value)}
						placeholder="Ex: John"
						error={errors?.firstName}
					/>
					<FormField
						className={c('form-field', 'last-name')}
						label="Nom"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Ex: Doe"
						error={errors?.lastName}
					/>
				</section>
				<FormField
					className={c('form-field')}
					label="Email scolaire"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Ex: Doe"
					error={errors?.email}
				/>
				<FormField
					className={c('form-field')}
					label="Mot de passe"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Tapper le mot de passe"
					error={errors?.password}
				/>

				<FormField
					className={c('form-field')}
					label="Confimer le mot de passe"
					type="password"
					value={verificationPassword}
					onChange={(e) => setVerificationPassword(e.target.value)}
					placeholder="Re-Tapper le mot de passe"
					error={errors?.verificationPassword}
				/>
				<Button loading={loading} type="submit">
					{"S'inscrire"}
				</Button>
			</form>
		</div>
	);
}

export default Register;
