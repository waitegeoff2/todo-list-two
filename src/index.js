import "./styles.css";
import { toDoItem } from "./to-do-items";
import { Project } from "./project";

const toDoHeader = document.querySelector(".toDoSection");
const toDoList = document.querySelector(".toDoList");
const toDoLabels = document.querySelector(".toDoLabels");
const addToDoButton = document.querySelector(".addToDo");
const addToDoDialog = document.querySelector(".newToDoDialog");
const closeToDoDialogBtn = document.querySelector(".closeDialogBtn");
const closeProjectDialogBtn = document.querySelector(".closeProjDialogBtn")
const toDoForm = document.querySelector(".toDoDialogForm");
const newProjectButton = document.querySelector(".addProject");
const newProjectDialog = document.querySelector(".newProject");
const newProjectForm = document.querySelector(".newProjectForm");
const projectSidebar = document.querySelector(".projectSidebar");
const currentProject = document.querySelector(".projectTitle");

// for storing each project
let projectList = [];

let defaultProject = new Project("default");

defaultProject.addToDo("Laundry", "do it", "sept", "high");

console.log(defaultProject);

// DOM STUFF

addToDoButton.addEventListener("click", () => {
    addToDoDialog.showModal();
})



