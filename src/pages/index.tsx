import classNames from 'classnames/bind';
import { useState } from 'react';
import ClassroomCard, {
	TClassroomCardData,
} from '../components/organisms/ClassroomCard/ClassroomCard';
import styles from './style.module.scss';

const c = classNames.bind(styles);

const classroomData: TClassroomCardData = {
	title: 'Salle A207',
	timeLeft: 100,
	luminosityStatus: 1,
	soundStatus: 2,
	temperatureStatus: 1,
	capacity: {
		current: 100,
		total: 101,
	},
	pictos: ['monitor', 'watch'],
	location: 'Batiment A, 2ème étage',
	types: ['Salle de cours', 'Amphi', 'Labo'],
};
const Home = () => {
	const [value, setValue] = useState<string>('');
	const reset = () => {
		setValue('');
	};
	return (
		<main className={c('wrapper')}>
			<ClassroomCard data={classroomData} />
		</main>
	);
};

export default Home;
