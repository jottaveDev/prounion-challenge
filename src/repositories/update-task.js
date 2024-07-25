export class UpdateTaskRepository {
  constructor(database) {
    this.database = database;
  }

  execute(taskId, taskParams) {
    const taskIndex = this.database.data.findIndex(
      (task) => task.id === taskId,
    );
    this.database.data[taskIndex] = {
      id: taskId,
      ...taskParams,
    };
    return this.database.data[taskIndex];
  }
}
