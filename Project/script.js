const addButton = document.querySelector(".addButton");
const input = document.querySelector(".input");
const task = document.querySelector(".task");
const allTasks = document.querySelector("#allTasks");
let arr = [];

function renderTask(){
       allTasks.innerHTML = "";
       arr.forEach((element,index)=>{
        if(element.status !== "done"){
        const div = document.createElement("div");
        div.innerHTML = `
        <p>task ${index +1} : ${element.task}</p>
        <button class="done" id="${element.id}">Done</button>
        <button class="edit" id="${element.id}">edit</button>
        <button class="delete" id="${element.id}">delete</button>
        `;
        allTasks.appendChild(div);
    }
    else{
        const div = document.createElement("div");
        div.classList.add("completed");
        div.innerHTML = `
        <p>task ${index +1} : ${element.task}</p>
        `;
        allTasks.appendChild(div);
    }
       })
};
addButton.addEventListener("click",()=>{
    if(input.value.trim().length !==0){
        const obj = {
            id : Date.now(),
            task: input.value.trim(),
            status : "pending"
        }
        arr.push(obj);
        renderTask();
        input.value = "";
    }
});

allTasks.addEventListener("click",(event)=>{

    const target = event.target;

    const id = Number(target.id);

    const index = arr.findIndex((task) => {
        return task.id === id;
    });

    
    if(target.classList.contains("delete")){

        arr.splice(index,1);

        renderTask();
    }


    if(target.classList.contains("edit")){

        const newTask = prompt(
            "Update Task : ",
            arr[index].task
        );

        if(newTask && newTask.trim()){

            arr[index].task = newTask.trim();

            renderTask();
        }
    }


    if(target.classList.contains("done")){

        arr[index].status = "done";

        renderTask();
    }

});