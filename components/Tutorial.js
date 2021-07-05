import Link from "next/link";

export default function Post({ tutorial }) {
	return (
		
			<aside>
				<Link href={`/${tutorial.slug}`}>
					<a href="">
						<h3>{tutorial.frontmatter.title}</h3>
					</a>
				</Link>
			</aside>

	);
}
