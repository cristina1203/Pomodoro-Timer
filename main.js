var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

// text variables
var worklabel = document.getElementById('work');
var scw = document.getElementById('scw');
var breaklabel = document.getElementById('break');
var scb = document.getElementById('scb');

// work time variables
var workmin = document.getElementById('w_min');
var worksec = document.getElementById('w_sec');

// break time variables
var breakmin = document.getElementById('b_min');
var breaksec = document.getElementById('b_sec');

var startTimer;

// start button, starts timer if not already running
start.addEventListener('click', function(){
    if (startTimer === undefined){
        startTimer = setInterval(timer,1000);
        // change color of current timer to red
        worklabel.style.color = 'red';
        workmin.style.color = 'red';
        worksec.style.color = 'red';
        scw.style.color = 'red';
    } else {
        alert("Timer currently running");
    }
})

// reset button, resets timer to default values
reset.addEventListener('click', resetTimer);

// pause button
stop.addEventListener('click', function(){
    stopinterval();
    startTimer = undefined;

})

// start timer 
function timer(){
    if (document.getElementById('counter').innerText==4){
        alert("You have completed 4 cycles! Time to reward your hard work with a longer break!");
        resetTimer();
        return;
      }
    // Work Timer
    // set work timer color to red (needed if not first cycle)
    worklabel.style.color = 'red';
    workmin.style.color = 'red';
    worksec.style.color = 'red';
    scw.style.color = 'red';
    if (worksec.innerText != 0){
        // sec will decrement by one until it hits 0
        worksec.innerText--;
    } else if (workmin.innerText != 0 && worksec.innerText == 0){
        // decrements min when timer is at a whole minute value
        worksec.innerText = 59;
        workmin.innerText--;
    }

    // Break Timer
    if (workmin.innerText == 0 && worksec.innerText == 0){
        // reset work timer to default colors
        worklabel.style.color = '#38598b';
        workmin.style.color = '#113f67';
        worksec.style.color = '#113f67';
        scw.style.color = '#113f67';
        // set break timer color to red
        breaklabel.style.color = 'red';
        breakmin.style.color = 'red';
        breaksec.style.color = 'red';
        scb.style.color = 'red';
        // start break timer when work timer is done (break timer works same as work timer)
        if (breaksec.innerText != 0){
            breaksec.innerText--;
        } else if (breakmin.innerText != 0 && breaksec.innerText == 0){
            breaksec.innerText = 59;
            breakmin.innerText--;
        }
    }
    
    // Cycle Counter, increments after each cycle is complete
    if (workmin.innerText == 0 && worksec.innerText == 0 && breakmin.innerText == 0 && breaksec.innerText == 0){
        // set break timer to default colors 
        breaklabel.style.color = '#38598b';
        breakmin.style.color = '#113f67';
        breaksec.style.color = '#113f67';
        scb.style.color = '#113f67';
        // set all values to default, new cycle begins
        workmin.innerText = 25;
        worksec.innerText = "00";
        breakmin.innerText = 5;
        breaksec.innerText = "00";
        document.getElementById('counter').innerText++;
    }
}

// stop timer
function stopinterval(){
    clearInterval(startTimer);
}

// reset function
function resetTimer(){
    workmin.innerText = 25;
    worksec.innerText = "00";
    breakmin.innerText = 5;
    breaksec.innerText = "00";
    document.getElementById('counter').innerText = 0;
    stopinterval()
    startTimer = undefined;
    // change colors back to default
    worklabel.style.color = '#38598b';
    workmin.style.color = '#113f67';
    worksec.style.color = '#113f67';
    scw.style.color = '#113f67';
    breaklabel.style.color = '#38598b';
    breakmin.style.color = '#113f67';
    breaksec.style.color = '#113f67';
    scb.style.color = '#113f67';
}

