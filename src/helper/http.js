export const notFound = () => ({
  status: 404,
  body: 'Task not found',
});

export const created = (body) => ({
  status: 201,
  body,
});

export const badRequest = (body) => ({
  status: 400,
  body,
});

export const serverError = () => ({
  status: 500,
  body: { message: 'Internal server error' },
});

export const ok = (body) => ({
  status: 200,
  body,
});
