import { badRequest, ok, serverError } from '../helper/http.js';

export class GetTasksController {
  constructor(getTasksUseCase) {
    this.getTasksUseCase = getTasksUseCase;
  }

  async execute() {
    try {
      const tasks = await this.getTasksUseCase.execute();
      if (tasks.length === 0) {
        return badRequest({ message: 'No tasks found' });
      }
      return ok(tasks);
    } catch (error) {
      console.log(error);
      return serverError();
    }
  }
}
