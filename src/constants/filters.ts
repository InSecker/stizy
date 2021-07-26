import { TFilters } from '../components/molecules/Select/Select';

export const filters: {
	duration: TFilters;
	hardware: TFilters;
	sorter: TFilters;
} = {
	duration: {
		label: 'Durée',
		options: [
			{
				filter: [0, 30],
				label: '0 - 30 min',
			},
			{
				filter: [31, 45],
				label: '45 min',
			},
			{
				filter: [46, 60],
				label: '1h',
			},
			{
				filter: [61],
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
				picto: 'monitor',
			},
			{
				filter: 'blackBoard',
				label: 'Tableau',
				picto: 'monitor',
			},
			{
				filter: 'computer',
				label: 'Ordinateur',
				picto: 'monitor',
			},
			{
				filter: 'speaker',
				label: 'Enceinte',
				picto: 'monitor',
			},
		],
	},
	sorter: {
		label: 'Trier par',
		options: [
			{
				filter: 'affluence',
				label: 'Affluence',
			},
			{
				filter: 'noise',
				label: 'Bruit',
			},
			{
				filter: 'availability',
				label: 'Disponibilité',
			},
			{
				filter: 'humidex',
				label: 'Humidex',
			},
			{
				filter: 'luminosity',
				label: 'Éclairage',
			},
		],
	},
};
