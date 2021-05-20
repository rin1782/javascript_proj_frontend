class appContainer {
  
  
    kids = []
    chores = []
    baseUrl = "http://localhost:3000/"
    kidChoreAdapter = {}

    getKids(){
        // make fetch request to /kids
        fetch(this.baseUrl + '/kids')
        .then(resp => resp.json())
        .then(data => console.log(data))
        // call render kids
        .catch(err => alert(err))
    }
    
    renderKids() {
        //create DOM nodes and make clickable to new page
        //onclick, call getChores
    }

   
}