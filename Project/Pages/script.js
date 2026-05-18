const addTaskBtn = document.querySelector("#addTaskBtn");
const taskInput = document.querySelector("#taskInput");
const prioritySelect = document.querySelector("#prioritySelect");
const pendingTasks = document.querySelector("#pendingTasks");
const completedTasks = document.querySelector("#completedTasks");
const emptyState = document.querySelector("#emptyState");

const sTotal = document.querySelector("#s-total");
const sPending = document.querySelector("#s-pending");
const sDone = document.querySelector("#s-done");

let arr = [];

function renderTask() {
    pendingTasks.innerHTML = "";
    completedTasks.innerHTML = "";
    
    arr.sort((a, b) => b.priority - a.priority);

    let pendingCount = 0;
    let doneCount = 0;

    arr.forEach((element) => {
        const div = document.createElement("div");
        div.className = element.status === "done" ? "task-card done-card" : "task-card";

        // Priority classes
        let pDotClass = "p-low";
        let pBadgeClass = "badge-low";
        let pLabel = "Low";
        
        if (element.priority === "3") {
            pDotClass = "p-high";
            pBadgeClass = "badge-high";
            pLabel = "High";
        } else if (element.priority === "2") {
            pDotClass = "p-med";
            pBadgeClass = "badge-med";
            pLabel = "Medium";
        }

        const textClass = element.status === "done" ? "task-text striked" : "task-text";

        div.innerHTML = `
            <div class="priority-dot ${pDotClass}"></div>
            <div class="${textClass}">${element.task}</div>
            <div class="priority-badge ${pBadgeClass}">${pLabel}</div>
            <div class="task-actions">
                ${element.status !== "done" ? `<button class="act-btn done-btn" id="${element.id}">✓</button>` : ""}
                <button class="act-btn edit" id="${element.id}">✎</button>
                <button class="act-btn del" id="${element.id}">✕</button>
            </div>
        `;

        if (element.status !== "done") {
            pendingTasks.appendChild(div);
            pendingCount++;
        } else {
            completedTasks.appendChild(div);
            doneCount++;
        }
    });

    sTotal.textContent = arr.length;
    sPending.textContent = pendingCount;
    sDone.textContent = doneCount;

    if (arr.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}

addTaskBtn.addEventListener("click", () => {
    if (taskInput.value.trim().length !== 0) {
        const obj = {
            id: Date.now(),
            task: taskInput.value.trim(),
            status: "pending",
            priority: prioritySelect.value,
        };
        arr.push(obj);
        renderTask();
        taskInput.value = "";
    }
});

document.body.addEventListener("click", (event) => {
    const target = event.target;
    
    // Check if it's an action button
    if (target.classList.contains("act-btn")) {
        const id = Number(target.id);
        const index = arr.findIndex((task) => task.id === id);
        
        if (index === -1) return;

        if (target.classList.contains("del")) {
            arr.splice(index, 1);
            renderTask();
        }

        if (target.classList.contains("edit")) {
            const newTask = prompt("Update Task : ", arr[index].task);
            if (newTask && newTask.trim()) {
                arr[index].task = newTask.trim();
                renderTask();
            }
        }

        if (target.classList.contains("done-btn")) {
            arr[index].status = "done";
            renderTask();
        }
    }
});

renderTask();