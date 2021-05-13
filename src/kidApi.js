class KidApi {

    constructor(base){
        this.baseUrl = `${base}/kids`
    }
        

    getKids(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then( json => {
            json.forEach(element => {
                const k = new Kid({id: element.id, name: element.name, chores: element.chores.name})
                k.addToDom()
                k.addToDropDown()
            })
        })
    }
}