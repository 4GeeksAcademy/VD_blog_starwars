const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites:[],
			element: {}
		},
		actions: {
			
			getCharacter: async() => {
			  try{
			  	
				let response= await fetch('https://swapi.dev/api/people') 
				let data = await response.json()	
				setStore({characters:data.results})	
				return true;
			  
				}catch(error){
				console.log(error);
				return false;
			  }
			},
			  getPlanet: async() => {
				try{
					
				  let response= await fetch('https://swapi.dev/api/planets') 
				  let data = await response.json()	
				  setStore({planets:data.results})	
				  return true;
				
				  }catch(error){
				  console.log(error);
				  return false;
				}
			},
				getVehicle: async() => {
					try{
						
					  let response= await fetch('https://swapi.dev/api/vehicles') 
					  let data = await response.json()	
					  setStore({vehicles:data.results})	
					  return true;
					
					  }catch(error){
					  console.log(error);
					  return false;
					}
			},
			
			getElement: async (id) =>	{
				try{
						
					let response= await fetch(`https://swapi.dev/api/people/${id}`)
					let data = await response.json()	
					setStore({ element:data })	
					return true;
				  
					}catch(error){
					console.log(error);
					return false;
				  }
			},
			
			addFavorite: (name) => {
                const store = getStore();
                if (!store.favorites.includes(name)) {
                    setStore({ favorites: store.favorites.concat(name) });
                }
            },
			deleteFavorite: (characterFavorite) => {
				const store = getStore();
				setStore({favorites: store.favorites.filter(item => item !== characterFavorite)
				});
			},
			
			
				// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
