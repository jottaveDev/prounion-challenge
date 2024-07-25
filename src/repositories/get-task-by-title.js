export class GetTaskByTitleRepository {
  constructor(database) {
    this.database = database;
  }

  async execute(taskParams) {
    const task = this.database.data.find(
      (task) => task.title === taskParams.title,
    );
    return task;
  }
}
