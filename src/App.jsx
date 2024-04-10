import Hero from "./sections/hero";
import Projects from "./sections/projects";
import { useState, useEffect, useCallback } from "react";
const App = () => {
	const [y, setY] = useState(window.scrollY);

	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				console.log("scrolling up");
			} else if (y < window.scrollY) {
				console.log("scrolling down");
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
			<Hero />
			<Projects />
		</>
	);
};

export default App;
