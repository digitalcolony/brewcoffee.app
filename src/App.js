import React from "react";
import CardList from "./components/CardList";
import { sites } from "./sites";

function App() {
	return (
		<div className="App">
			<CardList sites={sites} />
			<footer className="courier br3 pa2 ml3 mt4 mr3 mb3 bg-white">
				<p className="tc">
					© 2022 <a href="https://michaelallensmith">MichaelAllenSmith.com</a>. Privacy Policy: This
					site does not track users or display ads. No pop-up windows either. The code for this site
					is freely available on{" "}
					<a href="https://github.com/digitalcolony/brewcoffee.app">GitHub</a>. Use however you
					like.
				</p>
			</footer>
		</div>
	);
}

export default App;
