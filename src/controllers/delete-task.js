import { notFound, ok } from '../helper/http.js';

export class DeleteTaskController {
  constructor(deleteTaskUseCase) {
    this.deleteTaskUseCase = deleteTaskUseCase;
  }

  async execute(httpRequest) {
    try {
      const { id } = httpRequest.params;
      await this.deleteTaskUseCase.execute(id);
      return ok({
        body: 'Task deleted',
      });
    } catch (error) {
      console.log(error);
      return notFound();
    }
  }
}
