import { toDoItem } from "./to-do-items";

class Project {
    constructor(name, index) {
        this.name = name;
        this.index = index;
        this.list = [];
    }

    addToDo(title, description, dueDate, priority) {
        let newToDo = new toDoItem(title,description, dueDate, priority);
        this.list.push(newToDo);
    }

}

export {Project};
export{toDoItem};