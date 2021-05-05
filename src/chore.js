function displayChores(chores, element){
    const ul = document.createElement("ul")
    element.append(ul)

    for (let chore of chores){
        const choreLi = document.createElement("li")
        choreLi.innerText = chore.name
        ul.append(choreLi)
    }
}