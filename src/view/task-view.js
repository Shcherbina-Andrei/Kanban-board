import {createElement} from '../render';
import {TASK_STATUS} from '../const';

const createTaskTemplate = (task) => {
  let taskClass;
  switch(task.group) {
    case TASK_STATUS.Processing:
      taskClass = 'task--processing';
      break;
    case TASK_STATUS.Done:
      taskClass = 'task--done';
      break;
    case TASK_STATUS.Basket:
      taskClass = 'task--basket';
      break;
    default:
      taskClass = '';
      break;
  }
  return (`
  <div class="taskboard__item task ${taskClass}">
    <div class="task__body">
      <p class="task__view">${task.description}</p>
      <input class="task__input" type="text" value=${task.description}>
    </div>
    <button class="task__edit" type="button" aria-label="Изменить"></button>
  </div>
`);};

export default class TaskView {
  constructor(task) {
    this.task = task;
  }

  getTemplate() {
    return createTaskTemplate(this.task);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
