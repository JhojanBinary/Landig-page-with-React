import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron"
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>

			<div className="container">
				<Jumbotron/>

				<div className="d-flex ">
					<Card/>

					<Card/>

					<Card/>

					<Card/>


				</div>

				
			</div>
			<Footer/>


		</div>

	);
};

export default Home;
