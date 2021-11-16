
const square = document.querySelector("#square")
const btn = document.querySelector("#btn")
const btnGreen = document.querySelector("#btnGreen")
const btnRed = document.querySelector("#btnRed")
const btnBlue = document.querySelector("#btnBlue")
const border = document.querySelector("#border")
const dashed = document.querySelector("#dashed")
const borderTop = document.querySelector("#borderTop")
const borderTopDeux = document.querySelector("#borderTopDeux")
const borderTopTrois = document.querySelector("#borderTopTrois")
//secondSettings ->
const spin = document.querySelector("#spin")
const spin2 = document.querySelector("#spin2")
const spin3 = document.querySelector("#spin3")
const spin4 = document.querySelector("#spin4")
const spin5 = document.querySelector("#spin5")
//thirdSettings
const spinRadius = document.querySelector("#spinRadius")
const spinLeft = document.querySelector("#spinLeft")
const spinTop = document.querySelector("#spinTop")
const spinRight = document.querySelector("#spinRight")
const spinBottom = document.querySelector("#spinBottom")

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
borderTop.addEventListener("click", () => {
    square.style.borderTop = "5px solid black"
})
borderTopDeux.addEventListener("click", () => {
    square.style.borderTop = "10px solid black"
})
borderTopTrois.addEventListener("click", () => {
    square.style.borderTop = "15px solid black"
})



//secondSettings event click ->
spin.addEventListener("click", () => {
    // if (square.style.border = `dashed ${spin.value}px solid black`) {
    //     square.style.border = `dashed ${spin.value}px solid black`
    // } else {
    square.style.border = `${spin.value}px solid black`
})

spin2.addEventListener("click", () => {
    square.style.borderRadius = `${spin2.value}1px  ${spin3.value}1px ${spin4.value}1px ${spin5.value}1px`
})

spin3.addEventListener("click", () => {
    square.style.borderRadius = `${spin2.value}1px ${spin3.value}1px ${spin4.value}1px ${spin5.value}1px`
})

spin4.addEventListener("click", () => {
    square.style.borderRadius = `${spin2.value}1px ${spin3.value}1px ${spin4.value}1px ${spin5.value}1px`
})

spin5.addEventListener("click", () => {
    square.style.borderRadius = `${spin2.value}1px ${spin3.value}1px ${spin4.value}1px ${spin5.value}1px`
})



//thirdSettings event click ->
spinRadius.addEventListener("click", () => {
    square.style.borderRadius = `${spinRadius.value}px`
})

spinLeft.addEventListener("click", () => {
    square.style.borderLeft = `${spinLeft.value}px solid black`
})

spinTop.addEventListener("click", () => {
    square.style.borderTop = `${spinTop.value}px solid black`
})

spinRight.addEventListener("click", () => {
    square.style.borderRight = `${spinRight.value}px solid black`
})

spinBottom.addEventListener("click", () => {
    square.style.borderBottom = `${spinBottom.value}px solid black`
})

