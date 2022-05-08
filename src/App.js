import React from "react";
import CardList from "./components/CardList";
import "./App.css";
import { sites } from "./sites";

function App() {
	return (
		<div className="App">
			<CardList sites={sites} />
			<footer className="fixed courier br3 pa3 ml3 bottom-2 bg-white">
				<p className="tc">
					© 2022 <a href="https://michaelallensmith">MichaelAllenSmith.com</a>. Privacy Policy: This
					site does not track users or display ads. No pop-up windows either.
				</p>
			</footer>
		</div>
	);
}

export default App;
