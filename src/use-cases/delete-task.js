import { TaskNotFoundError } from '../errors/task.js';

export class DeleteTaskUseCase {
  constructor(deleteTaskRepository, getTaskByIdRepository) {
    this.deleteTaskRepository = deleteTaskRepository;
    this.getTaskByIdRepository = getTaskByIdRepository;
  }

  async execute(taskId) {
    const isValidId = await this.getTaskByIdRepository.execute(taskId);
    if (!isValidId) {
      throw new TaskNotFoundError(taskId);
    }
    const task = await this.deleteTaskRepository.execute(taskId);
    return task;
  }
}
