export class TaskAlreadyInUseError extends Error {
  constructor(title) {
    super(`The task with title ${title} already exists`);
    this.name = 'TaskAlreadyInUseError';
  }
}

export class TaskNotFoundError extends Error {
  constructor(id) {
    super(`The task with id ${id} was not found`);
    this.name = 'TaskNotFoundError';
  }
}
