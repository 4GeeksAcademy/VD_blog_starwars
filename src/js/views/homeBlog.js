import React,{useContext} from "react";
import "../../styles/home.css";
import CharacterCard from "../component/characterCard.jsx";
import { Context } from "../store/appContext.js";	
	
const HomeBlog = () => {
	
	const{store}=useContext(Context);
	
	
	console.log(store.characters)
    console.log(store.planets)
    console.log(store.vehicles)
	
    const renderCharacters = () => {
        return store.characters && store.characters.length > 0 ? (
            <div className="container-fluid card-group">
               
                <h1>Characters</h1>
                <div className="d-flex flex-row overflow-scroll " style={{width: "3000px"}}>
                    {store.characters.map((character, index) => (
                        character.url.split("/")[4] === "people" ? (
                            // <div className=" mx-2" style={{ width: '20rem' }}  key={character.name}>  
                            <CharacterCard
                                key={character.name}
                                name={character.name}
                                index={index}
                                type="people"
                                id={character.url.split("/")[5]}
                                eye={character.eye_color}
                                hair={character.hair_color}
                                gender={character.gender}
                                />
                        
                    //   </div>
                        ): null    
                ))}
                    
                </div>
            </div>
        ) : null;
    };

    const renderPlanets = () => {
        return store.planets && store.planets.length > 0 ? (
            <div className="container-fluid">
            
                <h1>Planets</h1>
                <div className="d-flex overflow-visible " style={{width: "3000px"}}>
                    {store.planets.map((planet, index) => (
                        planet.url.split("/")[4] === "planets" ? (
                            <div className=" mx-2"  key={planet.name}>
                            <CharacterCard
                                key={planet.name}
                                name={planet.name}
                                index={index}
                                type="planets"
                                id={planet.url.split("/")[5]}
                            />
                        </div>
                        ) : null
                    ))}
                </div>
            </div>
                   
        ) : null;
    };

    const renderVehicles = () => {
        return store.vehicles && store.vehicles.length > 0 ? (
            <div className="container-fluid">
            
                <h1>Vehicles</h1>
                <div className="d-flex overflow-visible " style={{width: "3000px"}}>
                    {store.vehicles.map((vehicle, index) => (
                        vehicle.url.split("/")[4] === "vehicles" ? (
                            <div className=" mx-2"  key={vehicle.name}>
                            <CharacterCard
                                key={vehicle.name}
                                name={vehicle.name}
                                index={index}
                                type="vehicles"
                                id={vehicle.url.split("/")[5]}
                            />
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
          
    ) : null;
    };

    return (
        <div className="container-fluid home-blog d-flex flex-column min-vh-100">
            {renderCharacters()}
            {renderPlanets()}
            {renderVehicles()}
        </div>
    );
};
export default HomeBlog;
