import "./styles.css";
import { toDoItem } from "./to-do-items";
import { Project } from "./project";

//images
import trashImg from "./images/trash-can-outline.svg";
import checkImg from "./images/check-outline.svg";

//HTML elements

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
const defaultSidebarItem = document.querySelector(".defaultSidebarItem");

// DEFAULTS
// let projectList = [];
let defaultProject = new Project("default");
// this is the current project we are displaying on DOM
let thisProject = defaultProject;

//displaying a project on the to-do page

function displayProject() {
    toDoList.innerHTML = ""; 

   

    //appending DOM items for each to-do item in project object

    function appendToList(arrayItem) {
        console.log(arrayItem);
        console.log(defaultProject.list.indexOf(arrayItem));


        const itemContainer = document.createElement("div");
        itemContainer.classList.add("itemContainer");
        toDoList.appendChild(itemContainer);

        const leftDiv = document.createElement("div");
        leftDiv.classList.add("leftDiv");
        itemContainer.appendChild(leftDiv);

        //title

        const listItemTitle = document.createElement("h1");
        listItemTitle.classList.add("listItemTitle");
        listItemTitle.textContent = arrayItem.title;
        leftDiv.appendChild(listItemTitle);

        //description

        const listItemDescription = document.createElement("h3");
        listItemDescription.classList.add("listItemDescription");
        listItemDescription.textContent = arrayItem.description;
        leftDiv.appendChild(listItemDescription);

        //due date

        const listItemDate = document.createElement("span");
        listItemDate.classList.add("listItemDate");
        listItemDate.textContent = "Due date: " + arrayItem.dueDate;
        leftDiv.appendChild(listItemDate);

        //right div
        const rightDiv = document.createElement("div");
        rightDiv.classList.add("rightDiv");
        itemContainer.appendChild(rightDiv);

        //add delete button

        const deleteImage = document.createElement("img");
        deleteImage.src = trashImg;
        deleteImage.classList.add("deleteImage");
        rightDiv.appendChild(deleteImage);

        //make delete functional
        deleteImage.addEventListener("click", () => {
            thisProject.list.splice(defaultProject.list.indexOf(arrayItem), 1);
            displayProject();
        })

        //add finished button
        const checkImage = document.createElement("img");
        checkImage.src = checkImg;
        checkImage.classList.add("checkImage");
        rightDiv.appendChild(checkImage);

        //check if complete and append CSS

        if (arrayItem.complete == true) {
            listItemDate.classList.add("completedTask");
            listItemTitle.classList.add("completedTask");
            listItemDescription.classList.add("completedTask");
        } else {
            listItemDate.classList.add("notCompleted");
            listItemTitle.classList.add("notCompleted");
            listItemDescription.classList.add("notCompleted");
        };

        checkImage.addEventListener("click", () => {

            //click button, change complete status

            arrayItem.changeComplete();

            displayProject();

        })


    }

    //go through to-do array in current working project object

    thisProject.list.forEach(appendToList);

}

// **********DOM STUFF****** //

//TO DO BUTTONS

//bring up modal 

addToDoButton.addEventListener("click", () => {
    addToDoDialog.showModal();
})

//close modal

closeToDoDialogBtn.addEventListener("click", () => {
    addToDoDialog.close();
    toDoForm.reset();
})

//submit to do form

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    addToDoDialog.close();

    //collect form values

    const itemTitle = document.querySelector("#toDoTitle");
    const itemDescription = document.querySelector("#toDoDescription");
    const itemDue = document.querySelector("#toDoDueDate");
    const toDoPriority = document.querySelector("#toDoPriority");

    let title = itemTitle.value;
    let description = itemDescription.value;
    let dueDate = itemDue.value;
    let priority = toDoPriority.value;

    //use form values to add to-to item to current working project object

    thisProject.addToDo(title, description, dueDate, priority);

    console.log(thisProject);

    toDoForm.reset();

    //display current working project object

    displayProject();


})

//DEFAULT SIDEBAR BUTTON

defaultSidebarItem.addEventListener("click", () => {
    thisProject = defaultProject;
    displayProject();
})

//NEW PROJECT

//PROJECT BUTTONS

//new project btn
newProjectButton.addEventListener("click", () => {
    newProjectDialog.showModal();
})

// close project modal
closeProjectDialogBtn.addEventListener("click", () => {
    newProjectDialog.close();
    newProjectForm.reset();
})

//submit modal to create new project

newProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //close modal

    newProjectDialog.close();

    //create new project object

    const projectName = document.querySelector("#projTitle");
   
    let nextProject = new Project(projectName.value);

    //update current working project

    thisProject = nextProject;

    //remove default DOM

    toDoHeader.removeChild;
    
    toDoList.innerHTML = "";

    //add sidebar ITEM

    const sidebarItem = document.createElement("h3");
    sidebarItem.classList.add("sidebarItem");
    sidebarItem.textContent = projectName.value;
    projectSidebar.appendChild(sidebarItem);

    //add event listener to sidebar ITEM to bring up current project

    sidebarItem.addEventListener("click", () => {
        thisProject = nextProject;
        displayProject();
        sidebarItem.classList.add("selectedSidebarItem");
    })

    // reset form

    newProjectForm.reset();
    
})

