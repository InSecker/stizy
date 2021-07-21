import classNames from 'classnames/bind';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../svg/logo.svg';
import styles from './Header.module.scss';

const c = classNames.bind(styles);

interface HeaderProps {
	className?: string;
}

function Header({ className }: HeaderProps) {
	return (
		<header className={c(className, 'wrapper')}>
			<div className={c('sticky')}>
				<Link passHref={true} href="/">
					<a className={c('link')}>
						<Logo className={c('logo', 'big')} />
					</a>
				</Link>
			</div>
		</header>
	);
}

export default Header;
