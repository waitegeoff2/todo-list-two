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
const sidebarItem = document.querySelector(".sidebarItem");

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

        //check if complete and append CSS to strikethrough 

        if (arrayItem.complete == true) {
            listItemDate.classList.add("completedTask");
            listItemTitle.classList.add("completedTask");
            listItemDescription.classList.add("completedTask");
        };

        checkImage.addEventListener("click", () => {

            //click button, change complete status

            arrayItem.changeComplete();

            displayProject();

        })


    }

    //go through to-do array in current working project object

    JSON.parse(localStorage.getItem(thisProject.name));

    thisProject.list.forEach(appendToList);

}

export {displayProject};