const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			results: []
		},
		actions: {
			
			getCharacters:() => {
				fetch('https://swapi.dev/api/people', {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
			
				})
				.then((response) => {
					console.log('Response status:', response.status); 
					if (response.status == 404) {
						// getActions().crearAgenda()
					}
					return response.json();
				})
					.then((data) => {
						console.log('Data from API:', data);
						setStore({results:data.results});		
						
					})
					.catch((error) => console.log('Error:', error));
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
