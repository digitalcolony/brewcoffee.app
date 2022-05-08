import React from "react";
import Card from "./Card";

const CardList = ({ sites }) => {
	return (
		<div>
			{sites.map((site) => (
				<Card key={site.id} {...site} />
			))}
		</div>
	);
};

export default CardList;
