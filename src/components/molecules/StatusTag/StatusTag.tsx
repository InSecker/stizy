import classNames from 'classnames/bind';
import React from 'react';
import Picto, { TPicto } from '../../atoms/Picto/Picto';
import { TTagValue } from '../../organisms/ClassroomCard/ClassroomCard';
import styles from './StatusTag.module.scss';

const c = classNames.bind(styles);

export type TType = 'sound' | 'luminosity' | 'temp';

interface StatusTagProps {
	className?: string;
	type: TType;
	value: TTagValue;
}

const labels = {
	sound: ['Silencieux', 'Calme', 'Bruyant'],
	luminosity: ['Faible', 'Modérée', 'Forte'],
	temp: ['Froid', 'Idéal', 'Chaud'],
};

function StatusTag({ className, type, value }: StatusTagProps) {
	return (
		<li className={c('wrapper', className, type)}>
			<Picto className={c('picto')} picto={(type + '-' + value) as TPicto} />
			<span className={c('label')}>{labels[type][value - 1]}</span>
		</li>
	);
}

export default StatusTag;
