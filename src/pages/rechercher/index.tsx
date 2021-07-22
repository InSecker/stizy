import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Select from '../../components/molecules/Select/Select';
import ClassroomCardList from '../../components/organisms/ClassroomCardList/ClassroomCardList';
import { classroomData } from '../../constants/fakeData';
import styles from './Search.module.scss';

const c = classNames.bind(styles);

interface SearchProps {
	className?: string;
}

const searchData = {
	classrooms: [classroomData],
};

function Search({ className }: SearchProps) {
	const [search, setSearch] = useState('');

	return (
		<>
			<h1 className={c('title')}>
				{searchData.classrooms.length}
				{searchData.classrooms.length > 1
					? ' Salles disponibles'
					: ' Salle disponible'}
			</h1>
			<div className={c('filters')}>
				<Select
					label="Durée"
					options={['0 - 30 min', '45 min', '1h', '1h30', '2h+']}
				/>
			</div>
			<ClassroomCardList
				className={c('results')}
				classroomList={searchData.classrooms}
			/>
		</>
	);
}

export default Search;
