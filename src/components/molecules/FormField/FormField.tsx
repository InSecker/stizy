import classNames from 'classnames/bind';
import React, { ChangeEvent } from 'react';
import Picto from '../../atoms/Picto/Picto';
import InfoMessage from '../../InfoMessage/InfoMessage';
import styles from './FormField.module.scss';

const c = classNames.bind(styles);

interface InputProps {
	className?: string;
	isIcon?: boolean;
	error?: string;
	success?: string;
	search?: boolean;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	reset?: () => void;
	placeholder?: string;
	type?: string;
	label?: string;
}

const FormField = ({
	className,
	isIcon = false,
	error = '',
	success = '',
	search = false,
	value,
	onChange,
	reset,
	type,
	label,
	...rest
}: InputProps) => {
	return (
		<div className={c('formControlWrapper', className)}>
			{label && <label className={c('label')}>{label}</label>}
			{success && <InfoMessage type="success" message={success} />}
			{error && <InfoMessage type="error" message={error} />}
			<div className={c('inputWrapper')}>
				{search && (
					<span className={c('inputIconWrapper', { search })}>
						<Picto picto="search" />
					</span>
				)}
				<input
					onChange={onChange}
					value={value}
					type={type}
					className={c('input', { search })}
					{...rest}
				/>
				{isIcon && (
					<span className={c('inputIconWrapper')}>
						<Picto picto="info" />
					</span>
				)}
				{search && value !== '' && (
					<span className={c('inputIconWrapper', 'closeIcon')} onClick={reset}>
						<Picto picto="close" />
					</span>
				)}
			</div>
		</div>
	);
};

export default FormField;
