import classNames from 'classnames/bind';
import React from 'react';
import styles from './Search.module.scss';

const c = classNames.bind(styles);

interface SearchProps {
	className?: string;
}

function Search({ className }: SearchProps) {
	return (
		<div className={c('wrapper', className)}>
			<p>Search</p>
		</div>
	);
}

export default Search;
