import classNames from 'classnames/bind';
import Link from 'next/link';
import React from 'react';
import Picto from '../../atoms/Picto/Picto';
import styles from './Popin.module.scss';

const c = classNames.bind(styles);

interface PopinProps {
	title: string;
	className?: string;
	onClose: () => void;
}

function Popin({ title, onClose }: PopinProps) {
	return (
		<div className={c('poppin')}>
			<div className={c('top-wrapper')}>
				<div className={c('title')}>`Vous vous rendez</div>
				<h2
					className={c('title')}
				>{`en salle ${title} !`}</h2>
				<button className={c('close-icon')} onClick={onClose}>
					<Picto picto="close" />
				</button>
			</div>
			<p className={c('description')}>
				Si vous voulez retrouver cette salle plus tard, elle se trouve dans
				votre historique !
			</p>
			<Link href="/historique">
				<a className={c('link')}>Consulter mon historique</a>
			</Link>
		</div>
	);
}

export default Popin;
