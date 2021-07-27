import classNames from 'classnames/bind';
import 'destyle.css';
import type { AppProps } from 'next/app';
import Header from '../components/organisms/Header/Header';
import Navigation from '../components/organisms/Navigation/Navigation';
import StoreProvider from '../store';
import '../styles/fonts.scss';
import '../styles/global.scss';
import styles from './main.module.scss';

const c = classNames.bind(styles);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<StoreProvider>
			<div className={c('wrapper')}>
				<Header className={c('header')} />
				<main className={c('page')}>
					<Component {...pageProps} />
				</main>
				<footer className={c('footer')}>
					<Navigation className={c('navigation')} />
				</footer>
			</div>
		</StoreProvider>
	);
}

export default MyApp;
