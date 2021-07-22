import classNames from 'classnames/bind';
import React from 'react';
import Picto from '../atoms/Picto/Picto';
import styles from './InfoMessage.module.scss';

const c = classNames.bind(styles);

interface InfoMessageProps {
	className?: string;
	message?: string;
	type?: 'success' | 'error';
}

function InfoMessage({ className, message, type }: InfoMessageProps) {
	return (
		<div className={c('infoWrapper', className, type)}>
			<Picto className={c(type)} picto="info" />
			<span className={c('error', type)}>{message}</span>
		</div>
	);
}

export default InfoMessage;
