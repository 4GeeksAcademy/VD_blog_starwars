import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";


const DetailsElement = () => {
	const {id}= useParams();
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
	actions.getElement(id);
	},[]);
	
	console.log(store.element)
	return (
		<div className="container-fluid">

			<div className="card mb-3" style={{maxWidth: "540px"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." className="img-fluid rounded-start" alt="" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title"></h5>
							<p className="card-text">{store.element.name}</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>





		</div>
	)
};
export default DetailsElement;
