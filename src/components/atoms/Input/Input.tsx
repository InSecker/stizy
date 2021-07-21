import classNames from 'classnames/bind';
import React, { ChangeEvent } from 'react';
import Picto from '../Picto/Picto';
import styles from './Input.module.scss';

const c = classNames.bind(styles);

interface InputProps {
	className?: string;
	isIcon?: boolean;
	error?: object;
	success?: object;
	search?: boolean;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	reset: () => void;
	placeholder: string;
	small: boolean;
}

const Input = ({
	className,
	isIcon = false,
	error = {},
	success = {},
	search = false,
	value,
	onChange,
	reset,
	small,
	...rest
}: InputProps) => {
	return (
		<div className={c('inputWrapper', { small })}>
			{search && (
				<span className={c('inputIconWrapper', { search })}>
					<Picto picto="search" />
				</span>
			)}
			<input
				onChange={onChange}
				value={value}
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
	);
};

export default Input;
