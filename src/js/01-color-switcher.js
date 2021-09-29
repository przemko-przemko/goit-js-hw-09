const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body')

let timeId = null;
const onClick = () => {
    timeId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`
        console.log(getRandomHexColor())
    }, 1000)
    buttonStart.disabled = "true";
    
}

const onStop = () => {
    clearInterval(timeId) 
    buttonStart.disabled = "";
}
buttonStart.addEventListener('click',onClick);
buttonStop.addEventListener('click',onStop)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  buttonStart.style.marginLeft = "50vw"
  buttonStart.style.marginTop = "40vh"
  buttonStart.style.border = "none"
  buttonStart.style.borderRadius = "30px"
  buttonStart.style.backgroundColor = "green"
  buttonStart.style.width = "100px"
  buttonStart.style.height = "100px"
  buttonStop.style.border = "none"
  buttonStop.style.borderRadius = "30px"
  buttonStop.style.backgroundColor = "red"
  buttonStop.style.width = "100px"
  buttonStop.style.height = "100px"