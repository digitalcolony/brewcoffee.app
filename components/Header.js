import Link from "next/link";

export default function Header() {
	return (
		<header>
			<Link href="/" passHref>
				<h2>BrewCoffee.app</h2>
			</Link>
            <mark>No ads. No trackers. No pop-ups. Just coffee tutorials!</mark>
		</header>
	);
}
