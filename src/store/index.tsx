import axios from 'axios';
import router from 'next/router';
import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from 'react';

export interface TPlace {
	_id: string;
	name: string;
	building: string;
	type: string;
	floor: string;
	seats: number;
	equipments: string[];
	nodeId: number;
	noise: number;
	brightness: number;
	peopleCount: number;
	humidity: number;
	tempFeeling: number;
	remainingTime: number;
}

interface TUser {
	role: string;
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	userId: string;
	createdAt: string;
	favoritePlaces: string[];
	visitedPlaces: string[];
}

interface TCounts {
	availableMoreThanOneHour: number;
	empty: number;
	quiet: number;
	withProjector: number;
}

export type ContextType = {
	places: TPlace[];
	setPlaces: Dispatch<SetStateAction<TPlace[]>>;
	counts: TCounts | null;
	setUser: (user: TUser) => void;
	user: TUser | null;
	fetchUserData: () => void;
};

export const AppContext = createContext<ContextType>({
	places: [],
	setPlaces: () => [],
	counts: {} as TCounts,
	setUser: () => {},
	user: {} as TUser,
	fetchUserData: () => {},
});

interface StoreProps {
	children: any;
}

const StoreProvider = ({ children }: StoreProps) => {
	const [user, setUser] = useState<TUser | null>(null);
	const [places, setPlaces] = useState<TPlace[]>([]);
	const [counts, setCounts] = useState<TCounts | null>(null);

	function excludeOccupated(a: TPlace, b: TPlace) {
		if (a.remainingTime > b.remainingTime) {
			return -1;
		} else {
			return 1;
		}
	}

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			router.push('/login');
			return;
		}

		function fetchPlaces() {
			axios
				.get(process.env.NEXT_PUBLIC_API_URL + '/place', {
					headers: {
						Authorization: localStorage.getItem('token'),
					},
				})
				.then(
					(res) => {
						setCounts(res.data.counts);
						setPlaces(res.data.places.sort(excludeOccupated));
						setTimeout(fetchPlaces, 60000);
					},
					(error) => {
						localStorage.removeItem('token');
						setPlaces([]);
						console.log(error);
						router.push('/login');
					},
				);
		}

		fetchPlaces();
	}, [user]);

	function fetchUserData() {
		axios
			.get(process.env.NEXT_PUBLIC_API_URL + '/auth/me', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then(
				(res) => {
					setUser(res.data.user);
				},
				(error) => {
					console.log(error);
				},
			);
	}

	useEffect(() => {
		axios
			.get(process.env.NEXT_PUBLIC_API_URL + '/auth/me', {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then(
				(res) => {
					setUser(res.data.user);
				},
				(error) => {
					console.log(error);
				},
			);
	}, []);

	return (
		<AppContext.Provider
			value={{ places, user, setUser, counts, fetchUserData, setPlaces }}
		>
			{children}
		</AppContext.Provider>
	);
};

export default StoreProvider;
