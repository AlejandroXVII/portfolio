import Hero from "./sections/hero";
import Projects from "./sections/projects";
import { useState, useEffect, useCallback } from "react";
const App = () => {
	const [y, setY] = useState(window.scrollY);
	const [showMenu, setShowMenu] = useState(true);

	//Function that help to hide and show the menu onScroll
	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				setShowMenu(true);
			} else if (y < window.scrollY) {
				setShowMenu(false);
			}
			setY(window.scrollY);
		},
		[y]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);
	return (
		<>
			<Header showMenu={showMenu} />
			<Hero />
			<Projects />
		</>
	);
};

const Header = (prop) => {
	return (
		<div className={prop.showMenu ? "header show" : "header hide"}>
			<ul>
				<li>
					<a href="">Projects</a>
				</li>
				<li>
					<a href="">About</a>
				</li>
				<li>
					<a href="">Skills</a>
				</li>
				<li>
					<a href="">Contact</a>
				</li>
				<li>
					<a href="">Resume</a>
				</li>
			</ul>
		</div>
	);
};

export default App;
