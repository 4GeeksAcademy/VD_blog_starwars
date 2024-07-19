import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Navbar = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
				<img src="" alt="" 
				// style={{ width: "30px", height: "30px", marginRight: "10px" }}
				/>
			</Link>
			<div className="ml-auto">
				
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorite
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((characterFavorite, index) => (
                            <li key={index}><div className="dropdown-item">{characterFavorite}
							<i className="bi bi-trash3-fill ms-5 ps-4" onClick={() => actions.deleteFavorite(characterFavorite)} ></i>
							
							</div>
							</li>
						))}
						</ul>
					</div>
				
			</div>
		</nav>
	);
};
export default Navbar;