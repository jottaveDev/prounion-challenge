import { v4 as uuidv4 } from 'uuid';
import { TaskAlreadyInUseError } from '../errors/task.js';

export class CreateTaskUseCase {
  constructor(createTaskRepository, getTaskByTitleRepository) {
    this.createTaskRepository = createTaskRepository;
    this.getTaskByTitleRepository = getTaskByTitleRepository;
  }

  async execute(taskParams) {
    if (!taskParams.title) {
      throw new Error('Title is required');
    }
    const taskExists = await this.getTaskByTitleRepository.execute(taskParams);
    if (taskExists) {
      throw new TaskAlreadyInUseError(taskParams.title);
    }
    const task = {
      id: uuidv4(),
      ...taskParams,
    };
    const [createdTask] = await this.createTaskRepository.execute(task);
    return createdTask;
  }
}
