const dsaTrackerBtn = document.getElementById('dsa-tracker-button');
const addQuestionBtn = document.getElementById("addQuestionBtn")
const questionInput = document.getElementById("questionSolved");
const totalQuestionSolved = document.querySelector(".total-questions-solved");
const solved = document.getElementById("totalQuestionsSolved");
const topicSelect = document.getElementById("topicSelect"); 
const arraysProgressBar = document.getElementById("arraysProgressBar");
const treesProgressBar = document.getElementById("treesProgressBar");
const graphsProgressBar = document.getElementById("graphsProgressBar");
const dpProgressBar = document.getElementById("dpProgressBar");
const arraysProgressText = document.getElementById("arraysProgressText");
const treesProgressText = document.getElementById("treesProgressText");
const graphsProgressText = document.getElementById("graphsProgressText");
const dpProgressText = document.getElementById("dpProgressText");
const studyStreak = document.getElementById("studyStreak");
const progressContainer = document.querySelector(".progress-container");    
const emptyState = document.querySelector(".empty-state"); 



if (dsaTrackerBtn) {
    dsaTrackerBtn.addEventListener('click', () => {
             window.location.href = "../Pages/dsa-track.html";
    });
}
const topics = [
    {
        name : "Arrays",
        id : "arrays",
        questions : 0,
        totalQuestions : 50
    },
    {
        name : "Trees",
        id : "trees",
        questions : 0,
        totalQuestions : 50
    },
    {
        name : "Graphs",
        id : "graphs",
        questions : 0,
        totalQuestions : 50
    },
    {
        name : "DP",
        id : "dp",
        questions : 0,
        totalQuestions : 50
    }
]
function renderProgressBar(){
        const topic = topicSelect.value;
        const arrayItem = topics.find((item)=>item.name==topic);
        if(topic == "Arrays"){
            const temp = arrayItem.questions+Number(questionInput.value)>50?50:Number(questionInput.value);
            arraysProgressText.textContent  = `${temp} / 50`;
            arraysProgressBar.style.width = `${temp / 50 * 100}%`;
        }
        else if(topic == "Trees"){
            const temp = arrayItem.questions+Number(questionInput.value)>50?50:Number(questionInput.value);
            treesProgressText.textContent  = `${temp} / 50`;
            treesProgressBar.style.width = `${temp / 50 * 100}%`;
        }
        else if(topic == "Graphs"){
            const temp = arrayItem.questions+Number(questionInput.value)>50?50:Number(questionInput.value);
            graphsProgressText.textContent  = `${temp} / 50`;
            graphsProgressBar.style.width = `${temp / 50 * 100}%`;

        }
        else if(topic == "DP"){ 
            const temp = arrayItem.questions+Number(questionInput.value)>50?50:Number(questionInput.value);
            dpProgressText.textContent  = `${temp} / 50`;
            dpProgressBar.style.width = `${temp / 50 * 100}%`;
        }
        arrayItem.questions = arrayItem.questions+Number(questionInput.value)>50?50:Number(questionInput.value);
}
let total = 0;
if (addQuestionBtn) {
    addQuestionBtn.addEventListener("click",()=>{
            let val = questionInput.value>=0?questionInput.value:0;
            total += Number(val);
            solved.textContent = `Total Question Solved : ${total}`;
            renderProgressBar();
            questionInput.value = "";
    });
}
