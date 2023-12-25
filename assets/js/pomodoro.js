let timer;
let minutes = 25;
let seconds = 0;
let isPaused = true;

function setTimer(duration) {
    if (isPaused) {
        minutes = duration;
        seconds = 0;
        updateDisplay();
    }
}

function startPauseTimer() {
    if (isPaused) {
        isPaused = false;
        timer = setInterval(updateTimer, 1000);
        document.getElementById('startPauseButton').textContent = 'Pause';
    } else {
        clearInterval(timer);
        isPaused = true;
        document.getElementById('startPauseButton').textContent = 'Start';
    }
}

function resetTimer() {
    clearInterval(timer);
    isPaused = true;
    minutes = 25;
    seconds = 0;
    updateDisplay();
    document.getElementById('startPauseButton').textContent = 'Start';
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isPaused = true;
        alert("Session completed!");
        document.getElementById('startPauseButton').textContent = 'Start';
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    document.getElementById('timer').textContent = `${displayMinutes}:${displaySeconds}`;
}
