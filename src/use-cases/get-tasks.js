export class GetTasksUseCase {
  constructor(getTasksRepository) {
    this.getTasksRepository = getTasksRepository;
  }

  async execute(taskParams) {
    const tasks = await this.getTasksRepository.execute(taskParams);
    return tasks;
  }
}
