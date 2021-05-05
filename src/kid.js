function allKids(){
    fetch("http://localhost:3000/kids")
    .then(resp => resp.json())
    .then(displayKids)
}

function displayKids(kids){
    const kidsDiv = document.getElementById("kidsContainer")
    for (let kid of kids){
        const li = document.createElement("li")
        li.innerText = kid.name
        kidsDiv.append(li)
    }
}