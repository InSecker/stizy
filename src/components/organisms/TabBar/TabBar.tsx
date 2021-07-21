import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import React from 'react';
import { menuItems } from '../../../constants';
import Picto from '../../atoms/Picto/Picto';
import styles from './TabBar.module.scss';

const c = classNames.bind(styles);

interface TabBarProps {
	className?: string;
}

const TabBar = ({ className }: TabBarProps) => {
	const router = useRouter();
	
	return (
		<div className={c('wrapper', className)}>
			<ul className={c('menuItems', className)}>
				{menuItems.map(({ id, picto, label, target }, i) => (
					<li key={i} className={c('menuItem', className)}>
						<button
							className={c('menuItem', {
								active: router.pathname === target,
							})}
							onClick={() => router.push(target)}
						>
							<Picto picto={picto} />
							{label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TabBar;
