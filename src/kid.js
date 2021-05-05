const endPoint = "http://localhost:3000/kids"
const newKidForm = document.getElementById("kidForm")

function allKids(){
    fetch(endPoint)
    .then(resp => resp.json())
    .then(displayKids)
}

function displayKids(kids){
    const kidsDiv = document.getElementById("kidsContainer")
    for (let kid of kids){
        const li = document.createElement("li")
        li.innerText = kid.name
        kidsDiv.append(li)
        displayChores(kid.chores, li)
    }
}

function newKid(e){
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
    fetch(endPoint, options)
    .then(resp => resp.json())
    .then(kid => console.log(kid))

}