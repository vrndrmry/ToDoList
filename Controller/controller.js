import CompletedItem from "../View/CompletedList.js";
import Item from "../View/Item.js";
import { getTaskList, getcompletedList } from "../Model/model.js";

const pendingListDiv = document.querySelector('.pending')
const completedListDiv = document.querySelector(".completed");

export const renderTaskList =()=>{
    const domNodes = getTaskList().map(({title,priority,id})=>{
        return Item(title,priority,id)
    })
    pendingListDiv.innerHTML = domNodes.join('')
}

export const renderCompletedList = () =>{
    const domNodes = getcompletedList().map(({title,priority,id})=>{
        return CompletedItem(title,priority,id)
    })

    completedListDiv.innerHTML = domNodes
    
}