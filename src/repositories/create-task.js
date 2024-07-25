export class CreateTaskRepository {
  constructor(database) {
    this.database = database;
  }

  async execute(taskParams) {
    const newTask = {
      id: this.database.length + 1,
      ...taskParams,
    };
    this.database.data.push(newTask);
    const [createdTask] = this.database.data.filter(
      (task) => (task.id = newTask.id),
    );
    return [createdTask];
  }
}
