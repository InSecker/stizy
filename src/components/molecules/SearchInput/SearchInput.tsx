import classNames from 'classnames/bind';
import React from 'react';
import Picto from '../../atoms/Picto/Picto';
import styles from './SearchInput.module.scss';

const c = classNames.bind(styles);

interface SearchInputProps {
	className?: string;
	setValue: any;
	reset: () => void;
	value: string;
}

function SearchInput({ className, setValue, reset, value }: SearchInputProps) {
	return (
		<div className={c('wrapper', className)}>
			<div className={c('search')}>
				<Picto picto="search" className={c('picto')} />
			</div>
			<input
				onChange={(e) => setValue(e.target.value)}
				className={c('input')}
				placeholder="Rechercher une salle"
				value={value}
			/>
			{value && (
				<button onClick={reset} className={c('close-button')}>
					<Picto picto="close" className={c('picto')} />
				</button>
			)}
		</div>
	);
}

export default SearchInput;
