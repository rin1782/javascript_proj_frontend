const kidsURL = "http://localhost:3000/kids"
const newKidForm = document.getElementById("kidForm")

class Kid {

    constructor(kid) {
        this.name = kid.name
        this.id = kid.id
        this.chores = kid.chores
    }

    
    appendKid(){

        const kidsDiv = document.getElementById("allKids")
        const kidName = document.createElement("h2")
        kidName.innerText = this.name
        kidName.addEventListener("click", this.allKidsShow.bind(this))
        kidsDiv.append(kidName)
        displayChores(this.chores, kidName)
    }

    allKidsShow() {
    

        const newKids = document.getElementById("kidsContainer")
        newKids.children[1].innerHTML = " "
        newKids.children[0].remove()
        this.appendKid()
        newChoreForm()
        
    }

    static allKids(){
        fetch(kidsURL)
        .then(jsonToJS)
        .then(Kid.displayKids)
    }
    
    static displayKids(kids){
        for (let kid of kids){
            let newKid = new Kid(kid)
            newKid.appendKid()
        }
    }

    static newKid(e){

        e.preventDefault()
    
        const userInput = e.target.children[1].value
        const body = {
            kid: {
                name: userInput
            }
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }

        e.target.reset()

        fetch(kidsURL, options)
        .then(jsonToJS)
        .then(kid => {
            let newKid = new Kid(kid)
            newKid.appendKid(kid)
        })
    }
}