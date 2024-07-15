import React,{useContext} from "react";
import Card from "../component/card.jsx";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

 const Characters = () => {
	const[store,actions]=useContext(Context);
	
    return (
	<div className="container-fluid">
		<h1>Characters</h1>
		{/* falta crear map para pasar el array con personajes */}
        <div>
			<Card />

		</div>
	</div>
);
}
export default Characters;