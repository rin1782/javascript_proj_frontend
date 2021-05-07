const kidsURL = "http://localhost:3000/kids"
const newKidForm = document.getElementById("kidForm")

class Kid {

    constructor(kid) {
        this.name = kid.name
        this.id = kid.id
        this.chores = kid.chores.map(chore => new Chore(chore))
    }

    displayChores(element) {
        const ul = document.createElement("ul")
        element.append(ul)
        for (let chore of this.chores) {
           chore.addChoreToDOM(ul)
        }
    }

    
    appendKid() {
        const kidsDiv = document.getElementById("allKids")
        const li = document.createElement("li")
        const kidName = document.createElement("h2")
        kidName.innerText = this.name
        li.addEventListener("click", this.allKidsShow.bind(this))
        kidsDiv.append(kidName)
        kidName.append(li)
        this.displayChores(kidName)
    }

    allKidsShow() {
        const newKids = document.getElementById("kidsContainer")
        const appendKids = document.getElementById("allKids")
        newKids.children[1].innerHTML = " "
        newKids.children[0].remove()
        this.appendKid()
        Chore.newChoreForm()
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