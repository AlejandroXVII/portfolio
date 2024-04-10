import EndSectionIcon from "../assets/end-section-icon";
import "../styles/hero.css";

const Hero = () => {
	return (
		<div className="hero-section section">
			<Header />
			<Content />
		</div>
	);
};

const Header = () => {
	return (
		<div className="header">
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

const Content = () => {
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
				<button>Contact me</button>
				<button>Download CV</button>
			</div>
			<ul className="links">
				<li>
					<a href="">Github</a>
				</li>
				<li>
					<a href="">LinkedIn</a>
				</li>
				<li>
					<a href="">Email</a>
				</li>
			</ul>
			<EndSectionIcon />
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
