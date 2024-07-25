export class GetTasksRepository {
  constructor(database) {
    this.database = database;
  }

  async execute() {
    const tasks = this.database.data.map((task) => task);
    return tasks;
  }
}
