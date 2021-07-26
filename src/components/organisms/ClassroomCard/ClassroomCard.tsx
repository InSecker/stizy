import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import { getDuration } from '../../../helpers';
import { TPlace } from '../../../store';
import Button from '../../atoms/Button/Button';
import Picto, { TPicto } from '../../atoms/Picto/Picto';
import styles from './ClassroomCard.module.scss';

const c = classNames.bind(styles);

export type TTagValue = 1 | 2 | 3;

interface ClassroomCardProps {
	className?: string;
	data: TPlace;
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
		peopleCount,
		noise,
		brightness,
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
	}, [isOpen, remainingTime]);

	return (
		<li
			ref={self}
			className={c('wrapper', className, {
				isOpen,
				unavaible: peopleCount === seat,
			})}
			style={{ ['--height' as string]: height }}
		>
			<div
				ref={firstSection}
				className={c('first-section')}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className={c('top-section')}>
					<h2 className={c('title')}>{name}</h2>
					{remainingTime > 0 ? (
						<span className={c('button', { isOpen })} />
					) : (
						<span className={c('unavailable-right')}>
							<div className={c('red-dot')} />
							<span className={c('unavailable-text')}>Occupé</span>
						</span>
					)}
				</div>
				{remainingTime > 0 && (
					<div className={c('infos')}>
						<p className={c('capacity', 'text')}>
							{peopleCount}/{seat} places disponibles
						</p>
						<div className={c('time')}>
							<Picto
								style={{
									['--picto-color' as string]: getDuration(remainingTime).color,
								}}
								className={c('picto')}
								picto="watch"
							/>
							<span
								className={c('duration')}
								style={{ color: getDuration(remainingTime).color }}
							>
								{getDuration(remainingTime).label}
							</span>
						</div>
					</div>
				)}
				{remainingTime > 0 && (
					<section className={c('tags', 'section')}>
						<h3>État actuel</h3>
						<ul className={c('tags-list')}>
							{/* <StatusTag type="sound" value={noise} />
							<StatusTag type="luminosity" value={humidity} />
							<StatusTag type="temp" value={temperature} /> */}
						</ul>
					</section>
				)}
				{remainingTime > 0 && (
					<section className={c('hardware', 'section')}>
						<h3>Équipement</h3>
						<ul className={c('tags-list')}>
							{equipments.map((equipment, i) => {
								return (
									<li className={c('picto-item')} key={i}>
										<Picto className={c('picto')} picto={equipment as TPicto} />
									</li>
								);
							})}
						</ul>
					</section>
				)}
			</div>
			{remainingTime > 0 && (
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
						<Button className={c('action-button')} styleType="secondary">
							<div className={c('button-icon')}>
								<Picto picto="heart" />
							</div>
							Ajouter
						</Button>
						<Button className={c('action-button')}>{"Let's go"}</Button>
					</section>
				</div>
			)}
		</li>
	);
}

export default ClassroomCard;
