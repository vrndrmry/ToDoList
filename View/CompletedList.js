const CompletedItem = (title, priority="medium", id) => {
    return `<div class="task_bar" data-id=${id} draggable="true">
    <div class= "status done"></div>
    <div id="title " >
      <p>
        ${title}
      </p>
    </div>
    <p>Completed</p>
  </div>`
  }
  
  export default CompletedItem;