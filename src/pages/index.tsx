import classNames from 'classnames/bind';
import styles from './style.module.scss';

const c = classNames.bind(styles);

export default function Home() {
	return (
		<main className={c('wrapper')}>
			<h1>Hello world</h1>
		</main>
	);
}
