import classNames from 'classnames/bind';
import router from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import Picto from '../../components/atoms/Picto/Picto';
import Select from '../../components/molecules/Select/Select';
import ClassroomCardList from '../../components/organisms/ClassroomCardList/ClassroomCardList';
import { filters } from '../../constants/filters';
import { AppContext, TPlace } from '../../store';
import styles from './Search.module.scss';

const c = classNames.bind(styles);

interface SearchProps {
	className?: string;
}

function Search({ className }: SearchProps) {
	const { places } = useContext(AppContext);
	const [filteredPlaces, setFilteredPlaces] = useState<TPlace[]>(places);
	const [search, setSearch] = useState('');
	const [durationFilter, setDurationFilter] = useState<number | null>(null);
	const [hardwareFilter, setHardwareFilter] = useState<number | null>(null);
	const [sorter, setSorter] = useState<number | null>(null);

	function cleanFilters() {
		setDurationFilter(null);
		setHardwareFilter(null);
		setSorter(null);
	}

	useEffect(() => {
		if (router.query.filter) {
			switch (router.query.filter) {
				case 'empty':
					setSorter(0);
					break;
				case 'quiet':
					setSorter(1);
					break;
				case 'oneHourFree':
					setDurationFilter(2);
					break;
				case 'withProj':
					setHardwareFilter(0);
					break;
				default:
					break;
			}
		}
	}, []);

	useEffect(() => {
		function sort(sorterType: any) {
			return function (a: any, b: any) {
				if (sorterType === 'remainingTime') {
					if (a[sorterType] > b[sorterType]) {
						return -1;
					} else {
						return 1;
					}
				} else {
					if (a[sorterType] > b[sorterType]) {
						return 1;
					} else {
						return -1;
					}
				}
			};
		}

		let memPlaces = places.filter((place) => place.remainingTime > 0);
		if (sorter !== null) {
			memPlaces = memPlaces.sort(sort(filters.sorter.options[sorter].filter));
		}
		if (durationFilter !== null) {
			memPlaces = memPlaces.filter(
				(place) =>
					place.remainingTime > filters.duration.options[durationFilter].filter,
			);
			setFilteredPlaces(memPlaces);
		}
		if (hardwareFilter !== null) {
			memPlaces = memPlaces.filter((place) =>
				place.equipments.includes(
					filters.hardware.options[hardwareFilter].filter as string,
				),
			);
			setFilteredPlaces(memPlaces);
		}

		if (hardwareFilter === null && durationFilter === null) {
			setFilteredPlaces(memPlaces);
		}
	}, [durationFilter, hardwareFilter, places, sorter]);

	return (
		<>
			<h1 className={c('title')}>
				{filteredPlaces.length}
				{filteredPlaces.length > 1
					? ' Salles disponibles'
					: ' Salle disponible'}
			</h1>

			<div className={c('filters')}>
				{/* <SearchInput
					value={search}
					setValue={setSearch}
					reset={() => setSearch('')}
					className={c('search')}
				/> */}
				<Select
					filterValue={durationFilter}
					label={filters.duration.label}
					filterData={filters.duration}
					setFilterValue={setDurationFilter}
				/>
				<Select
					filterValue={hardwareFilter}
					label={filters.hardware.label}
					filterData={filters.hardware}
					setFilterValue={setHardwareFilter}
				/>
				<Select
					filterValue={sorter}
					label={filters.sorter.label}
					filterData={filters.sorter}
					type="sorter"
					setFilterValue={setSorter}
				/>
			</div>

			{filteredPlaces.length > 0 ? (
				<>
					{(hardwareFilter !== null ||
						durationFilter !== null ||
						sorter !== null) && (
						<div className={c('filter-info')}>
							<p className={c('text')}>
								{filteredPlaces.length} Correspondance
								{filteredPlaces.length > 1 && 's'}
							</p>
							<button className={c('button')} onClick={cleanFilters}>
								<Picto picto={'trash'} className={c('picto')} />
							</button>
						</div>
					)}

					<ClassroomCardList
						className={c('results')}
						classroomList={filteredPlaces}
					/>
				</>
			) : (
				<p>Pas de résultat</p>
			)}
		</>
	);
}

export default Search;
