
//Vars
let value = -48;
let count = 0;
let loop = 0;
let timer = 59;
let stopTimer = true;
let array;
//DOM
const start = document.querySelector('.start');
const sentence = document.querySelector('#sentence');
const seconds = document.querySelector('.seconds');
const res = document.querySelector('.result');

array = [sentence.innerText.split("")];

//Fire events after global
this.addEventListener('keypress' , (e)=> {
    if(stopTimer) {
        countTimer()
    }
    letterCheck(e)
})



//Letter check 
function letterCheck(e) {
    stopTimer = false;
    start.style.opacity = 0;
    //If the pressed key true, highlight
    if(e.key === array[0][count++]) {
        changeColor(array[0][count-1])
        if(value > 0) {
            sentence.style.marginRight = value++ + `${'%'}`;
            
        }
        else {
            sentence.style.marginRight = value++ + `${'%'}`;
        }
    }else {
        count--
    }
}
//Function of count timer
function countTimer() {
    
    setInterval(() => {
        seconds.innerText = timer--

    }, 1000);

}


//Factory
function changeColor(letter) {   
 
    console.log(letter);
    sentence.innerHTML = sentence.innerHTML.replace(letter , `<span style='color:red;'>${letter}</span>`)
    // sentence.innerHTML = sentence.innerHTML.replace(arrayLetter , `<span style="color:red;"> ${arrayLetter} </span>`)

}