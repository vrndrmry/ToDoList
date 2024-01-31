import { addTask, addToCompletedList, clearCompleted,setPriority,removeItm } from "./Model/model.js";
import { renderCompletedList, renderTaskList } from "./Controller/controller.js";


const itemInput = document.querySelector("input[name='taskInput']");
const pendingListDiv = document.querySelector(".pending");
const completedListDiv = document.querySelector(".completedTask");
const clearBtn = document.querySelector("#clear");

itemInput.addEventListener("keyup", function (evt) {
  evt.preventDefault();
  if (evt.key === "Enter") {
    // Add the task List
    addTask(this.value);

    // Update the view
    renderTaskList();

    this.value = "";
  }
});

pendingListDiv.addEventListener("click", function (evt) {
  evt.preventDefault();
  // Priority
  if (evt.target.parentElement.classList.contains("priority")) {
    const priority = evt.target.classList.value;
    const itemId =
      evt.target.parentElement.parentElement.getAttribute("data-id");

    // Set priority
    setPriority(itemId, priority);
    // render
    renderTaskList();
  }

  // remove
  if (evt.target.classList.contains("remove")) {
    const itemId = evt.target.parentElement.getAttribute("data-id");
    // Remove Task From Model
    if (removeItm(itemId)) {
      renderTaskList();
    }
  }
});

pendingListDiv.addEventListener("dragstart", function (evt) {
  if (evt.target.classList.contains("task_bar")) {
    const getId = evt.target.getAttribute("data-id");
    evt.dataTransfer.setData("text/plain", getId);
    console.log(getId)
  }
});

completedListDiv.addEventListener("drop", function (evt) {
  const taskId = evt.dataTransfer.getData("text/plain");
  if (taskId) {
    // Add
    addToCompletedList(taskId);
    // update pending list
    renderTaskList();
    // update completed list
    renderCompletedList();
  }
});

completedListDiv.addEventListener("dragover", function (evt) {
  evt.preventDefault();
});

clearBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  clearCompleted();
  renderTaskList();
  renderCompletedList();
});
