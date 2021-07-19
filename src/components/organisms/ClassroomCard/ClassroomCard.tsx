import classNames from 'classnames/bind';
import React from 'react';
import Picto, { TPicto } from '../../atoms/Picto/Picto';
import StatusTag from '../../molecules/StatusTag/StatusTag';
import styles from './ClassroomCard.module.scss';

const c = classNames.bind(styles);

type TCapacity = {
	total: number;
	current: number;
};

export type TClassroomCardData = {
	title: string;
	timeLeft: number;
	capacity: TCapacity;
	soundStatus: string;
	affluenceStatus: string;
	temperatureStatus: string;
	pictos: TPicto[];
};

interface ClassroomCardProps {
	className?: string;
	data: TClassroomCardData;
}

function ClassroomCard({
	className,
	data: {
		title,
		timeLeft,
		capacity,
		soundStatus,
		affluenceStatus,
		temperatureStatus,
		pictos,
	},
}: ClassroomCardProps) {
	return (
		<div className={c('wrapper', className)}>
			<h2>{title}</h2>
			<span>{timeLeft}</span>
			<p>
				{capacity.current} / {capacity.total} places disponibles
			</p>
			<section>
				<h3>État actuel</h3>
				<ul>
					<StatusTag type="sound" value={soundStatus} />
					<StatusTag type="affluence" value={affluenceStatus} />
					<StatusTag type="temperature" value={temperatureStatus} />
				</ul>
			</section>
			<section>
				<h3>Équipement</h3>
				{pictos.map((picto, i) => (
					<li key={i}>
						<Picto picto={picto} />
					</li>
				))}
			</section>
		</div>
	);
}

export default ClassroomCard;
