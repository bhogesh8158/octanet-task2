document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const deadlineInput = document.getElementById('deadline-input');
    const priorityInput = document.getElementById('priority-input');
    const labelInput = document.getElementById('label-input');
    const tasksContainer = document.getElementById('tasks-container');
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const taskValue = taskInput.value.trim();
      const deadlineValue = deadlineInput.value;
      const priorityValue = priorityInput.value;
      const labelValue = labelInput.value.trim();
  
      if (!taskValue || !deadlineValue || !priorityValue) {
        alert('Please fill in all required fields.');
        return;
      }
  
      const taskElement = createTaskElement(taskValue, deadlineValue, priorityValue, labelValue);
      tasksContainer.appendChild(taskElement);
  
      taskForm.reset();
    });
  
    function createTaskElement(task, deadline, priority, label) {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
  
      taskElement.innerHTML = `
        <div>
          <span><strong>Task:</strong> ${task}</span>
          <span><strong>Deadline:</strong> ${deadline}</span>
          <span><strong>Priority:</strong> ${priority}</span>
          <span><strong>Label:</strong> ${label}</span>
        </div>
        <div class="actions">
          <button class="complete-btn">Complete</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
  
      taskElement.querySelector('.complete-btn').addEventListener('click', () => {
        taskElement.classList.toggle('complete');
      });
  
      taskElement.querySelector('.delete-btn').addEventListener('click', () => {
        tasksContainer.removeChild(taskElement);
      });
  
      return taskElement;
    }
  });
  