
// creating variables
let counter = document.getElementsByClassName('counter');
// Accessing main div
let main = document.getElementById('main');

// Accessing start button
let start = document.getElementById('start');

// Accessing stop button
let stop = document.getElementById('stop');

// Accessing reset button
let reset = document.getElementById('reset');

let timer = document.getElementById('timer');


// Function to update the theme
// Two theme light and dark background is available
var updateTheme = function(){
    if(main.style.color == 'black'){
        // changing to dark mode
        main.style.color = "white";
        // counter is used to change all the timer controller
        for(let i of counter){
            i.style.color = "orange";
        }
        // timer.style.border = "20px solid or";
        theme.innerHTML = "Light mode";
        main.style.backgroundColor = "#080832";
    }else{
        // changing to light mode
        main.style.color = "black";
        main.style.backgroundColor = "white";
        // counter is used to change all the timer controller
        for(let i of counter){
            i.style.color = "black";
        }
        theme.innerText = "Dark mode";
    }
}

let timeStart = false;

// Function to increase the timer
let increase = function(){
    // This i will take care of the timer controler
    let i = counter.length - 1;
    let count = parseInt(counter[i].innerHTML);
    let finalTime = (i % 2 == 0)?5:9;
    while(count == finalTime){
        count = 0;
        counter[i].innerHTML = count;
        i--;
        count = parseInt(counter[i].innerHTML);
        finalTime = (i % 2 == 0)?5:9;
        if(i < 0) break;
    }
    if(i >= 0){
        count++;
        counter[i].innerHTML = count;
    }
}

// Id is the instance id of setInterval()
var id;

// This function is used to start the timer
let updateTime = function(){
    if(!timeStart){
        id = setInterval(increase, 1000);
        timeStart = true;
    }
}

// This function is used to stop the timer 
let stopTime = function(){
    clearInterval(id);
    timeStart = false;
}

// This function is used to reset the timer 
let setZero = function(){
    for(let i of counter){
        i.innerHTML = 0;
        clearInterval(id);
        timeStart = false;
    }
}

// Click event on start button
// To start the timer of the stopwatch
start.addEventListener('click', updateTime);

// Click event on stop button
// To stop the timer of the stopwatch
stop.addEventListener('click', stopTime);

// Click event on reset button
// To reset the timer of the stopwatch
reset.addEventListener('click', setZero);