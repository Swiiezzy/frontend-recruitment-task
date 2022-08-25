const btn = document.querySelectorAll(".module--infodiv--btn")
const none = document.querySelector(".none")
const black = document.querySelector(".black")
const btnClose = document.querySelector(".alert--render--btn")
const render = document.querySelector(".render")
const alertRender = document.querySelector(".alert--render")
const alertRrenderCount = document.querySelector(".alert--render--count")
const reset = document.querySelector(".reset")
const html = document.querySelector('html')

//Global scope index update by click need to Reset count btn
let btxIndex = ""


//Reset count btn update localStorage
reset.addEventListener("click", function () {
  localStorage.setItem(btxIndex, '0')
  black.classList.add("none")
  alertRender.classList.add("none")
  reset.classList.add("none")
})
//Render button for each module
btn.forEach((button, index) => {
  button.addEventListener('click', function rendering() {
    //add index clicked button to btxIndex(id)
    btxIndex = index
    // Count = 0 if  does not exist in localStorage else = 
    // index localStorage
    var count = localStorage.getItem(index) == null ? 0 : localStorage.getItem(index)
    //update count by click in js and localStorage
    count++
    localStorage.setItem(index, count);
    //dipplay click count on alert
    alertRrenderCount.innerHTML = `You have clicked <span>${count} times </span>to related button.`
    //show model/alert
    black.classList.remove("none")
    alertRender.classList.remove("none")
    //show btn reset count when localStorage index more than 5
    if (localStorage.getItem(index) >= 5) {
      reset.classList.remove("none")
    } else { reset.classList.add("none") }
  })
})
// hide model function
function close() {
  black.classList.add("none")
  alertRender.classList.add("none")
}
black.addEventListener("click", close)
btnClose.addEventListener("click", close)
// =======================
//                NAV BAR
// =======================
//ZOOM LISTINERS
document.getElementById("zoom-1.5").addEventListener("click", () => {
  html.style.fontSize = "19.2px"
})

document.getElementById("zoom-2.0").addEventListener("click", () => {
  html.style.fontSize = "32px"
})

document.getElementById("zoom-reset").addEventListener("click", () => {
  html.style.fontSize = "16px"
})

//Night listener

document.getElementById("night").addEventListener("click", () => {
  document.body.style.backgroundColor = "#1c1c1c";
  alertRender.style.backgroundColor = "#1c1c1c";
  document.body.style.color = "white";
})
//reset listener

document.getElementById("basic").addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  alertRender.style.backgroundColor = "white";
  document.body.style.color = "black";
})



