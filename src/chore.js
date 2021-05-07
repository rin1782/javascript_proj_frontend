class Chore {

    constructor(chore) {
        this.id = chore.id
        this.name = chore.name
        this.kid_id = chore.kid_id
    }

    static newChoreForm(){
        const kidsDiv = document.getElementById("allKids")
        const choreForm = `
            <form id="choreForm">
                <label>Add a Chore:</label>
                <input id="choreName"/>
                <input type="submit" value="Add Chore" />
            </form>
        `
        kidsDiv.innerHTML += choreForm
        document.getElementById("choreForm").addEventListener("submit", addChore)
    }

    // displayChores(element) {
    //     const ul = document.createElement("ul")
    //     element.append(ul)
    //     for (let chore of chores) {
    //         addChoreToDOM()
    //     }
    // }

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
        })
    }

    addChore(e){
        e.preventDefault
    }
}


