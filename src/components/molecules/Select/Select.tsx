import classNames from 'classnames/bind';
import React from 'react';
import styles from './Select.module.scss';

const c = classNames.bind(styles);

interface SelectProps {
	className?: string;
	options: string[];
	label: string;
}

function Select({ className, options, label }: SelectProps) {
	return (
		<select className={c('wrapper', className)}>
			<option value="">{label}</option>
			{options.map((option, i) => (
				<option key={i} value={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default Select;
