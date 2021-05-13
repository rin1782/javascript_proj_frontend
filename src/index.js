const base = 'http://localhost:3000'
const choreApi =  new ChoreApi(base)
const kidApi = new KidApi(base)
const domDisplay = document.querySelector("body")
const kidsContainer = document.getElementById('kidsContainer')
const form = document.getElementById('choreForm')
const newChoreInput = document.getElementById('chore-name')
const choreOwnerInput = document.querySelector("#kid-dropdown").value

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
   e.preventDefault()
   choreApi.createChore()
   e.target.reset()
}


choreApi.getChores()
kidApi.getKids()

