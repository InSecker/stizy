import classNames from 'classnames/bind';
import React from 'react';
import Picto from '../../atoms/Picto/Picto';
import styles from './FormControl.module.scss';

const c = classNames.bind(styles);

type Tsuccess = {
	label: string;
};
type Terror = {
	label: string;
};

interface FormControlProps {
	className?: string;
	label: string;
	success?: Tsuccess;
	error?: Terror;
	children: any;
}

function FormControl({
	className,
	label,
	success,
	error,
	children,
}: FormControlProps) {
	return (
		<div className="formControlWrapper">
			<p className={c('label')}>{label}</p>
			{success && (
				<span className={c('infoWrapper')}>
					<Picto className="success" picto="success" />
					<p className={c('success')}>{success.label}</p>
				</span>
			)}
			{error && (
				<span className={c('infoWrapper')}>
					<Picto className={c('error')} picto="info" />
					<p className={c('error')}>{error.label}</p>
				</span>
			)}
			{children}
		</div>
	);
}

export default FormControl;
