import { rest } from "msw";

const todos = ["React", "Svelte", "Vue", "Node"];

export const handlers = [
  // 할일 목록
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: todos }));
  }),

  // 할일 추가
  rest.post("/todos", (req, res, ctx) => {
    return res(ctx.status(201));
  }),
];
