import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import Picto, { TPicto } from '../../atoms/Picto/Picto';
import StatusTag from '../../molecules/StatusTag/StatusTag';
import styles from './ClassroomCard.module.scss';

const c = classNames.bind(styles);

type TCapacity = {
	total: number;
	current: number;
};

export type TTagValue = 1 | 2 | 3;

export type TClassroomCardData = {
	title: string;
	timeLeft: number;
	capacity: TCapacity;
	soundStatus: TTagValue;
	luminosityStatus: TTagValue;
	temperatureStatus: TTagValue;
	pictos: TPicto[];
	location: string;
	types: string[];
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
		luminosityStatus,
		temperatureStatus,
		pictos,
		location,
		types,
	},
}: ClassroomCardProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState('auto');
	const firstSection = useRef<HTMLDivElement | null>(null);
	const secondSection = useRef<HTMLDivElement | null>(null);
	const self = useRef(null);

	useEffect(() => {
		function setSizes() {
			setHeight(() =>
				isOpen &&
				firstSection.current?.clientHeight &&
				secondSection.current?.clientHeight
					? firstSection.current?.clientHeight +
					  secondSection.current?.clientHeight +
					  'px'
					: firstSection.current?.clientHeight + 'px',
			);
		}

		setSizes();

		window.addEventListener('resize', setSizes, { passive: true });

		return () => {
			window.removeEventListener('resize', setSizes);
		};
	}, [isOpen]);

	return (
		<li
			ref={self}
			className={c('wrapper', className, { isOpen })}
			style={{ ['--height' as string]: height }}
		>
			<div
				ref={firstSection}
				className={c('first-section')}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className={c('top-section')}>
					<h2 className={c('title')}>{title}</h2>
					<span className={c('button', { isOpen })} />
				</div>
				<div className={c('infos')}>
					<p className={c('capacity', 'text')}>
						{capacity.current}/{capacity.total} places disponibles
					</p>
					<div className={c('time')}>
						<Picto className={c('picto')} picto="watch" />
						<span>{timeLeft}</span>
					</div>
				</div>
				<section className={c('tags', 'section')}>
					<h3>État actuel</h3>
					<ul className={c('tags-list')}>
						<StatusTag type="sound" value={soundStatus} />
						<StatusTag type="luminosity" value={luminosityStatus} />
						<StatusTag type="temp" value={temperatureStatus} />
					</ul>
				</section>
				<section className={c('hardware', 'section')}>
					<h3>Équipement</h3>
					<ul className={c('tags-list')}>
						{pictos.map((picto, i) => (
							<li className={c('picto-item')} key={i}>
								<Picto className={c('picto')} picto={picto} />
							</li>
						))}
					</ul>
				</section>
			</div>
			<div ref={secondSection} className={c('second-section')}>
				<section className={c('section')}>
					<h3>Localisation</h3>
					<p className={c('text')}>{location}</p>
				</section>
				<section className={c('section')}>
					<h3>Type de salle</h3>
					<p className={c('text')}>
						{types.map((type, i) =>
							i + 1 === types.length ? type : type + ' / ',
						)}
					</p>
				</section>
			</div>
		</li>
	);
}

export default ClassroomCard;
