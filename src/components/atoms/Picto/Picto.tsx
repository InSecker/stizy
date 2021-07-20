import classNames from 'classnames/bind';
import React from 'react';
import styles from './Picto.module.scss';
import info from './svg/info.svg';
import loading from './svg/loading.svg';
import monitor from './svg/monitor.svg';
import success from './svg/success.svg';
import watch from './svg/watch.svg';

const c = classNames.bind(styles);

const pictos = {
	monitor,
	watch,
	loading,
	info,
	success,
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
