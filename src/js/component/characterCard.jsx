import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CharacterCard = ({type,name,index,idp,idv}) => {
	
	const{actions}=useContext(Context);
	
	const getImageUrl = (type, index) => {
        switch (type) {
            case "people":
                return `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;
            case "planets":
                return `https://starwars-visualguide.com/assets/img/planets/${idp}.jpg`;
            case "vehicles":
                return `https://starwars-visualguide.com/assets/img/vehicles/${idv}.jpg`;
            default:
                return "https://via.placeholder.com/150";
        }
    };
	
	const captureImgError = (e) => {
        e.target.src = name === "Tatooine" 
            ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" 
            : "https://img.asmedia.epimg.net/resizer/v2/MU26SQXB6NL3FIT56BKO4F57ZQ.jpg?auth=a13f41083dcb40f2faf7a113eac73783d4e9c77abee9f0ba7b1d2846385d1aed&width=1472&height=1104&smart=true";
    };

	return(
	<div className="card mb-3" style={{ flex: "none", margin: "10px", maxWidth: "18rem"}}>
		<div className="row g-0">
			<div className="col-md-12">
				<img src={getImageUrl(type,index)} className="img-fluid " style={{ width: "100%", height: "200px"}} 
				onError={captureImgError} />
			</div>
			<div className=" col-md-12">
				<div className="card-body">
				<p>{name} </p>
				<p></p>
				<div className="card-body d-flex flex-column justify-content-between ">
					<h1 className=""></h1>
					<div className="d-flex justify-content-between align-items-left">
					<Link to={`/detailsElement/${index + 1}`} className="btn btn-outline-primary p-0 me-4">
					Learn More!
                       </Link>
					    <button className="btn btn-link p-0 me-3"  onClick={() => actions.addFavorite(name)}>
                        <i className="bi bi-heart"></i></button>
						</div>	
					</div>
					<h6 className="card-subtitle mb-2 text-muted"></h6>
					<p className="card-text"></p>
					<p className="card-text"></p>

				</div>
			</div>
		</div>
	</div>
);
};
export default CharacterCard;	