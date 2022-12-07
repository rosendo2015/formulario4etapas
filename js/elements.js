const buttonS1 = document.querySelector(".buttonS1")
const buttonS2 = document.querySelector(".buttonS2")
const buttonS3 = document.querySelector(".buttonS3")
const buttonS4 = document.querySelector(".buttonS4")

const rota1 = document.querySelector(".rota-step-1")
const rota2 = document.querySelector(".rota-step-2")
const rota3 = document.querySelector(".rota-step-3")
const rota4 = document.querySelector(".rota-step-4")
const rota5 = document.querySelector(".rota-step-5")

const sel1 = document.querySelector(".sel1")
const sel2 = document.querySelector(".sel2")
const sel3 = document.querySelector(".sel3")
const sel4 = document.querySelector(".sel4")

const goBack = document.querySelector(".link")
const containerButton = document.querySelector(".container-rotas")



goBack.onclick = () => {

    window.history.back()
}

buttonS1.addEventListener('click', function() {
    rota1.classList.add('hide')
    rota2.classList.remove('hide')
    rota3.classList.add('hide')
    rota4.classList.add('hide')

    sel1.classList.remove('one')
    sel2.classList.add('one')
    sel3.classList.remove('one')
    sel4.classList.remove('one')
})

buttonS2.addEventListener('click', () => {
    rota1.classList.add('hide')
    rota2.classList.add('hide')
    rota3.classList.remove('hide')
    rota4.classList.add('hide')
    
    sel1.classList.remove('one')
    sel2.classList.remove('one')
    sel3.classList.add('one')
    sel4.classList.remove('one')
})

buttonS3.addEventListener('click', () => {
    rota1.classList.add('hide')
    rota2.classList.add('hide')
    rota3.classList.add('hide')
    rota4.classList.remove('hide')
    
    sel1.classList.remove('one')
    sel2.classList.remove('one')
    sel3.classList.remove('one')
    sel4.classList.add('one')
})
buttonS4.addEventListener('click', () => {
    rota1.classList.add('hide')
    rota2.classList.add('hide')
    rota3.classList.add('hide')
    rota4.classList.add('hide')
    containerButton.classList.add('hide')
})




