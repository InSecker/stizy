import classNames from 'classnames/bind';
import React from 'react';
import styles from './History.module.scss';

const c = classNames.bind(styles);

interface HistoryProps {
	className?: string;
}

function History({ className }: HistoryProps) {
	return (
		<div className={c('wrapper', className)}>
			<p>History</p>
		</div>
	);
}

export default History;
