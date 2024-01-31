const Item = (title, priority="medium", id) => {
    return `<div class="task_bar" data-id=${id} draggable="true">
    <div class= "status ${priority}"></div>
    <div id="title " class="title">
      <p>
        ${title}
      </p>
    </div>
    <div class="priority" id="priority ">
      <span id="high" class="high"></span>
      <span id="medium" class="medium"></span>
      <span id="low" class="low"></span>
    </div>
    <a href="" id="remove" class="remove">Remove</a>
  </div>`
}

export default Item;
