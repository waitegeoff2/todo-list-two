class toDoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
    }

    changeComplete() {
        if (this.complete == false) {
            this.complete = true;
        } else if (this.complete == true) {
            this.complete = false;
        };
    }
}

export {toDoItem};

let newItem = new toDoItem("a", "a", "a", "a");
console.log(newItem);

// newItem.changeComplete();

console.log(newItem)