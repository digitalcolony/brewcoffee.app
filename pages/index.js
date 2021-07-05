import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Tutorial from "../components/tutorial";


export default function Home({ tutorials }) {
	return (
		<div>
			<Head>
				<title>BrewCoffee.app - Coffee Brewing Tutorials</title>
				<meta
					name="description"
					content="Concise fast-loading coffee tutorials. No ads. No tracking."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section>
				{tutorials.map((tutorial, index) => (
					<Tutorial key={index} tutorial={tutorial} />
				))}
			</section>
		</div>
	);
}

export async function getStaticProps() {
	// Get files from the tutorials directory
	const files = fs.readdirSync(path.join("tutorials"));

	// Create a slug and frontmatter from tutorials
	const tutorials = files.map((filename) => {
		const slug = filename.replace(".md", "");

		// Get frontmatter from file
		const markdownWithMeta = fs.readFileSync(path.join("tutorials", filename), "utf-8");

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			tutorials,
		},
	};
}
