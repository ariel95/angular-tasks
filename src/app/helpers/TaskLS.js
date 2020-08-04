const taskLocalStorageName = "task-list"

export function getListTask() {
    return JSON.parse(localStorage.getItem(taskLocalStorageName));
}
export function setListTask(list) {
    localStorage.setItem("task-list", JSON.stringify(list));
}
