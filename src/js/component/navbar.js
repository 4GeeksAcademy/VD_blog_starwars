import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
				<img src="" alt="Star Wars Icon" style={{ width: "30px", height: "30px", marginRight: "10px" }}
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/home_Blog">
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorite
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li><a class="dropdown-item" href="#">Action</a></li>
							
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;