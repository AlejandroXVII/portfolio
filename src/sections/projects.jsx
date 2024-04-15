import "../styles/projects.css";

const Projects = (prop) => {
	return (
		<div className="projects-section section" ref={prop.projectsRef}>
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
			<Project
				tittle="Battleship"
				type="Frontend"
				description="Battleship game between the user and the computer using Test Driven Development. The user and the computer take turns to “fire” at the opponent’s grid. The first player to sink all of the opponent’s ships wins the game."
				imageSrc="/caps/battleship.png"
				stack="HTML5 CSS3 JavaScript Jest"
				liveLink="https://alejandroxvii.github.io/battleship/"
				githubLink="https://github.com/AlejandroXVII/battleship"
			/>
			<Project
				tittle="Shopping Cart"
				type="Frontend"
				description="Mock ecommerce site with a working shopping cart. This work fetching the data from fakestoreapi.com"
				imageSrc="/caps/shoppingcart.png"
				stack="HTML5 CSS3 JavaScript React"
				liveLink="https://4eaa6a30.shopping-card.pages.dev/home"
				githubLink="https://github.com/AlejandroXVII/shopping-card"
			/>
			<Project
				tittle="CV Generator"
				type="Frontend"
				description="This is the first React project I've made. It's a small app for creating CVs. You enter your details, and it turns them into a neat CV."
				imageSrc="/caps/cv.png"
				stack="HTML5 CSS3 JavaScript React"
				liveLink="https://e592f90f.cv-app-1bc.pages.dev/"
				githubLink="https://github.com/AlejandroXVII/cv-app"
			/>
			<Project
				tittle="Where's Waldo"
				type="Fullstack"
				description="Where's Waldo (Photo Tagging) game where you have to spot 3 characters that are hiding. Once you find them all, you can add your time to a scoreboard that shows the quickest players."
				imageSrc="/caps/where-is-whaldo.png"
				stack="HTML5 CSS3 JavaScript React"
				liveLink="https://where-is-waldo.pages.dev/"
				githubLink="https://github.com/AlejandroXVII/where-is-waldo"
			/>
			<Project
				tittle="Admin Dashboard"
				type="Frontend (layout)"
				description="Full responsive mock Admin Dashboard using CSS Grid."
				imageSrc="/caps/dashboard.png"
				stack="HTML5 CSS3"
				liveLink="https://alejandroxvii.github.io/admin-dashboard/"
				githubLink="https://github.com/AlejandroXVII/admin-dashboard"
			/>
			<Project
				tittle="Restaurant Page"
				type="Frontend (layout)"
				description="Mock Restaurant page using vanilla JavaScript to generate the entire contents of the website."
				imageSrc="/caps/restaurant.png"
				stack="HTML5 CSS3"
				liveLink="https://alejandroxvii.github.io/restaurant-page/"
				githubLink="https://github.com/AlejandroXVII/restaurant-page/"
			/>
			<Project
				tittle="Sign-up Form"
				type="Frontend (layout)"
				description="Full responsive Sign-up form."
				imageSrc="/caps/form.png"
				stack="HTML5 CSS3 JavaScript"
				liveLink="https://alejandroxvii.github.io/sign-up-form/"
				githubLink="https://github.com/AlejandroXVII/sign-up-form/"
			/>
			<Project
				tittle="Tic Tac Toe"
				type="Frontend"
				description="Vanilla JS Tic Tac Toe project, game where the objective is to be the first to get three of your own marks in a row, either horizontally, vertically, or diagonally, on a 3x3 grid. Each player takes turns placing their mark, an “X” or an “O”, in an empty square. The game ends when one player has three marks in a row or when all squares are filled, resulting in a draw if no player has achieved a row of three."
				imageSrc="/caps/tictactoe.png"
				stack="HTML5 CSS3 JavaScript"
				liveLink="https://alejandroxvii.github.io/tic-tac-toe/"
				githubLink="https://github.com/AlejandroXVII/tic-tac-toe/"
			/>
			<Project
				tittle="Todo list"
				type="Frontend"
				description="A web application in vanilla JS designed to streamline task management by organizing to-dos within distinct projects. It features local data storage for quick access and updates. "
				imageSrc="/caps/todo-list.png"
				stack="HTML5 CSS3 JavaScript"
				liveLink="https://alejandroxvii.github.io/todo-list/"
				githubLink="https://github.com/AlejandroXVII/todo-list"
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
							Live<span className="arrow">→</span>
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
