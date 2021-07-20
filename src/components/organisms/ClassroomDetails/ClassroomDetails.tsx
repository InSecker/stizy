import classNames from 'classnames/bind';
import React from 'react';
import Picto from '../../atoms/Picto/Picto';
import StatusTag from '../../molecules/StatusTag/StatusTag';
import { TClassroomCardData } from '../ClassroomCard/ClassroomCard';
import styles from './ClassroomDetails.module.scss';

const c = classNames.bind(styles);

type TClassroomDetailsData = {
	picture?: string;
	localisation?: string;
	type?: string;
};

export type TClassroomDetails = TClassroomCardData & TClassroomDetailsData;

interface ClassroomDetailsProps {
	className?: string;
	data: TClassroomDetails;
}

function ClassroomDetails({
	className,
	data: {
		title,
		timeLeft,
		capacity,
		soundStatus,
		affluenceStatus,
		temperatureStatus,
		pictos,
		localisation,
		type,
		picture,
	},
}: ClassroomDetailsProps) {
	return (
		<div className={c('wrapper', className)}>
			<h2>{title}</h2>
			<p>Cette place est disponible pendant {timeLeft} h</p>
			<section>
				<h3>État actuel</h3>
				<ul>
					<StatusTag type="sound" value={soundStatus} />
					<StatusTag type="affluence" value={affluenceStatus} />
					<StatusTag type="temperature" value={temperatureStatus} />
				</ul>
			</section>
			<span>{timeLeft}</span>
			<p>
				{capacity.current} / {capacity.total} places disponibles
			</p>
			{localisation}
			{type}
			{picture}

			<section>
				<h3>Équipement</h3>
				{pictos.map((picto, i) => (
					<li key={i}>
						<Picto picto={picto} />
					</li>
				))}
			</section>
			<button>J'y vais</button>
		</div>
	);
}

export default ClassroomDetails;
