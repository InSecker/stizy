import classNames from 'classnames/bind';
import React from 'react';
import styles from './StatusTag.module.scss';

const c = classNames.bind(styles);

export type TType = 'sound' | 'affluence' | 'temperature';

interface StatusTagProps {
	className?: string;
	type: TType;
	value: string;
}

function StatusTag({ className, type }: StatusTagProps) {
	return (
		<li className={c('wrapper', className)}>{/* <Picto type={type}> */}</li>
	);
}

export default StatusTag;
