import classNames from 'classnames/bind';
import React from 'react';
import Picto from '../Picto/Picto';
import styles from './Input.module.scss';

const c = classNames.bind(styles);

interface InputProps {
	className?: string;
	isIcon?: boolean;
	error?: object;
	success?: object;
}

function Input({
	className,
	isIcon = false,
	error = {},
	success = {},
	...rest
}: InputProps) {
	return (
		<div className={c('inputWrapper')}>
			<input className={c('input')} {...rest}></input>
			{isIcon && (
				<span className={c('inputIconWrapper')}>
					<Picto picto="info" />
				</span>
			)}
		</div>
	);
}

export default Input;
