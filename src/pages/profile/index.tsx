import classNames from 'classnames/bind';
import React, { useContext, useState } from 'react';
import Button from '../../components/atoms/Button/Button';
import Label from '../../components/atoms/Label/Label';
import { AppContext } from '../../store';
import styles from './Profile.module.scss';
const c = classNames.bind(styles);

interface ProfileProps {
	className?: string;
}

function Profile({ className }: ProfileProps) {
	const [isChangingPassword, setIsChangingPassword] = useState(false);
	const {
		user: { email },
	} = useContext(AppContext);
	return (
		<div className={c('wrapper', className)}>
			{isChangingPassword ? (
				<>
					<h2 className={c('title')}>
						Vous souhaitez changer de mot de passe ?
					</h2>
					<p className={c('description')}>
						Vous recevrez dans votre boite mail un lien afin de réinitialiser
						votre mot de passe.
					</p>
					<button
						onClick={() => setIsChangingPassword(!isChangingPassword)}
						className={c('link')}
					>
						Retour au profil
					</button>
					<Button onClick={() => {}} className={c('button')}>
						Envoyer le lien
					</Button>
				</>
			) : (
				<>
					<h2 className={c('title')}>Votre profil </h2>
					<p className={c('description')}>
						Vous recevrez dans votre boite mail un lien afin de réinitialiser
						votre mot de passe.
					</p>
					<Label className={c('label-wrapper')}>Mail</Label>
					<div className={c('description')}>{email}</div>
					<button
						onClick={() => setIsChangingPassword(!isChangingPassword)}
						className={c('link')}
					>
						Modifier le mot de passe ?
					</button>
					<Button onClick={() => {}} className={c('button')}>
						Se déconnecter
					</Button>
				</>
			)}
		</div>
	);
}

export default Profile;
