import classNames from 'classnames/bind';
import React from 'react';
import styles from './Picto.module.scss';
import loading from './svg/loading.svg';
import monitor from './svg/monitor.svg';
import watch from './svg/watch.svg';

const c = classNames.bind(styles);

const pictos = {
	monitor: monitor,
	watch: watch,
	loading: loading,
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
