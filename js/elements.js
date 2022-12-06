const buttonStep1 = document.querySelector(".rota-step-1")
const buttonStep2 = document.querySelector(".rota-step-2")
const buttonStep3 = document.querySelector(".rota-step-3")
const buttonStep4 = document.querySelector(".rota-step-4")
const buttonStep5 = document.querySelector(".rota-step-5")

buttonStep1.addEventListener('click', () => {
    buttonStep1.classList.add('hide')
    buttonStep2.classList.remove('hide')
})

buttonStep2.addEventListener('click', () => {
    buttonStep2.classList.add('hide')
    buttonStep3.classList.remove('hide')
})

buttonStep3.addEventListener('click', () => {
    buttonStep3.classList.add('hide')
    buttonStep4.classList.remove('hide')
})
buttonStep4.addEventListener('click', () => {
    buttonStep4.classList.add('hide')
})


