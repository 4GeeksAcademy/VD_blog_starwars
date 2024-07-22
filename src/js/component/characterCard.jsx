import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CharacterCard = ({type,name,id,eye,hair,gender}) => {
	
	const{store,actions}=useContext(Context);
	const characterFavorite=store.favorites.includes(name);
	
	const toogleFavoriteSelection = () => {
		if(characterFavorite){
			actions.deleteFavorite(name);
		}else{
			actions.addFavorite(name);
		}

	};
	const getImageUrl = (type,id) => {
        switch (type) {
            case "people":
                return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
            case "planets":
                return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
            case "vehicles":
                return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
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
	<div className="card mb-3" style={{ flex: "none", margin: "10px", maxWidth: "15rem"}}>
		<div className="row g-0">
			<div className="col-md-12">
				<img src={getImageUrl(type,id)} className="img-fluid " style={{ width: "100%", height: "200px"}} 
				onError={captureImgError} />
			</div>
			<div className=" col-md-12"style={{ height: "60%", overflow: "hidden" }}>
				<div className="card-body">
				<p>{name}</p>
				<p><strong>Gender:</strong> {gender}</p>
				<p><strong>Hair Color:</strong> {hair}</p>
				<p><strong>Eye-Color:</strong> {eye}</p>
				{/* <div className="card-body d-flex flex-column justify-content-between "> */}
					<div className="d-flex justify-content-start align-items-left">
					<Link to={`/detailsElement/${type}/${id}`} className="btn btn-outline-primary align-items-center me-5" style={{ height: "50px", width: "150px" }}>
					Learn More!
                       </Link>
					   <div style={{ border: "2px solid yellow", padding: "5px" }}>
						<button className="btn btn-link p-0 me-0" onClick={toogleFavoriteSelection}>
                        <i className={`bi ${characterFavorite ? "bi-heart-fill text-danger" : "bi-heart"}`}></i></button>
						</div>	
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	</div>
);
};
export default CharacterCard;	