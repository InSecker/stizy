import classNames from 'classnames/bind';
import React from 'react';
import { TPlace } from '../../../store';
import ClassroomCard from '../ClassroomCard/ClassroomCard';
import styles from './ClassroomCardList.module.scss';

const c = classNames.bind(styles);

interface ClassroomCardListProps {
	className?: string;
	classroomList: TPlace[];
}

function ClassroomCardList({
	className,
	classroomList,
}: ClassroomCardListProps) {
	return (
		<ul className={c('wrapper', className)}>
			{classroomList.map((room, i) => (
				<ClassroomCard key={i} data={room} className={c('card')} />
			))}
		</ul>
	);
}

export default ClassroomCardList;
