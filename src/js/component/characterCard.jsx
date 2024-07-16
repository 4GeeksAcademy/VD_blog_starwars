import React,{} from "react";
// import { Context } from "../store/appContext";

const CharacterCard = ({type,name,index,idp,idv}) => {
	
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

	return(
	<div className="card mb-3" style={{ maxWidth: "400px"}}>
		<div className="row g-0">
			<div className="col-md-12">
				<img src={getImageUrl(type,index)} className="img-fluid " style={{width: "100%", height: "200px"}} />
			</div>
			<div className=" col-md-12">
				<div className="card-body">
				<p>{name} </p>
				<p></p>
				<div className="d-flex justify-content-between align-items-center">
					<h1 className=""></h1>
					<div className="ms-auto">
                        <button className="btn btn-link p-0 me-2">
                            <i className="fas fa-pencil-alt"></i>
                        LEARN MORE!</button>
                        <button className="btn btn-link p-0">
                            <i className="fas fa-trash-alt"></i>
                        </button>
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