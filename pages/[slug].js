import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Head from "next/head";

export default function TutorialPage({ 
        frontmatter: { title, date, header_image }, 
        slug, 
        content,
     }) {
	return (<>
		<Head>
				<title>BrewCoffee.app - {title}</title>
				<meta
					name="description"
					content={"Learn how to brew " + title}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
        <Link href="/">
            <a>Go Back</a>
        </Link>
		<p></p>
        <article>
			<aside>
            <h1>{title}</h1>
            {/* <img src={header_image} alt="" /> */}
            <div>
               <div dangerouslySetInnerHTML={{__html: marked(content)}}></div> 
            </div>
			</aside>
        </article>

        </>);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("tutorials"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(path.join("tutorials", `${slug}.md`), "utf8");

	const { data: frontmatter, content } = matter(markdownWithMeta);
	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}
