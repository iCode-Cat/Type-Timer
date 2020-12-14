//Vars
let value = 0;
let count = 0;
let loop = 1;
let timer = 59;
let mistake = 1;
let stopTimer = true;
let array;
let scores = 1;
//DOM
const start = document.querySelector('.start');
const sentence = document.querySelector('#sentence');
const seconds = document.querySelector('.seconds');
const res = document.querySelector('.result');
const change = document.querySelector('.change-text');
const changeClick = document.querySelector('.changeButton');
const custom = document.querySelector('.custom');
const textarea = document.querySelector('textarea');
const letter = document.querySelector('.letters');
const errors = document.querySelector('.mistakes');
const scoreSystem = document.querySelector('.scores');



let text = "lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque quod ullam aperiam alias consequuntur illo nulla sequi dolor fugiat. Laudantium consequuntur dolorum magnam ipsum fuga vitae maiores eaque quasi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nesciunt eveniet. Minima, magnam optio deleniti impedit odio commodi facilis rerum quisquam illum quos eos culpa at doloribus molestias corporis dolore"



//Fire events after global
this.addEventListener('keypress', (e) => {
    array = [text.split("")];
    if (stopTimer) {
        countTimer()
    }
    letterCheck(e)

})



//Letter check 
function letterCheck(e) {
    stopTimer = false;
    start.style.opacity = 0;
    //If the pressed key true, highlight
    if (e.key === array[0][count++]) {
        scoreSystem.innerText = scores++*10
        const span = document.querySelectorAll('span');
        span[count - 1].style.color = "#2e86de"
        span[count].style.color = "red"
        if(e.key != " ") {
            letter.innerText = loop++
        }

    } else {
        count--
        errors.innerText = mistake++
        scoreSystem.innerText = scores--*10
    }
}
//Function of count timer
function countTimer() {

    setInterval(() => {
        seconds.innerText = timer--

    }, 1000);

}



//Factory
function changeColor(text) {

    text.split("").forEach(letter => {
        const characterSpan = document.createElement('span');
        characterSpan.innerText = letter;
        if (characterSpan.innerText === " ") {
            characterSpan.style.marginRight = "5px"
        }
        sentence.appendChild(characterSpan);
        console.log();
    })

    console.log(sentence.innerText);

    // sentence.innerHTML = sentence.innerHTML.replace(arrayLetter , `<span style="color:red;"> ${arrayLetter} </span>`)

}

change.onclick = (e) => {
    changetext()
}

function changetext(e) {
    custom.style.display = "flex"
}


//Close the window
this.onclick = (e) => {
    console.log(e.target);
    if (e.target === document.querySelector('.custom')) {
        custom.style.display = "none";


    }
}
changeColor(text)

changeClick.onclick = () => {
    text = textarea.value;
    changeColor(text)
    console.log(textarea.value);
}