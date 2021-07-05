import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/mvp.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer/>
		</>
	);
}

export default MyApp;
