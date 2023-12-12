// script.js
let timer;
let seconds = 36 * 60; // 36 minutes in seconds

function startTimer() {
    // Reset timer if already running
    clearInterval(timer);

    // Update the timer every second
    timer = setInterval(function () {
        seconds--;

        if (seconds <= 0) {
            clearInterval(timer);
            displayCompletionMessage();
        } else {
            displayTimer();
        }
    }, 1000);

    // Open a new tab after button click
    window.open('https://your-link-here.com', '_blank');
}

function displayTimer() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Display the timer in the "timer" div
    document.getElementById('timer').innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function displayCompletionMessage() {
    // Display a completion message or execute additional code
    alert('Timer completed! Your additional code here.');
}


