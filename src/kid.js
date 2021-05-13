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
        this.element.addEventListener('click', this.setActiveCategory)
    }

    setActiveCategory = (e) => {
        Kid.all.forEach(k => {
            if(k.element === this.element && !this.active){
                k.element.classList.add('activated')
                k.active = true
            }else{
                k.element.classList.remove('activated')
                k.active = false
            }
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