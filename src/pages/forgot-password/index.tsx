import classNames from 'classnames/bind';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../../components/atoms/Button/Button';
import FormField from '../../components/molecules/FormField/FormField';
import styles from './ForgotPassword.module.scss';
const c = classNames.bind(styles);

interface ForgotPasswordProps {
	className?: string;
}

function ForgotPassword({ className }: ForgotPasswordProps) {
	const [email, setEmail] = useState('');

	return (
		<div className={c('wrapper', className)}>
			<h2 className={c('title')}>Rentrez votre adresse email</h2>
			<p className={c('description')}>
				Vous-y recevrez un lieu afin de réinitialiser vote mot de passe{' '}
			</p>
			<FormField
				className={c('form-field')}
				label="Email scolaire"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Ex: john.doe@hetic.net"
			/>
			<Button onClick={() => {}} className={c('button')}>
				Envoyer
			</Button>
			<Link href="/login">
				<a className={c('back-to-login')}>Retour à la connexion</a>
			</Link>
		</div>
	);
}

export default ForgotPassword;
