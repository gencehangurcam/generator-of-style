const square = document.querySelector("#square")
const btn = document.querySelector("#btn")
const btnGreen = document.querySelector("#btnGreen")
const btnRed = document.querySelector("#btnRed")
const btnBlue = document.querySelector("#btnBlue")
const border = document.querySelector("#border")
const dashed = document.querySelector("#dashed")
//secondSettings ->
const spin = document.querySelector("#spin")
const spin2 = document.querySelector("#spin2")
const spin3 = document.querySelector("#spin3")
const spin4 = document.querySelector("#spin4")
const spin5 = document.querySelector("#spin5")

//event click
btn.addEventListener("click", () => {
    square.style.backgroundColor = "transparent"
})
btnGreen.addEventListener("click", () => {
    square.style.backgroundColor = "green"
})
btnRed.addEventListener("click", () => {
    square.style.backgroundColor = "red"
})
btnBlue.addEventListener("click", () => {
    square.style.backgroundColor = "blue"
})
border.addEventListener("click", () => {
    if (spin.value === 0 || spin.value === "") {
        square.style.border = "4px solid black"
    } else {
        square.style.border = `${spin.value}px solid black`
    }
})
dashed.addEventListener("click", () => {
    if (spin.value === 0 || spin.value === "") {
        square.style.border = "dashed 4px black"
    } else {
    square.style.border = `dashed ${spin.value}px black`
    }
})


//secondSettings event click ->
spin.addEventListener("click", () => {
    if (square.style.border = `dashed ${spin.value}px solid black`) {
        square.style.border = `dashed ${spin.value}px solid black`
    } else {
    square.style.border = `${spin.value}px solid black`
    }
})

spin2.addEventListener("click", () => {
    square.style.borderRadius = `${spin2.value}px  ${spin3.value}px ${spin4.value}px ${spin5.value}px`
})

spin3.addEventListener("click", () => {
    square.style.borderRadius = `${spin2.value}px ${spin3.value}px ${spin4.value}px ${spin5.value}px`
})

spin4.addEventListener("click", () => {
    square.style.borderRadius = `${spin2.value}px ${spin3.value}px ${spin4.value}px ${spin5.value}px`
})

spin5.addEventListener("click", () => {
    square.style.borderRadius = `${spin2.value}px ${spin3.value}px ${spin4.value}px ${spin5.value}px`
})

