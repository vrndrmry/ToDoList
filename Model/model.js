let taskList = [];
let completedTask =[]

export const addTask = (title) => {
  const taskId = `${
    parseInt(Math.random() * 1000000000000000) - new Date().getTime()
  }`;

  taskList.push({
    title,
    priority: "medium",
    id: taskId,
  });
};

export const getTaskList = () => taskList;

export const setPriority = (id, priority) => {
  taskList = taskList.map((item) => {
    if (item.id === id) {
      return { ...item, priority };
    }
    return item;
  });
};

export const removeItm = (itemId) => {
  const confirm = window.confirm("Do you want to delete this?");
  if (confirm) {
    taskList = taskList.filter((item) => item.id !== itemId);
    return true;
  }

  return false;
};

export const addToCompletedList =(itemId)=>{
const getItem = taskList.find(({id}) => id === itemId)
taskList=taskList.filter(({id})=>id!==itemId)
completedTask =[getItem,...completedTask]
}

export const getcompletedList = () => completedTask

export const clearCompleted = () => {
    completedTask = []
}