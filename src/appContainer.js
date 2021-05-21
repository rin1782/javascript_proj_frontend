class appContainer {
  
  
    kids = []
    chores = []
    baseUrl = "http://localhost:3000/"
    kidChoreAdapter = {}

    getKids(){
        // make fetch request to /kids
        fetch(this.baseUrl + '/kids')
        .then(resp => resp.json())
        .then(kids => {
            kids.data.forEach(kid => {
                const newKid = new Kid(kid.id, kid.attributes.name)
                return newKid.name
            })
            this.renderKids()
        })
        .catch(err => alert(err))
    }
    
    renderKids() {
        debugger
        //create DOM nodes and make clickable to new page
        //onclick, call getChores
    }

}