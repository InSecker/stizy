import classNames from 'classnames/bind';
import { useContext } from 'react';
import FilterCard from '../components/molecules/FilterCard/FilterCard';
import ClassroomCardList from '../components/organisms/ClassroomCardList/ClassroomCardList';
import { AppContext, TPlace } from '../store';
import styles from './style.module.scss';

const c = classNames.bind(styles);

type THomeData = {
	message: string;
	favorites: TPlace[];
};

function Home() {
	const { user, places, counts } = useContext(AppContext);

	return (
		<>
			<section className={c('section')}>
				<p className={c('title')}>
					Bonjour {user?.firstName}, où veux-tu aller?
				</p>
				<ul className={c('filter-room-list')}>
					{counts && (
						<>
							{counts.empty > 0 && (
								<FilterCard label="empty" count={counts.empty} />
							)}
							{counts.quiet > 0 && (
								<FilterCard label="quiet" count={counts.quiet} />
							)}
							{counts.availableMoreThanOneHour > 0 && (
								<FilterCard
									label="oneHourFree"
									count={counts.availableMoreThanOneHour}
								/>
							)}
							{counts.withProjector > 0 && (
								<FilterCard label="withProj" count={counts.withProjector} />
							)}
						</>
					)}
				</ul>
			</section>

			<section className={c('section')}>
				<h1 className={c('title')}>Salles favorites</h1>
				{places.length > 0 ? (
					<ClassroomCardList
						classroomList={places.filter((place) =>
							user?.favoritePlaces.includes(place._id),
						)}
					/>
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
