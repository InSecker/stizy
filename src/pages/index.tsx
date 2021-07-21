import classNames from 'classnames/bind';
import Button from '../components/atoms/Button/Button';
import Input from '../components/atoms/Input/Input';
import FormControl from '../components/molecules/FormControl/FormControl';
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
	return (
		<main className={c('wrapper')}>
			<ClassroomCard data={classroomData} />
			<Button onClick={() => {}} type="primary" loading>
				Button
			</Button>

			<FormControl
				label="label"
				// error={{ label: 'test error' }}
			>
				<Input placeholder="Ceci est un placeholder" />
			</FormControl>
		</main>
	);
};

export default Home;
