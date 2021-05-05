// class Chore {
//     constructor(name, kid_id){
//         this.name = name;
//         this.kid_id = kid_id;
//     }
// }

function displayChores(chores, element){
    const ul = document.createElement("ul")
    element.append(ul)

    for (let chore of chores){
        const choreLi = document.createElement("li")
        const choreDone = document.createElement("button")
        choreDone.innerText = "All Done!"
        choreLi.innerText = chore.name
        choreDone.addEventListener('click', (e) => deleteChore(chore.id, choreLi))
        choreLi.append(choreDone)
        ul.append(choreLi)
    }
}

function deleteChore(choreId, choreLi){
    fetch(`http://localhost:3000/chores/${choreId}`, {
        method: "DELETE"
    }).then(jsonToJS)
    .then(m => {
        choreLi.remove()
    })
}

function newChoreForm(){
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

function addChore(e){
    e.preventDefault()
}