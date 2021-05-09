class Chore {

    static choresAll = []

    constructor({id, name, kid_id}) {
        this.id = id
        this.name = name
        this.kid_id = kid_id
        Chore.choresAll.push(this)
    }

    addChoreToDOM(ul) {
        const choreLi = document.createElement("li")
        const choreDone = document.createElement("button")
        choreDone.innerText = "All Done!"
        choreDone.id = this.id
        choreLi.innerText = this.name
        choreDone.addEventListener("click", e => {
            this.deleteChore(choreLi)
        })
        choreLi.append(choreDone)
        ul.append(choreLi)
    }

    deleteChore(choreLi) {
        fetch(`http://localhost:3000/chores/${this.id}`, {
            method: "DELETE"
        })
        .then(jsonToJS)
        .then(m => {
            choreLi.remove()
            Chore.choresAll.filter(chore => chore.id !== this.id)
            
        })
    }

    static addChore(e) {
        e.preventDefault()
        const userInput = e.target.children[1].value
        const kidId = e.target.children[2].id
        const body = {
            chore: {
                name: userInput,
                kid_id: kidId
            }
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(body)
        }

        e.target.reset()

        fetch("http://localhost:3000/chores", options)
        .then(jsonToJS)
        .then(chore => {
            let ul = document.getElementById(`kid-${chore.kid_id}`)
            let newChore = new Chore(chore)
            newChore.addChoreToDOM(ul)
        })
    }
}
      



