import logo from './logo.svg';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import FadeIn from 'react-fade-in';
import Work from './Components/Work/Work';
import Profile from './profile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	document.title = 'Utkarsh Pant';
	return (

		<div className="App">
			<FadeIn>
				<Header />
				<a id="about" ><About /></a>
				<a id="work">
					
					<h1 className="SectionHeader" id="workEx">
						Work Experience &amp; Education
					</h1>

					{
						Profile.work.map(role => (
							<Work role={role} />
						))
					}
					
					{/* <Work role={{
						designation: "Functional Analyst - BTG",
						duration: "Nov 2020 - Present",
						organisation: "HDFC Bank",
						description: "In my current role, I help implement new vendor-driven technology initiatives for the Bank, starting from requirements gathering, all the way to coordinating testing and deployment. Further, I also help support these applications in everyday functioning.",
						tags: ['SQL', 'Oracle FlexCube', 'REST APIs'],
						link: {
							target: "https://www.hdfcbank.com",
							text: "www.hdfcbank.com"
						}
					}} />
					<Work role={{
						designation: "Student (B.Tech. CE)",
						duration: "2016 - 2020",
						organisation: "NMIMS Mumbai",
						link: {
							target: "https://www.engineering.nmims.edu",
							text: 'www.engineering.nmims.edu'
						},
						description: "During my college career I worked on a variety of projects across domains including healthcare, data analysis, web development and native application development.",
						tags: ['Data Structures', 'Algorithms', 'Computer Networks', 'Soft Computing', 'Human Computer Interface', 'Research Methodology'],
					}} /> */}
					
					<h1 className="SectionHeader" id="projects">
						Projects
					</h1>

					{
						Profile.projects.map(project => (
							<Project project={project} />
						))
					}
					
					{/* <Project project={{
						year: 2021,
						name: "The Telemetry Blog",
						link: "https://www.telemetryblog.in",
						shortDesc: "A minimalist blog made to focus on a distraction-free reading and writing experience.",
						longDesc: "The Telemetry Blog is a full-stack project, where I built the back-end using Node.js/Express and the front-end on React. The project is deployed on Heroku and Netlify.",
						tags: ['Node.js', 'Express', 'MongoDB', 'React'],
						counter: "Blog + Project"
					}} />
					<Project project={{
						year: 2019,
						name: "Music Managed",
						link: "https://www.github.com/aadityanaik/musicmanaged",
						shortDesc: "A simple audio-library meant to allow easy management of music - and to stream it anywhere we go.",
						longDesc: "Music Managed is a Node.js/Express based music streaming/library management platform with a REST API, built for the Fundamentals of Web Technology course project.",
						tags: ['Node.js', 'Express', 'MongoDB', 'JQuery', 'Bootstrap'],
						counter: "Project"
					}} />
					<Project project={{
						year: "2019 - 2020",
						name: "Gilbreth",
						link: "https://github.com/gilbreth-flow/gilbreth",
						shortDesc: "Gilbreth is a system for Extraction of Flowchart Features using Deep Learning. Achieved as high as 99% accuracy in detecting features correctly.",
						longDesc: "The aim of the system is to be a no-code tool for developing solutions to problems, while focusing only on the logical expression of the solution. The output generated by Gilbreth is an Abstract Syntax Tree that may be parsed depending on the end goal.",
						tags: ['Python', 'YOLOv3', 'Darknet', 'Google Cloud Vision API'],
						counter: "Final Year Project"
					}} />
					<Project project={{
						year: "2020",
						name: "Analysing MovieLens",
						link: "https://drive.google.com/file/d/13IBjPECk0_b52lBeaGshQKAmeyc6c9wv/view?usp=sharing",
						shortDesc: "Analysed the MovieLens dataset to visualise the correlation between viewer demographic and movie ratings.",
						longDesc: "We predicted the favourite genre of a viewer using 100k observations and applying Decision Trees, Support Vector Machines and Logistic Regression to achieve an accuracy of 99.8%, 99.92% and 87.24% respectively.",
						tags: ['Python', 'Pandas', 'scikit-learn', 'Seaborn + Matplotlib'],
						counter: "Data Analysis Project"
					}} />
					<Project project={{
						year: "until March 2021",
						name: "Writing on Medium",
						link: "https://www.medium.com/@Utkarsh.pant",
						shortDesc: "A blog about programming where I write about my current projects and learnings.",
						longDesc: "Some of my articles have been featured in prominent publications like Analytics Vidhya. Being able to write with more control on the reading/writing experience was one of my motivations for the Telemetry Blog!",
						tags: ['Software Development', 'C++', 'Web Development', 'Python'],
						counter: "Previous Blog"
					}} /> */}
				</a>
			</FadeIn>
		</div>
	);
}

export default App;
