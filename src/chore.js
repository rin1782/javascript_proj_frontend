const newChoreForm = document.getElementById("choreForm")

function displayChores(chores, element){
    const ul = document.createElement("ul")
    element.append(ul)

    for (let chore of chores) {
        const choreLi = document.createElement("li")
        choreLi.innerText = chore.name
        ul.append(choreLi)
    }
}

function addChore(e){
    e.preventDefault()
    const userInput = e.target.children[1].value
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({kid: {name: userInput}})
    }
    fetch("http://localhost:3000/kids", options)
}
