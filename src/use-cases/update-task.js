import { TaskNotFoundError } from '../errors/task.js';

export class UpdateTaskUseCase {
  constructor(updateTaskRepository, getTaskByIdRepository) {
    this.updateTaskRepository = updateTaskRepository;
    this.getTaskByIdRepository = getTaskByIdRepository;
  }

  async execute(taskId, taskParams) {
    if (!taskId) {
      throw new Error('Task id is required');
    }
    if (!taskParams) {
      throw new Error('Task params is required');
    }
    const idExists = await this.getTaskByIdRepository.execute(taskId);
    if (!idExists) {
      throw new TaskNotFoundError(taskId);
    }
    const updatedTask = this.updateTaskRepository.execute(taskId, taskParams);
    return updatedTask;
  }
}
