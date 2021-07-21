import classNames from 'classnames/bind';
import React from 'react';
import styles from './Profile.module.scss';

const c = classNames.bind(styles);

interface ProfileProps {
	className?: string;
}

function Profile({ className }: ProfileProps) {
	return (
		<div className={c('wrapper', className)}>
			<p>Profile</p>
		</div>
	);
}

export default Profile;
