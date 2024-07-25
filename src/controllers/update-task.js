import { TaskNotFoundError } from '../errors/task.js';
import { badRequest, created, serverError } from '../helper/http.js';

export class UpdateTaskController {
  constructor(updateTaskUseCase) {
    this.updateTaskUseCase = updateTaskUseCase;
  }

  async execute(httpRequest) {
    try {
      const { id } = httpRequest.params;
      const taskParams = httpRequest.body;
      const task = await this.updateTaskUseCase.execute(id, taskParams);
      return created(task);
    } catch (error) {
      console.error(error);
      if (error instanceof TaskNotFoundError) {
        return badRequest({ message: error.message });
      }
      return serverError();
    }
  }
}
