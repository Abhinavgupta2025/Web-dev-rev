const pomodoroContainer = document.getElementById("pomodoroContainer");
const sessionTabs = document.getElementById("sessionTabs");
const timeLeft = document.getElementById("timeLeft");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const progressRing = document.getElementById("progressRing");
const sessionsCompleted = document.getElementById("sessionsCompleted");
const totalFocusTime = document.getElementById("totalFocusTime");

let totalSession = 0;
let totalTimeSpend = 0;
let isPause = false;
let totalTime = 25 * 60;
let remainingTime = 25*60;
let interval;
let circumference = Math.PI * 2 * 130;
function updateProgressRing(remTime){

    const progress =
        remTime / totalTime;

    const dashOffset =
        circumference * (1 - progress);

    progressRing.style.strokeDashoffset =
        dashOffset;

}
sessionTabs.addEventListener("click", function(e) {
    if(e.target.tagName.toLowerCase() !== "button") return;

    // Visual Updates: Change active button and ring color!
    document.querySelectorAll(".session-tab").forEach(tab => tab.classList.remove("active"));
    e.target.classList.add("active");
    pomodoroContainer.className = "pomodoro-container mode-" + e.target.dataset.mode;

    pauseTimer();
    startPauseBtn.textContent = 'Start';
    
    if(e.target.dataset.mode == "short-break"){
        totalTime = 5*60;
        timeLeft.textContent = "05:00"
        updateProgressRing(totalTime);
        remainingTime = totalTime;
    }else if(e.target.dataset.mode == "long-break"){
        totalTime = 15*60;
        timeLeft.textContent = "15:00"
        updateProgressRing(totalTime);
        remainingTime = totalTime;
    }else{
        totalTime = 25*60;
        timeLeft.textContent = "25:00"
        updateProgressRing(totalTime);
        remainingTime = totalTime;
    }  
})
function startTimer(event) {
    
     function showTime(){
        if(remainingTime<0){
            remainingTime = totalTime;
            updateProgressRing(remainingTime);
            startPauseBtn.textContent = 'Start';
            pauseTimer();
            totalSession++;
            sessionsCompleted.textContent = totalSession;
            totalTimeSpend += totalTime;
            totalFocusTime.textContent = Math.floor(totalTimeSpend/60);
            return;
        }
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timeLeft.textContent = `${minutes}:${seconds >= 10 ? seconds : '0' + seconds}`;
        console.log(remainingTime);
        remainingTime--;
        updateProgressRing(remainingTime);
     }
     interval = setInterval(showTime,1000);

}
function pauseTimer(){
    clearInterval(interval);
}

startPauseBtn.addEventListener('click', (event) => {
    if(startPauseBtn.textContent === 'Start'){
        startPauseBtn.textContent = 'Pause';
        startTimer(event);
    }else{
        startPauseBtn.textContent = 'Start';
        isPause = true;
        pauseTimer();
    }   
    

})
resetBtn.addEventListener("click", function(e){
    pauseTimer();
    startPauseBtn.textContent = 'Start';
    remainingTime = totalTime;
    updateProgressRing(remainingTime);
    timeLeft.innerHTML = `${Math.floor(totalTime / 60)}:${totalTime % 60 >= 10 ? totalTime % 60 : '0' + totalTime % 60}`;
})

