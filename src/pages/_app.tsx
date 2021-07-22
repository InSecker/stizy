import classNames from 'classnames/bind';
import 'destyle.css';
import type { AppProps } from 'next/app';
import Div100vh from 'react-div-100vh';
import Header from '../components/organisms/Header/Header';
import Navigation from '../components/organisms/Navigation/Navigation';
import '../styles/fonts.scss';
import '../styles/global.scss';
import styles from './main.module.scss';

const c = classNames.bind(styles);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={c('wrapper')}>
			<Header className={c('header')} />
			<main className={c('page')}>
				<Component {...pageProps} />
			</main>
			<footer className={c('footer')}>
				<Div100vh className={c('footer-container')}>
					<Navigation className={c('navigation')} />
				</Div100vh>
			</footer>
		</div>
	);
}

export default MyApp;
