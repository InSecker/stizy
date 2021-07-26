import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../atoms/Button/Button';
import Picto, { TPicto } from '../../atoms/Picto/Picto';
import styles from './ClassroomCard.module.scss';

const c = classNames.bind(styles);

export type TTagValue = 1 | 2 | 3;

export type TClassroomCardData = {
	_id: string;
	name: string;
	timeLeft: number;
	soundStatus: TTagValue;
	luminosityStatus: TTagValue;
	temperatureStatus: TTagValue;
	pictos: TPicto[];
	location: string;
	type: string;
	building: string;
	floor: string;
	seat: number;
	equipments: string[];
	nodeId: number;
	noise: number;
	brightness: number;
	peopleCount: number;
	humidity: number;
	temperature: number;
	remainingTime: number;
};

interface ClassroomCardProps {
	className?: string;
	data: TClassroomCardData;
}

function ClassroomCard({
	className,
	data: {
		_id,
		name,
		building,
		type,
		floor,
		seat,
		equipments,
		nodeId,
		noise,
		brightness,
		peopleCount,
		humidity,
		temperature,
		remainingTime,
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
					<h2 className={c('title')}>{name}</h2>
					<span className={c('button', { isOpen })} />
				</div>
				<div className={c('infos')}>
					<p className={c('capacity', 'text')}>
						{peopleCount}/{seat} places disponibles
					</p>
					<div className={c('time')}>
						<Picto className={c('picto')} picto="watch" />
						<span>{remainingTime}</span>
					</div>
				</div>
				<section className={c('tags', 'section')}>
					<h3>État actuel</h3>
					<ul className={c('tags-list')}>
						{/* <StatusTag type="sound" value={noise} />
						<StatusTag type="luminosity" value={humidity} />
						<StatusTag type="temp" value={temperature} /> */}
					</ul>
				</section>
				<section className={c('hardware', 'section')}>
					<h3>Équipement</h3>
					<ul className={c('tags-list')}>
						{equipments.map((equipment, i) => {
							return (
								<li className={c('picto-item')} key={i}>
									<Picto className={c('picto')} picto={equipment} />
								</li>
							);
						})}
					</ul>
				</section>
			</div>
			<div ref={secondSection} className={c('second-section')}>
				<section className={c('section')}>
					<h3>Localisation</h3>
					<p className={c('text')}>{`${building},${floor}`}</p>
				</section>
				<section className={c('section')}>
					<h3>Type de salle</h3>
					<p className={c('text')}>{type}</p>
				</section>
				<section className={c('buttons')}>
					<Button className={c('button')} styleType="secondary">
						Ajouter
					</Button>
					<Button className={c('button')}>Let's go</Button>
				</section>
			</div>
		</li>
	);
}

export default ClassroomCard;
