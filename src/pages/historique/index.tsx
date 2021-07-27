import classNames from 'classnames/bind';
import React, { useContext } from 'react';
import ClassroomCardList from '../../components/organisms/ClassroomCardList/ClassroomCardList';
import { AppContext } from '../../store';
import styles from './History.module.scss';

const c = classNames.bind(styles);

interface HistoryProps {
	className?: string;
}

function History({ className }: HistoryProps) {
	const { places, user } = useContext(AppContext);
	return (
		<div className={c('wrapper', className)}>
			<h1 className={c('title')}>Historique</h1>
			<ClassroomCardList
				classroomList={places.filter((place) =>
					user?.visitedPlaces.includes(place._id),
				)}
			/>
		</div>
	);
}

export default History;
