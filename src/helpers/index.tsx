type Tduration = {
	label: string;
	color: string;
};
export const getDuration = (minutes: number): Tduration => {
	let hours = minutes / 60;
	let rhours = Math.floor(hours);
	let min = (hours - rhours) * 60;
	let rmin: number | string = Math.round(min);
	let color = '#eb4d4d';

	if (rhours >= 1) {
		color = '#27bb65';
	}
	if (minutes <= 60) {
		return { label: `${minutes}min`, color };
	} else
		return {
			label: `${rhours}h${rmin !== 0 && rmin < 10 ? `0${rmin}` : rmin}`,
			color,
		};
};
