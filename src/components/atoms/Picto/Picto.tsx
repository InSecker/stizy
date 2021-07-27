import classNames from 'classnames/bind';
import React from 'react';
import styles from './Picto.module.scss';
import arrow from './svg/arrow.svg';
import arrows from './svg/arrows.svg';
import brightness1 from './svg/brightness-1.svg';
import brightness2 from './svg/brightness-2.svg';
import brightness3 from './svg/brightness-3.svg';
import brightness4 from './svg/brightness-4.svg';
import close from './svg/close.svg';
import heart from './svg/heart.svg';
import history from './svg/history.svg';
import home from './svg/home.svg';
import info from './svg/info.svg';
import loading from './svg/loading.svg';
import monitor from './svg/monitor.svg';
import noise1 from './svg/noise-1.svg';
import noise2 from './svg/noise-2.svg';
import noise3 from './svg/noise-3.svg';
import profile from './svg/profile.svg';
import projector from './svg/projector.svg';
import search from './svg/search.svg';
import speaker from './svg/speaker.svg';
import success from './svg/success.svg';
import tempFeeling1 from './svg/tempFeeling-1.svg';
import tempFeeling2 from './svg/tempFeeling-2.svg';
import tempFeeling3 from './svg/tempFeeling-3.svg';
import trash from './svg/trash.svg';
import watch from './svg/watch.svg';
import whiteboard from './svg/whiteboard.svg';

const c = classNames.bind(styles);

const pictos = {
	monitor,
	watch,
	loading,
	info,
	success,
	'brightness-1': brightness1,
	'brightness-2': brightness2,
	'brightness-3': brightness3,
	'brightness-4': brightness4,
	'noise-1': noise1,
	'noise-2': noise2,
	'noise-3': noise3,
	'tempFeeling-1': tempFeeling1,
	'tempFeeling-2': tempFeeling2,
	'tempFeeling-3': tempFeeling3,
	profile,
	home,
	search,
	close,
	history,
	projector,
	whiteboard,
	speaker,
	'computer': monitor,
	heart,
	arrow,
	arrows,
	trash,
};

export type TPicto = keyof typeof pictos;

interface PictoProps {
	className?: string;
	picto: TPicto;
	style?: object;
}

function Picto({ className, picto, style }: PictoProps) {
	const SVG = pictos[picto];
	return <SVG style={style} className={c('wrapper', className)} />;
}

export default Picto;
