import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { menuItems } from '../../../constants';
import { AppContext } from '../../../store';
import Picto, { TPicto } from '../../atoms/Picto/Picto';
import styles from './Navigation.module.scss';

const c = classNames.bind(styles);

interface NavigationProps {
	className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
	const router = useRouter();

	const { places } = useContext(AppContext);
	return (
		<nav className={c('wrapper', className, { mask: places.length < 1 })}>
			<ul className={c('menu-list')}>
				{menuItems.map(({ id, picto, label, target }, i) => (
					<li key={i} className={c('menu-item')}>
						<Link passHref={true} href={target}>
							<a
								className={c('menu-link', {
									active: router.pathname === target,
								})}
							>
								<Picto picto={picto as TPicto} className={c('picto')} />
								{label}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
