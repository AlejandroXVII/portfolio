import "../styles/projects.css";

const Projects = () => {
	return (
		<div className="projects-section section">
			<h1 className="tittle">
				<span className="number">01.</span>Projects
			</h1>
			<Project
				tittle="Memory game"
				type="Frontend"
				description="The game consists of 3 levels of difficulty, in which the user must click on all images exactly once. When the user clicks on an image, the cards are all randomly redistributed. If the user clicks on the same image twice, the game ends. The user can then restart the game, with their best result being saved."
				imageSrc="/caps/memory-game.png"
				stack="HTML5 CSS3 JavaScript React"
				liveLink="https://memory-game-7s0.pages.dev/"
				githubLink="https://github.com/AlejandroXVII/memory-game"
			/>
		</div>
	);
};

const Project = (prop) => {
	let text = prop.stack;
	const stackArray = text.split(" ");
	const listStack = stackArray.map((item) => <li key={item}>{item}</li>);
	return (
		<div className="project-container">
			<div className="text-container">
				<h2 className="project-tittle">{prop.tittle}</h2>
				<h3>{prop.type}</h3>
				<p>{prop.description}</p>
				<ul className="stack-list">{listStack}</ul>
				<ul className="project-links">
					<li>
						<a href={prop.liveLink}>
							Live<span>→</span>
						</a>
					</li>
					<li>
						<a href={prop.githubLink}>
							GitHub<span className="arrow">→</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="image-container">
				<img src={prop.imageSrc} alt="" />
			</div>
		</div>
	);
};

export default Projects;
