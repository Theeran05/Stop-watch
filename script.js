const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

let hrs = min = sec = milsec = 0, startTime;

btnStart.addEventListener('click', () => {
    btnStart.classList.add('start-action');
    btnStop.classList.remove('stop-action');
    startTimer = setInterval(() => {
        milsec++;
        if (milsec == 100) {
            sec++;
            milsec = 0;
        }
        else if (sec == 60) {
            min++;
            sec = 0;
        }
        else if (min == 60) {
            hrs++;
            min = 0;
        }
        update();
    }, 10)
});

btnStop.addEventListener('click', () => {
    btnStart.classList.remove('start-action');
    btnStop.classList.add('stop-action');
    clearInterval(startTimer);
});

btnReset.addEventListener('click', () => {
    btnStart.classList.remove('start-action');
    btnStop.classList.remove('stop-action');
    let hrs = min = sec = milsec = 0;
    clearInterval(startTimer);
    update();
});


//selecting the new variable to add 0 and innerText in the HTML page to
function update() {
    //Formated display
    phrs = hrs < 10 ? "0" + hrs : hrs;
    pmin = min < 10 ? "0" + min : min;
    psec = sec < 10 ? "0" + sec : sec;
    pmilsec = milsec < 10 ? "0" + milsec : milsec;
    //output
    document.querySelector(".hrs").innerText = phrs;
    document.querySelector(".min").innerText = pmin;
    document.querySelector(".sec").innerText = psec;
    document.querySelector(".milsec").innerText = pmilsec;
};
