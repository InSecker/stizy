import { createContext, useState } from 'react';

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
			id: 1,
			title: 'Salle 1',
			temp: 24.5,
			status: 'occupated',
		},
		{
			id: 2,
			title: 'Salle 1',
			temp: 24.5,
			status: 'occupated',
		},
	]);

	return (
		<AppContext.Provider value={{ places, user, setUser }}>
			{children}
		</AppContext.Provider>
	);
};

export default StoreProvider;
