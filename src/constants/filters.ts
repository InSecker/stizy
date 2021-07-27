import { TFilter } from '../components/molecules/Select/Select';

export const filters: {
	duration: TFilter;
	hardware: TFilter;
	sorter: TFilter;
} = {
	duration: {
		label: 'Durée',
		options: [
			{
				filter: 29,
				label: '30 min',
			},
			{
				filter: 44,
				label: '45 min',
			},
			{
				filter: 59,
				label: '1h',
			},
			{
				filter: 119,
				label: '2h+',
			},
		],
	},
	hardware: {
		label: 'Materiel',
		options: [
			{
				filter: 'projector',
				label: 'Projecteur',
				picto: 'projector',
			},
			{
				filter: 'blackBoard',
				label: 'Tableau',
				picto: 'whiteboard',
			},
			{
				filter: 'computer',
				label: 'Ordinateur',
				picto: 'monitor',
			},
			{
				filter: 'speaker',
				label: 'Enceinte',
				picto: 'speaker',
			},
		],
	},
	sorter: {
		label: 'Trier par',
		options: [
			{
				filter: 'peopleCount',
				label: 'Affluence',
			},
			{
				filter: 'noise',
				label: 'Bruit',
			},
			{
				filter: 'remainingTime',
				label: 'Disponibilité',
			},
			{
				filter: 'tempFeeling',
				label: 'Humidex',
			},
			{
				filter: 'brightness',
				label: 'Éclairage',
			},
		],
	},
};
