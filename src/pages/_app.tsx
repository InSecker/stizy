import classNames from 'classnames/bind';
import 'destyle.css';
import type { AppProps } from 'next/app';
import TabBar from '../components/organisms/TabBar/TabBar';
import '../styles/global.scss';
import styles from './style.module.scss';

const c = classNames.bind(styles);
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={c('wrapper')}>
			<Component {...pageProps} />
			<div className={c('tabBarWrapper')}>
				<TabBar />
			</div>
		</div>
	);
}

export default MyApp;
