import axios from 'axios';
import classNames from 'classnames/bind';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { getDuration } from '../../../helpers';
import { AppContext, TPlace } from '../../../store';
import Button from '../../atoms/Button/Button';
import Picto, { TPicto } from '../../atoms/Picto/Picto';
import StatusTag from '../../molecules/StatusTag/StatusTag';
import Popin from '../Popin/Popin';
import styles from './ClassroomCard.module.scss';

const c = classNames.bind(styles);

export type TTagValue = 1 | 2 | 3 | 4;

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
		seats,
		equipments,
		nodeId,
		peopleCount,
		noise,
		brightness,
		humidity,
		tempFeeling,
		remainingTime,
	},
}: ClassroomCardProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [height, setHeight] = useState('auto');
	const firstSection = useRef<HTMLDivElement | null>(null);
	const secondSection = useRef<HTMLDivElement | null>(null);
	const self = useRef(null);
	const { user, fetchUserData } = useContext(AppContext);
	const [isFavorite, setIsFavorite] = useState(
		user?.favoritePlaces.includes(_id),
	);
	const [isPopinOpen, setIsPopinOpen] = useState(false);

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

	function toggleFavorite() {
		setIsFavorite(!isFavorite);
		axios
			.post(
				process.env.NEXT_PUBLIC_API_URL + '/user/favorite',
				{
					action: isFavorite ? 'remove' : 'add',
					placeId: _id,
				},
				{
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				},
			)
			.then(() => {
				fetchUserData();
			});
	}

	function handleGoToRoom() {
		setIsPopinOpen(true);
		axios
			.post(
				process.env.NEXT_PUBLIC_API_URL + '/user/history',
				{
					action: 'add',
					placeId: _id,
				},
				{
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				},
			)
			.then(() => {
				fetchUserData();
			});
	}

	return (
		<li
			ref={self}
			className={c('wrapper', className, {
				isOpen: isOpen && remainingTime > 0,
				unavaible: peopleCount === seats,
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
						<span
							className={c('button', { isOpen: isOpen && remainingTime > 0 })}
						/>
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
							{peopleCount}/{seats} places utilisées
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
							<StatusTag type="noise" value={noise as TTagValue} />
							<StatusTag type="brightness" value={brightness as TTagValue} />
							<StatusTag type="tempFeeling" value={tempFeeling as TTagValue} />
						</ul>
					</section>
				)}
				{remainingTime > 0 && (
					<section className={c('hardware', 'section')}>
						<h3>Équipement</h3>
						{equipments.length > 0 ? (
							<ul className={c('tags-list')}>
								{equipments.map((equipment, i) => {
									return (
										<li className={c('picto-item')} key={i}>
											<Picto
												className={c('picto')}
												picto={equipment as TPicto}
											/>
										</li>
									);
								})}
							</ul>
						) : (
							<p className={c('no-hardware')}>{"Pas d'équipement"}</p>
						)}
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
						<Button
							onClick={toggleFavorite}
							className={c('action-button', 'favorite-button', { isFavorite })}
							styleType={isFavorite ? 'primary' : 'secondary'}
						>
							<Picto picto="heart" className={c('picto')} />
							{isFavorite ? 'Retirer' : 'Ajouter'}
						</Button>
						<Button className={c('action-button')} onClick={handleGoToRoom}>
							{"Let's go"}
						</Button>
					</section>
				</div>
			)}
			{isPopinOpen && (
				<div className={c('confirmation-popin')}>
					{' '}
					<Popin
						title={name}
						onClose={() => setIsPopinOpen(false)}
						className={c('popin')}
					/>
				</div>
			)}
		</li>
	);
}

export default ClassroomCard;
