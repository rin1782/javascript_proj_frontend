class KidApi {

    constructor(base){
        this.baseUrl = `${base}/kids`
    }
        

    getKids(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then( json => {
            json.forEach(element => {
                const k = new Kid({id: element.id, name: element.name, ...element.chores.name})
            })
                console.log(element)
                // k.addToDom()
                // k.addToDropDown()
            })
        }
    }
