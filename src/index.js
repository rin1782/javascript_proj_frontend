newKidForm = document.getElementById("kidForm")
newKidForm.addEventListener("submit", Kid.newKid)
Kid.allKids()

function jsonToJS(resp){
    return resp.json()
}


function refreshPage() {
    document.getElementById("kidsContainer").innerHTML = `
        <form id="kidForm">
            <label>Add a Child:</label>
            <input type="text" placeholder="name">
            <input type="submit" value="Add Child">
        </form>
        <div id="allKids"></div>
    `

    Kid.refreshDisplayKids()

    
}