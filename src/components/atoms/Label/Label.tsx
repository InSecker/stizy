import classNames from 'classnames/bind';
import React from 'react';
import styles from './Label.module.scss';

const c = classNames.bind(styles);

interface LabelProps {
	className?: string;
	children: string;
}

function Label({ className, children }: LabelProps) {
	return <div className={c('label', className)}>{children}</div>;
}

export default Label;
