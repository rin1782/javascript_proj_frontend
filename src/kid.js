const endPoint = "http://localhost:3000/kids"
const newKidForm = document.getElementById("kidForm")

// class Kid {
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }
    
// }

// let tiff = new Kid("Tiff", 9)

function allKids(){
    fetch(endPoint)
    .then(jsonToJS)
    .then(displayKids)
}

function displayKids(kids){
    for (let kid of kids){
        appendKid(kid)
    }
}

function appendKid(kid){
    const kidsDiv = document.getElementById("allKids")
    const kidName = document.createElement("h2")
    kidName.innerText = kid.name
    kidName.addEventListener("click", (e) => allKidsShow(kid))
    kidsDiv.append(kidName)
    displayChores(kid.chores, kidName)
}

function allKidsShow(kid){
    const newKids = document.getElementById("kidsContainer")
    newKids.children[1].innerHTML = " "
    newKids.children[0].remove()
    appendKid(kid)
    newChoreForm()
    
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

    e.target.reset()

    fetch(endPoint, options)
    .then(jsonToJS)
    .then(appendKid)

}