import Hero from "./sections/hero";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import ContactMe from "./sections/contact-me";
import { useState, useEffect, useCallback, useRef } from "react";
import cv from "./assets/cv.pdf";

const App = () => {
	const [y, setY] = useState(window.scrollY);
	const [showMenu, setShowMenu] = useState(true);
	const projectsRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const footerRef = useRef(null);

	//Function that help to hide and show the menu onScroll
	const handleNavigation = useCallback(
		(e) => {
			if (e.currentTarget.scrollY === 0) {
				footerRef.current.className = "links show";
			} else {
				footerRef.current.className = "links hide";
			}

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
			<Header
				showMenu={showMenu}
				skillsRef={skillsRef}
				contactRef={contactRef}
				projectsRef={projectsRef}
				aboutRef={aboutRef}
			/>
			<Hero
				contactRef={contactRef}
				aboutRef={aboutRef}
				footerRef={footerRef}
			/>
			<Projects projectsRef={projectsRef} />
			<Skills skillsRef={skillsRef} />
			<ContactMe contactRef={contactRef} />
		</>
	);
};

const Header = (prop) => {
	return (
		<div className={prop.showMenu ? "header show" : "header hide"}>
			<ul>
				<li>
					<a
						href=""
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({
								top: prop.aboutRef.current.offsetTop,
								behavior: "smooth",
							});
						}}
					>
						About
					</a>
				</li>
				<li>
					<a
						href=""
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({
								top: prop.projectsRef.current.offsetTop,
								behavior: "smooth",
							});
						}}
					>
						Projects
					</a>
				</li>

				<li>
					<a
						href=""
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({
								top: prop.skillsRef.current.offsetTop,
								behavior: "smooth",
							});
						}}
					>
						Skills
					</a>
				</li>
				<li>
					<a
						href=""
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({
								top: prop.contactRef.current.offsetTop,
								behavior: "smooth",
							});
						}}
					>
						Contact
					</a>
				</li>
				<li>
					<a href={cv} download="cv">
						Resume
					</a>
				</li>
			</ul>
		</div>
	);
};

export default App;
