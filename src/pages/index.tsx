import classNames from 'classnames/bind';
import { useContext } from 'react';
import ClassroomCardList from '../components/organisms/ClassroomCardList/ClassroomCardList';
import { AppContext, TPlace } from '../store';
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
	favorites: TPlace[];
};

function Home() {
	const { user, places } = useContext(AppContext);

	return (
		<>
			{/* <section className={c('section')}>
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
			</section> */}

			<section className={c('section')}>
				<h1 className={c('title')}>Salles favorites</h1>
				{places.length > 0 ? (
					<ClassroomCardList classroomList={places} />
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
