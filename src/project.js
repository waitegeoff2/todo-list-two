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

    removeToDo(ind) {
        this.list.splice(ind, 1);
    }

}

export {Project};
export{toDoItem};