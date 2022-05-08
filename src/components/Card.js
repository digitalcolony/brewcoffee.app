import React from "react";

const Card = ({ name, url, description, image }) => {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<div className="bg-washed-yellow dib br3 pa3 ma3 grow bw2 shadow-5 mw7 h5">
				<h2>{name}</h2>
				<p>{description}</p>
				<img src={`https://robohash.org/${url}?200x200`} alt={name} />
			</div>
		</a>
	);
};

export default Card;
