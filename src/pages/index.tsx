import classNames from 'classnames/bind';
import FilterCard from '../components/molecules/FilterCard/FilterCard';
import { TClassroomCardData } from '../components/organisms/ClassroomCard/ClassroomCard';
import ClassroomCardList from '../components/organisms/ClassroomCardList/ClassroomCardList';
import { classroomData } from '../constants/fakeData';
import styles from './style.module.scss';

const c = classNames.bind(styles);

type THomeData = {
	message: string;
	currentRooms: {
		empty: number;
		quiet: number;
		oneHourFree: number;
		withProj: number;
	};
	favorites: TClassroomCardData[];
};

const homeData: THomeData = {
	message: 'Bonjour Anne-Catherine, où veux-tu travailler ?',
	currentRooms: {
		empty: 8,
		quiet: 2,
		oneHourFree: 8,
		withProj: 4,
	},
	favorites: [
		classroomData,
		classroomData,
		classroomData,
		classroomData,
		classroomData,
		classroomData,
	],
};

function Home() {
	return (
		<>
			<section className={c('section')}>
				<p className={c('title')}>{homeData.message}</p>
				<ul className={c('filter-room-list')}>
					{homeData.currentRooms.empty > 0 && (
						<FilterCard label="empty" count={homeData.currentRooms.empty} />
					)}
					{homeData.currentRooms.quiet > 0 && (
						<FilterCard label="quiet" count={homeData.currentRooms.quiet} />
					)}
					{homeData.currentRooms.oneHourFree > 0 && (
						<FilterCard
							label="oneHourFree"
							count={homeData.currentRooms.oneHourFree}
						/>
					)}
					{homeData.currentRooms.withProj > 0 && (
						<FilterCard
							label="withProj"
							count={homeData.currentRooms.withProj}
						/>
					)}
				</ul>
			</section>

			<section className={c('section')}>
				<h1 className={c('title')}>Salles favorites</h1>
				{homeData.favorites.length > 0 ? (
					<ClassroomCardList classroomList={homeData.favorites} />
				) : (
					<>
						<p className={c('no-favorite')}>
							Vous n’avez aucune salle favorites actuellement.
						</p>
						<p className={c('help')}>
							Vous pouvez ajoutez des salles en favoris directement depuis
							l’espace recherche ou historique.
						</p>
					</>
				)}
			</section>
		</>
	);
}

export default Home;
