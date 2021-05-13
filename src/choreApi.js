class ChoreApi {

    constructor(base){
        this.baseUrl = `${base}/chores`
    }
        

    getChores(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then( json => {
            console.log(json)
            json.forEach(element => {
                const c = new Chore({id: element.id, name: element.name})
                c.attachToDom()
            })
        })
    }

    createChore(){
        const choreInfo = {
            name: newChoreInput.value,
       }
    
       const configObj = {
           method: 'POST',
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(choreInfo)
       }
      
       // pessimistic rendering 
       fetch(this.baseUrl, configObj)
        .then(r => r.json())
        .then(json => {
            // renderItem(json.data)
            const c = new Chore({id: json.data.id, ...json.data.attributes})
            c.attachToDom()
        })
    }

    sendPatch = (chore) => {
        let {name} = chore
        const choreInfo = {
            name
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(choreInfo)
        }
       
        fetch(`${this.baseUrl}/${chore.id}`, configObj)
        .then(r => r.json())
        .then(json => {
            // we are optomistically rendering here since we don't use the json response
            chore.render()
        })
    }

    deleteChore = (id) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        
        fetch(`${this.baseURL}/${id}`, configObj)
            .then(r => r.json())
            .then(json => alert(json.message))
    }
}