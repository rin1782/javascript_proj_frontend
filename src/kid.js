const kidsURL = "http://localhost:3000/kids"


class Kid {

    static kidsAll = []

    constructor({name, id, chores}) {
        this.name = name
        this.id = id
        chores.forEach(chore => new Chore(chore))
        Kid.kidsAll.push(this)
        
    }

    get chores() {
        return Chore.choresAll.filter(chore => chore.kid_id === this.id)
    }

    displayChores(element) {
        const ul = document.createElement("ul")
        ul.id = `kid-${this.id}`
        element.append(ul)
        for (let chore of this.chores) {
           chore.addChoreToDOM(ul)
        }
    }

    
    appendKid() {
        const kidsDiv = document.getElementById("allKids")
        // const li = document.createElement("li")
        const kidName = document.createElement("h2")
        const ul = document.createElement("ul")
        kidName.innerText = this.name
        kidName.id = `allKids-name-${this.id}`
        // li.innerText = "Click here for this week's chores!"
        kidName.addEventListener("click", this.allKidsShow.bind(this))
        kidsDiv.append(kidName)
        // kidName.append(li)
        kidsDiv.append(ul)
        this.displayChores(kidName)
    }

    allKidsShow() {
        const newKids = document.getElementById("kidsContainer")
        const homeBtn = document.createElement("button")
        const appendKids = document.getElementById("allKids")
        newKids.children[1].innerHTML = " "
        newKids.children[0].remove()
        homeBtn.addEventListener("click", refreshPage)
        homeBtn.innerText = "Back to all kid's chores"
        newKids.append(homeBtn)
        newKids.append(appendKids)
        this.appendKid()
        this.newChoreForm()
    }

    newChoreForm(){
        const kidsDiv = document.getElementById("kidsContainer")
        const choreForm = `
            <form id="choreForm">
                <label>Add a Chore:</label>
                <input id="choreName"/>
                <input type="hidden" id="${this.id}"/>
                <input type="submit" value="Add Chore" />
            </form>
        `
        kidsDiv.innerHTML += choreForm
        document.getElementById("choreForm").addEventListener("submit", Chore.addChore.bind(this))
    }

    static allKids(){
        fetch(kidsURL)
        .then(jsonToJS)
        .then(this.displayKids)
    }
    
    static displayKids(kids){
        for (let kid of kids){
            let newKid = new Kid(kid)
            newKid.appendKid()
        }
    }

    static refreshDisplayKids() {
        for (let kid of Kid.kidsAll) {
            kid.appendKid()
        
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