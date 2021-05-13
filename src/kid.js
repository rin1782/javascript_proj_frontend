class Kid{
    static all = []

    static kidsContainer = document.getElementById('kidsContainer')

    constructor({id, name }){
        this.id = id 
        this.name = name
        this.active = false

        this.element = document.createElement('button')
        

        Kid.all.push(this)
    }

        chores(){
            return Chore.all.filter((chore) => chore.kid_id == this.id)
        }

    

    render(){
        this.element.innerText = this.name 
        this.element.id = `kid-${this.id}`
        return this.element
    }

    addToDom(){
        Kid.kidsContainer.append(this.render())
        this.addListeners()
    }

    addListeners(){
        this.element.addEventListener('click', this.setActiveKid)
    }
    

    setActiveKid = (e) => {
        let filteredKid
        Kid.all.forEach(k => {
            if(k.element === this.element && !this.active){
                k.element.classList.add('activated')
                k.active = true
                filteredKid = k
            }else{
                k.element.classList.remove('activated')
                k.active = false
            }
            Chore.filterByKid(filteredKid)
        })
    }


    addToDropDown(){
        const dropdown = document.getElementById('kid-dropdown')
        const option = document.createElement('option')
        option.value  = this.id 
        option.innerText = this.name
        dropdown.append(option)
    }
}