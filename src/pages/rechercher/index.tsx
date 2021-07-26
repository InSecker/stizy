import classNames from 'classnames/bind';
import React, { useContext, useState } from 'react';
import SearchInput from '../../components/molecules/SearchInput/SearchInput';
import Select from '../../components/molecules/Select/Select';
import ClassroomCardList from '../../components/organisms/ClassroomCardList/ClassroomCardList';
import { filters } from '../../constants/filters';
import { AppContext } from '../../store';
import styles from './Search.module.scss';

const c = classNames.bind(styles);

interface SearchProps {
	className?: string;
}

function Search({ className }: SearchProps) {
	const [search, setSearch] = useState('');
	const { places } = useContext(AppContext);

	return (
		<>
			<h1 className={c('title')}>
				{/* {searchData.classrooms.length}
				{searchData.classrooms.length > 1
					? ' Salles disponibles'
					: ' Salle disponible'} */}
			</h1>
			<div className={c('filters')}>
				<SearchInput
					value={search}
					setValue={setSearch}
					reset={() => setSearch('')}
					className={c('search')}
				/>
				<Select label={filters.duration.label} filterData={filters.duration} />
				<Select label={filters.hardware.label} filterData={filters.hardware} />
				<Select
					label={filters.sorter.label}
					filterData={filters.sorter}
					type="sorter"
				/>
			</div>

			<ClassroomCardList className={c('results')} classroomList={places} />
		</>
	);
}

export default Search;
