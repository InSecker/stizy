import classNames from 'classnames/bind';
import Link from 'next/link';
import React from 'react';
import styles from './FilterCard.module.scss';

const c = classNames.bind(styles);

const labels = {
	empty: ['vide', 'vides'],
	quiet: ['silencieuse', 'silencieuses'],
	oneHourFree: ["disponible plus d'1 heure", "disponibles plus d'1 heure"],
	withProj: ['avec projecteur', 'avec projecteur'],
};

interface FilterCardProps {
	className?: string;
	count: number;
	label: 'empty' | 'quiet' | 'oneHourFree' | 'withProj';
}

function FilterCard({ className, count, label }: FilterCardProps) {
	return (
		<Link passHref={true} href={'rechercher?filter=' + label}>
			<a className={c('wrapper', className)}>
				<li>
					{' '}
					<span className={c('count')}>{count}</span>
					<p className={c('label')}>
						{count > 1 ? 'Salles' : 'Salle'}{' '}
						{count > 1 ? labels[label][1] : labels[label][0]}
					</p>
				</li>
			</a>
		</Link>
	);
}

export default FilterCard;
