export class GetTaskByIdRepository {
  constructor(database) {
    this.database = database;
  }

  async execute(taskId) {
    const task = this.database.data.find((task) => task.id === taskId);
    return task;
  }
}
