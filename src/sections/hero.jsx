import "../styles/hero.css";

const Hero = () => {
	return (
		<div className="hero-section">
			<Header />
			<Content />
		</div>
	);
};

const Header = () => {
	return (
		<div className="header">
			<img src="/ale-dev-logo.svg" alt="" />
			<ul>
				<li>
					<a href="">About</a>
				</li>
				<li>
					<a href="">Projects</a>
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

const Content = () => {
	return (
		<div className="hero-content">
			<div>
				<h1>
					Hi, I'm <span>M. Alejandro Hernandez</span>
				</h1>
				<h1>
					A <span>Fullstack</span> web Developer
				</h1>
			</div>
		</div>
	);
};

export default Hero;
