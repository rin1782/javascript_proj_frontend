class Chore {
    constructor(name, kid_id){
        this.name = name;
        this.kid_id = kid_id;
    }
}

function displayChores(chores, element){
    const ul = document.createElement("ul")
    element.append(ul)

    for (let chore of chores){
        const choreLi = document.createElement("li")
        const choreDone = document.createElement("button")
        choreDone.innerText = "All Done!"
        choreLi.innerText = chore.name
        choreDone.addEventListener('click', (e) => deleteChore(chore.id))
        choreLi.append(choreDone)
        ul.append(choreLi)
    }
}

function deleteChore(choreId){
    fetch(`http://localhost:3000/chores/${choreId}`, {
        method: "DELETE"
    })
}