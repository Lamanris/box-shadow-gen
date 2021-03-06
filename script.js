let vertical = document.querySelector('.vertical')
let horizontal = document.querySelector('.horizontal')
let blur = document.querySelector('.blur')
let spread = document.querySelector('.spread')
let box = document.querySelector('.box')
let color = document.querySelector('.color')
let settingRanges = document.querySelectorAll('.settings-block input')
let resetBtn = document.querySelector('#reset')
let shadowInput = Array.from(document.querySelectorAll('.shadowInput'))
let boxShadowText = document.querySelector('.box-shadow-code')

settingRanges.forEach((el) => {
    el.addEventListener('input',() => {
        generateShadow()
    })
})

function generateShadow () {
    const property = `${vertical.value}px ${horizontal.value}px ${blur.value}px ${spread.value}px ${color.value}`
    box.style.boxShadow = property
    boxShadowText.textContent = `box-shadow: ${property};`
}

generateShadow()

resetBtn.addEventListener('click', () => {
    shadowInput.map(el => el.value = 0)
    box.style.boxShadow = 'none'
    color.value = '#000000'
    boxShadowText.textContent = 'box-shadow: 0 0 0 0 #000000;'
})