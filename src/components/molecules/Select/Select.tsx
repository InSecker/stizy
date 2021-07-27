import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Picto, { TPicto } from '../../atoms/Picto/Picto';
import styles from './Select.module.scss';

const c = classNames.bind(styles);

export type TFilter = {
	label: string;
	options: {
		filter: number | string;
		label: string;
		picto?: TPicto;
	}[];
};

interface SelectProps {
	className?: string;
	filterData: TFilter;
	label: string;
	type?: 'classic' | 'sorter';
	setFilterValue: (i: number | null) => void;
	filterValue: number | null;
}

function Select({
	className,
	filterData,
	type = 'classic',
	setFilterValue,
	filterValue,
}: SelectProps) {
	const [isOpen, setIsOpen] = useState(false);

	function handleSelect(i: number) {
		if (i === filterValue) {
			setFilterValue(null);
		} else {
			setFilterValue(i);
		}
		setIsOpen(false);
	}

	return (
		<div
			className={c(
				'wrapper',
				className,
				{ isOpen },
				{ isActive: filterValue !== null },
			)}
		>
			<span className={c('box')} onClick={() => setIsOpen(!isOpen)}>
				<p className={c('text')}>
					{filterValue !== null
						? filterData.options[filterValue].label
						: filterData.label}
				</p>
				<Picto
					picto={type === 'classic' ? 'arrow' : 'arrows'}
					className={c('picto')}
				/>
			</span>
			<ul className={c('dropdown', { isOpen })}>
				{filterData.options.map((option, i) => (
					<li
						key={i}
						value={option.label}
						onClick={() => handleSelect(i)}
						className={c('item', { selected: filterValue === i })}
					>
						{option.picto && (
							<Picto picto={option.picto} className={c('picto')} />
						)}
						<p>{option.label}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Select;
