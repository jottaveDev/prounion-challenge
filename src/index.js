import express from 'express';
import {
  CreateTaskController,
  DeleteTaskController,
  GetTasksController,
  UpdateTaskController,
} from './controllers/index.js';
import {
  CreateTaskRepository,
  DeleteTaskRepository,
  GetTaskByIdRepository,
  GetTaskByTitleRepository,
  GetTasksRepository,
  UpdateTaskRepository,
} from './repositories/index.js';
import {
  CreateTaskUseCase,
  DeleteTaskUseCase,
  GetTasksUseCase,
  UpdateTaskUseCase,
} from './use-cases/index.js';

const app = express();
app.use(express.json());

const database = {
  data: [],
};

app.get('/tasks', async (request, response) => {
  const getTasksRepository = new GetTasksRepository(database);
  const getTasksUseCase = new GetTasksUseCase(getTasksRepository);
  const getTasksController = new GetTasksController(getTasksUseCase);
  const { status, body } = await getTasksController.execute();
  response.status(status).send(body);
});

app.post('/tasks', async (request, response) => {
  const createTaskRepository = new CreateTaskRepository(database);
  const getTaskByTitleRepository = new GetTaskByTitleRepository(database);
  const createTaskUseCase = new CreateTaskUseCase(
    createTaskRepository,
    getTaskByTitleRepository,
  );
  const createTaskController = new CreateTaskController(createTaskUseCase);
  const { status, body } = await createTaskController.execute(request);
  response.status(status).send(body);
});

app.put('/tasks/:id', async (request, response) => {
  const updatedTaskRepository = new UpdateTaskRepository(database);
  const getTaskByIdRepository = new GetTaskByIdRepository(database);
  const updateTaskUseCase = new UpdateTaskUseCase(
    updatedTaskRepository,
    getTaskByIdRepository,
  );
  const updatedTaskController = new UpdateTaskController(updateTaskUseCase);
  const { status, body } = await updatedTaskController.execute(request);
  response.status(status).send(body);
});

app.delete('/tasks/:id', async (request, response) => {
  const deleteTaskRepository = new DeleteTaskRepository(database);
  const getTaskByIdRepository = new GetTaskByIdRepository(database);
  const deleteTaskUseCase = new DeleteTaskUseCase(
    deleteTaskRepository,
    getTaskByIdRepository,
  );
  const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);
  const { status, body } = await deleteTaskController.execute(request);
  response.status(status).send(body);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
