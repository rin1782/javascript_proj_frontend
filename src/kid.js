const kidsUrl = "http://localhost:3000/kids"

function allKids(){
    fetch(kidsUrl)
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