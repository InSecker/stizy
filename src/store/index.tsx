import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { apiUrl } from '../constants';

interface TPlace {
	id: number;
	title: string;
	temp: number;
	status: string;
}

interface TUser {
	role: string;
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	userId: string;
	createdAt: string;
}

export type ContextType = {
	places: TPlace[];
	savePlace: (place: TPlace) => void;
	setUser: (user: TUser) => void;
	user: TUser;
};

export const AppContext = createContext<ContextType | null>(null);

interface StoreProps {
	children: any;
}

const StoreProvider = ({ children }: StoreProps) => {
	const [user, setUser] = useState<TUser>({
		role: 'user',
		_id: '60fa798105f93e0015da91b6',
		firstName: 'test',
		lastName: 'test',
		email: 'test@test.test',
		userId: '9',
		createdAt: '2021-07-23T08:10:41.083Z',
	});

	const [places, setPlaces] = useState<TPlace[]>([
		{
			_id: '60f7f235545e68749d9e2e75',
			name: 'A203',
			building: 'bâtiment H',
			type: 'Salle de cours',
			floor: '2ème étage',
			seat: 15,
			equipments: ['whiteboard', 'projector', 'computer', 'speaker'],
			nodeId: 12345678,
			noise: 11,
			brightness: 53198,
			peopleCount: 0,
			humidity: 41,
			temperature: 23,
			remainingTime: 55,
		},
	]);

	useEffect(() => {
		axios
			.get(`${apiUrl}/place/60f59165105fa7ad858b82ec`)
			.then((res) => setPlaces(res.data));
	}, []);

	return (
		<AppContext.Provider value={{ places, user, setUser }}>
			{children}
		</AppContext.Provider>
	);
};

export default StoreProvider;
