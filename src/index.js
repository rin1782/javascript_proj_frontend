const base = 'http://localhost:3000'
const choreApi =  new ChoreApi(base)
const kidApi = new KidApi(base)
const list = document.getElementById('choresList')
const form = document.getElementById('choreForm')
const newChoreInput = document.getElementById('chore-name')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
   e.preventDefault()
   choreApi.createChore()
   e.target.reset()
}


choreApi.getChores()
kidApi.getKids()

