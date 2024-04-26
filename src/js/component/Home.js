import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron"
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component
const Home = () => {

	let target = [
		{ img: "https://th.bing.com/th/id/OIP._xe6q606bS0YchYtRynVGQAAAA?rs=1&pid=ImgDetMain", title: "Alvin", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
		{ img: "https://th.bing.com/th/id/R.dc7f053872eba93e6f90d651463ef936?rik=Bgo0ct7Z%2bw3f1g&riu=http%3a%2f%2frvideos1.memedroid.com%2fvideos%2fUPLOADED493%2f60b450a457293.jpeg&ehk=0pbwwAe%2bIvTggG4EaZPzjUfIPuvLtPZ0Cs7vcfkiZuw%3d&risl=&pid=ImgRaw&r=0", title: "Theodore", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
		{ img: "https://yt3.ggpht.com/a-/AAuE7mA8vJtdBz1DRlUsSfHMuoveb58gX9-V0LQHJQ=s900-mo-c-c0xffffffff-rj-k-no", title: "Simón", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
		{ img: "https://i.pinimg.com/originals/f4/be/82/f4be82dedead870ce9692c454eeb766f.jpg", title: "Eleanor", description: "Some quick example text to build on the card title and make up the bulk of the card's content." }
	]

	return (
		<div className="e">
			<Navbar />

			<div className="container">
				<Jumbotron />

				<div className="row" col-sm-12 col-md-6 col-lg-3>
						{target.map((value, index, array) => {
							return <Card key={index} img={value.img} title={value.title} description={value.description} />
						})}
				</div>


			</div>
			
			<Footer />


		</div>

	);
};

export default Home;
