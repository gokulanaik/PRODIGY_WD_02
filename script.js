let timerdisplay = document.querySelector('.timerdisplay');
let stop = document.getElementById('stopbtn');
let start = document.getElementById('startbtn');
let reset = document.getElementById('resetbtn');
let lap = document.getElementById("lapbtn");
l1 = document.getElementById("lap1");
 l2 = document.getElementById("lap2");
 l3 = document.getElementById("lap3");
 l4 = document.getElementById("lap4");
 l5 = document.getElementById("lap5");
let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;
let ctr=0;

startbtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(starttimer, 10);
});

stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
});

resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerdisplay.innerHTML = '0:0:0';
    msec = secs = mins = 0;
});

function starttimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    lapbtn.addEventListener('click' ,function (){
    
        ctr++;
        if (ctr % 5 === 1)
            lap1.innerHTML = "lap " + ctr + ":  " + timerdisplay.innerHTML;
        else if (ctr % 5 === 2)
            lap2.innerHTML = "lap " + ctr + ":  " + timerdisplay.innerHTML;
        else if (ctr % 5 === 3)
            lap3.innerHTML = "lap " + ctr + ":  " + timerdisplay.innerHTML;
        else if (ctr % 5 === 4)
            lap4.innerHTML = "lap " + ctr + ":  " + timerdisplay.innerHTML;
        else if (ctr % 5 === 0)
            lap5.innerHTML = "lap " + ctr + ":  " + timerdisplay.innerHTML;
    })
    timerdisplay.innerHTML = `${minsString}:${secsString}:${msecString}`;
}
   

