import classNames from 'classnames/bind';
import 'destyle.css';
import type { AppProps } from 'next/app';
import Header from '../components/organisms/Header/Header';
import TabBar from '../components/organisms/TabBar/TabBar';
import '../styles/fonts.scss';
import '../styles/global.scss';
import styles from './style.module.scss';

const c = classNames.bind(styles);
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={c('wrapper')}>
			<Header />
			<Component {...pageProps} />
			<div className={c('tabBarWrapper')}>
				<TabBar />
			</div>
		</div>
	);
}

export default MyApp;
