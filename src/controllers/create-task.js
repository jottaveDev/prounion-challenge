import { TaskAlreadyInUseError } from '../errors/task.js';
import { badRequest, created, serverError } from '../helper/http.js';

export class CreateTaskController {
  constructor(createTaskUseCase) {
    this.createTaskUseCase = createTaskUseCase;
  }

  async execute(httpRequest) {
    try {
      const params = httpRequest.body;
      const createdTask = await this.createTaskUseCase.execute(params);
      return created(createdTask);
    } catch (error) {
      if (error instanceof TaskAlreadyInUseError) {
        return badRequest({ message: error.message });
      }
      console.error(error);
      return serverError();
    }
  }
}
