import classNames from 'classnames/bind';
import React from 'react';
import Decoration from '../../../svg/decoration.svg';
import Logo from '../../../svg/logo.svg';
import styles from './AuthentWrapper.module.scss';

const c = classNames.bind(styles);

interface AuthentWrapperProps {
	className?: string;
	children: JSX.Element;
}

function AuthentWrapper({ className, children }: AuthentWrapperProps) {
	return (
		<main className={c('wrapper', className)}>
			<Decoration className={c('decoration')} />
			<Logo className={c('logo')} />
			<div className={c('form')}>{children}</div>
		</main>
	);
}

export default AuthentWrapper;
