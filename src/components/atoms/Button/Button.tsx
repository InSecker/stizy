import classNames from 'classnames/bind';
import React from 'react';
import Picto from '../Picto/Picto';
import styles from './Button.module.scss';

const c = classNames.bind(styles);

interface ButtonProps {
	type?: string;
	children: string;
	loading?: boolean;
	onClick: () => void;
}

function Button({
	type = 'primary',
	children = 'label',
	loading,
	onClick,
}: ButtonProps) {
	return (
		<button onClick={onClick} className={c('button', type, loading)}>
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
