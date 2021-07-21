import 'destyle.css';
import type { AppProps } from 'next/app';
import Header from '../components/organisms/Header/Header';
import '../styles/fonts.scss';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
