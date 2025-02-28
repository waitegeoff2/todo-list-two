import { toDoItem } from "./to-do-items";

class Project {
    contructor (title, index) {
        this.title = title;
        this.index = index;
        this.list = [];
    }

    addToDo(title, description, dueDate, priority) {
        let newToDo = new toDoItem(title,description, dueDate, priority);
        this.list.push(newToDo);
    }

    removeToDo(index) {
        this.list.splice(ind, 1);
    }
}

export {Project};