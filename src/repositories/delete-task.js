export class DeleteTaskRepository {
  constructor(database) {
    this.database = database;
  }

  execute(taskId) {
    const tasks = (this.database.data = this.database.data.filter(
      (task) => task.id !== taskId,
    ));
    return tasks;
  }
}
