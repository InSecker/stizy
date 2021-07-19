import classNames from 'classnames/bind';
import ClassroomCard, {
	TClassroomCardData,
} from '../components/organisms/ClassroomCard/ClassroomCard';
import styles from './style.module.scss';

const c = classNames.bind(styles);

const classroomData: TClassroomCardData = {
	title: 'Salle ',
	timeLeft: 100,
	affluenceStatus: 'blabla',
	soundStatus: 'balba',
	temperatureStatus: 'balba',
	capacity: {
		current: 10,
		total: 24,
	},
	pictos: ['monitor', 'watch'],
};

export default function Home() {
	return (
		<main className={c('wrapper')}>
			<ClassroomCard data={classroomData} />
		</main>
	);
}
