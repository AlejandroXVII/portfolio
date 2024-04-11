import "../styles/hero.css";

const Hero = (prop) => {
	return (
		<div className="hero-section section">
			<Content contactRef={prop.contactRef} />
		</div>
	);
};

const Content = (prop) => {
	const onButtonClick = () => {
		const pdfUrl = "../assets/cv.pdf";
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "cv.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<div className="hero-content">
			<div>
				<h1>
					Hi, I&apos;m <span>M. Alejandro Hernandez</span>
				</h1>
				<h1>
					A <span>Fullstack</span> web Developer
				</h1>
			</div>

			<p>
				I&apos;m a full stack web developer with expiernce as a grafic
				designer, I have been lerning about programing cince 2011, a
				natural problem solver, and apasonet to keep inpruving my skills
			</p>
			<div className="call-to-action">
				<button
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({
							top: prop.contactRef.current.offsetTop,
							behavior: "smooth",
						});
					}}
				>
					Contact me
				</button>
				<button onClick={onButtonClick}>Download CV</button>
			</div>
			<ul className="links">
				<li>
					<a href="">m.alejandro.xvii@gmail.com</a>
				</li>
				<ul>
					<li>
						<a href="https://github.com/AlejandroXVII">Github</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/manuel-alejandro-hernandez-211595193/">
							LinkedIn
						</a>
					</li>
					<li>
						<a href="mailto:m.alejandro.xvii@gmail.com">Email</a>
					</li>
				</ul>
			</ul>
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
};

export default Hero;
