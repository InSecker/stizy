import classNames from 'classnames/bind';
import Button from '../components/atoms/Button/Button';
import ClassroomCard, {
	TClassroomCardData,
} from '../components/organisms/ClassroomCard/ClassroomCard';
import ClassroomDetails, {
	TClassroomDetails,
} from '../components/organisms/ClassroomDetails/ClassroomDetails';
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

const classroomDetailsData: TClassroomDetails = {
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
	picture: '',
	type: 'type',
	localisation: 'montreuil',
};

export default function Home() {
	return (
		<main className={c('wrapper')}>
			<ClassroomCard data={classroomData} />
			<ClassroomDetails data={classroomDetailsData} />
			<Button onClick={() => {}} type="primary" loading>
				Button
			</Button>
		</main>
	);
}
