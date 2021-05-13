class Chore{

    static all = []
    static choreContainer = document.getElementById('choresList')

    constructor({id, name, kid_id}){
        // setting the properties of each item
        this.name = name 
        this.id = id 
        this.kid_id = kid_id

        // setup the html element that will contain the item
        this.element = document.createElement('li')
        this.element.dataset["id"] = id
        this.element.id = `chore-${id}`
        
        this.element.addEventListener('click', this.handleLiClick)

        // remembering all the items 
        Chore.all.push(this)
    }

    // arrow function b/c it is used as a callback in an event listener
    handleLiClick = (e) => {
        if(e.target.innerText === "Edit"){
            e.target.innerText = "Save"
            this.createEditFields(e.target)
        } else if (e.target.innerText === "Delete"){
            this.deleteChore(e)
        } else if(e.target.innerText === "Save"){
            e.target.innerText = "Edit"
            // save this info to the DB
            // turn all input fields back into spans
            this.saveUpdatedChore()
        }
    }

    createEditFields = (editBtn) =>{
        const li = this.element
        const div = this.element.querySelector('div')
    
        for(const e of div.children){
            let inputValue = e.innerText
            let name = e.classList[0]
            e.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}">`
        }
    }

    deleteChore = (e) => {
        this.element.remove() // remove it before the fetch request 
        choreApi.deleteChore(this.id)
    }

    saveUpdatedChore = () => {
        this.name = this.element.querySelector(".edit-name").value
    
       choreApi.sendPatch(this)
    }

    render(){
        this.element.innerHTML = `
            <div data-id="${this.id}">
                <strong class="name">${this.name}</strong>
            </div>
            <button class="edit" data-id="${this.id}">Edit</button>
            <button class="delete" data-id="${this.id}">Delete</button>
        `
        return this.element
    }

    attachToDom(){
        this.render()
        Chore.choreContainer.appendChild(this.element)
        // Item.container.appendChild(this.render())

        // adding the event listener could be placed here instead of the constructor function
    }

    
    
    
   
}