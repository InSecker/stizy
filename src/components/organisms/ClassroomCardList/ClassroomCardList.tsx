import classNames from 'classnames/bind';
import React from 'react';
import ClassroomCard, {
	TClassroomCardData,
} from '../ClassroomCard/ClassroomCard';
import styles from './ClassroomCardList.module.scss';

const c = classNames.bind(styles);

interface ClassroomCardListProps {
	className?: string;
	classroomList: TClassroomCardData[];
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
