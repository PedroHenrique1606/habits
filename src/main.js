const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)
function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExist = nlwSetup.dayExists(today)

  if (dayExist == true) {
    alert("Dia já incluso❌")
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  window.localStorage.setItem('nlwSetup@habits', JSON.stringify(nlwSetup.data))
  localStorage.getItem('nlwSetup@habits')
}
const data = JSON.parse(localStorage.getItem('nlwSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()

//format MM-DD
/* const data = {
  run: ['01-01', '01-02', '01-03', '01-06', '01-07', '01-08', '01-09'],
  water: ['01-04', '01-05']
} */
