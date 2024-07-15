import React,{useContext} from "react";
// import { Context } from "../store/appContext";

const Card = () => {
	// const { actions} = useContext(Context)


	return(
	<div className="card mb-3" style={{ maxWidth: "540px" }}>
		<div className="row g-0">
			<div className="col-md-4">
				<img src="https://picsum.photos/id/237/180/250" className="img-fluid rounded-circle" />
			</div>
			<div className=" col-md-8">
				<div className="card-body">
				<div className="d-flex justify-content-between align-items-center">
					<h5 className="card-title"></h5>
					<div className="ms-auto">
                        <button className="btn btn-link p-0 me-2">
                            <i className="fas fa-pencil-alt"></i>
                        </button>
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
export default Card;