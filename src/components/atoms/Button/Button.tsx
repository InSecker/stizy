import classNames from 'classnames/bind';
import React from 'react';
import Picto from '../Picto/Picto';
import styles from './Button.module.scss';

const c = classNames.bind(styles);

interface ButtonProps {
	className?: string;
	styleType?: string;
	children: string;
	loading?: boolean;
	onClick?: () => void;
	disabled?: boolean;
	type?: string;
}

function Button({
	className,
	styleType = 'primary',
	children = 'label',
	loading,
	onClick,
	disabled,
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={c('button', styleType, loading, className)}
		>
			{loading && (
				<span>
					<Picto className={c('picto')} picto="loading" />{' '}
				</span>
			)}
			{children}
		</button>
	);
}

export default Button;
