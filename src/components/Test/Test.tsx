import classNames from 'classnames/bind';
import React from 'react';
import styles from './Test.module.scss';

const c = classNames.bind(styles);

interface TestProps {
	className?: string;
}

function Test({ className }: TestProps) {
	return (
		<div className={c('wrapper', className)}>
			<p>Test</p>
		</div>
	);
}

export default Test;
