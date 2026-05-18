const noteTitleInput = document.querySelector(".note-title-input");
const noteBodyInput = document.querySelector(".note-body-input");
const colorPicker = document.querySelector(".color-picker");
const saveBtn = document.querySelector(".save-btn");
const notesGrid = document.querySelector(".notes-grid");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let defaultColor = "#27272a";

colorPicker.addEventListener("click",(e)=>{
    if(e.target.tagName.toLowerCase() === "button"){
        defaultColor = e.target.dataset.color;
        document.querySelectorAll(".color-btn").forEach(btn => btn.classList.remove("selected"));
        e.target.classList.add("selected");
        document.querySelector(".note-input-card").style.backgroundColor = defaultColor;
    }
});

const renderNotes = () => {
    notesGrid.innerHTML = "";

    if(notes.length === 0){
        notesGrid.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;">No notes yet. Add your first note above!</div>`;
        return;
    }

    for(let note of notes){
        let div = document.createElement("div");
        div.classList.add("note-card");
        div.dataset.id = note.id;
        div.style.backgroundColor = note.color;

        div.innerHTML = `
            <h3 class="note-title">${note.title}</h3>
            <p class="note-body">${note.body}</p>
            <span class="note-date">${note.date}</span>
            <button class="delete-note-btn">🗑️</button>
        `;

        notesGrid.appendChild(div);
    }
};

saveBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const title = noteTitleInput.value.trim();
    const body = noteBodyInput.value.trim();

    if(title.length === 0){
        alert("Please enter a title.");
        noteTitleInput.focus();
        return;
    }

    if(body.length === 0){
        alert("Please enter note body.");
        noteBodyInput.focus();
        return;
    }

    const noteObj = {
        id : Date.now(),
        title : title,
        body : body,
        color : defaultColor,
        date : new Date().toLocaleDateString()
    };

    notes.push(noteObj);
    localStorage.setItem("notes", JSON.stringify(notes));

    noteTitleInput.value = "";
    noteBodyInput.value = "";

    renderNotes();
});

notesGrid.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-note-btn")){
        const noteId = Number(e.target.parentElement.dataset.id);
        notes = notes.filter((note) => note.id !== noteId);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
    }
});

renderNotes();