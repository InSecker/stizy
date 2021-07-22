import classNames from 'classnames/bind';
import React from 'react';
import styles from './Picto.module.scss';
import history from './svg/history.svg';
import home from './svg/home.svg';
import info from './svg/info.svg';
import loading from './svg/loading.svg';
import luminosity1 from './svg/luminosity-1.svg';
import luminosity2 from './svg/luminosity-2.svg';
import luminosity3 from './svg/luminosity-3.svg';
import monitor from './svg/monitor.svg';
import profile from './svg/profile.svg';
import search from './svg/search.svg';
import sound1 from './svg/sound-1.svg';
import sound2 from './svg/sound-2.svg';
import sound3 from './svg/sound-3.svg';
import success from './svg/success.svg';
import temp1 from './svg/temp-1.svg';
import temp2 from './svg/temp-2.svg';
import temp3 from './svg/temp-3.svg';
import watch from './svg/watch.svg';

const c = classNames.bind(styles);

const pictos = {
	monitor,
	watch,
	loading,
	info,
	success,
	'luminosity-1': luminosity1,
	'luminosity-2': luminosity2,
	'luminosity-3': luminosity3,
	'sound-1': sound1,
	'sound-2': sound2,
	'sound-3': sound3,
	'temp-1': temp1,
	'temp-2': temp2,
	'temp-3': temp3,
	profile,
	home,
	search,
	history,
};

export type TPicto = keyof typeof pictos;

interface PictoProps {
	className?: string;
	picto: TPicto;
}

function Picto({ className, picto }: PictoProps) {
	const SVG = pictos[picto];
	return <SVG className={c('wrapper', className)} />;
}

export default Picto;
