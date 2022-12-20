import { rest } from "msw";
import { v4 as uuid } from "uuid";

const tasks: Task[] = [
  {
    id: uuid(),
    title: "덮밥",
    description: "맛있는 덮밥을 먹었다 :)",
    creator: "dobby",
    createdDt: new Date("2022-11-06"),
    placeName: "후라토 식당",
    coordinate: {
      latitude: 37.57469330693263,
      longitude: 126.97329836565751,
    },
    editedDt: new Date(),
    status: "active",
  },
  {
    id: uuid(),
    title: "마라탕",
    description: "맛있는 마라탕을 먹었디.",
    creator: "dobby",
    createdDt: new Date("2022-12-18"),
    placeName: "라향각 마라탕",
    coordinate: {
      latitude: 37.608398,
      longitude: 127.007812,
    },
    editedDt: new Date(),
    status: "active",
  },
  {
    id: uuid(),
    title: "텐동",
    description: "맛있는 텐동을 먹었디.",
    creator: "dobby",
    createdDt: new Date("2022-11-20"),
    placeName: "에도마에텐동 하마다",
    coordinate: {
      latitude: 37.56905981420724,
      longitude: 126.98636012882284,
    },
    editedDt: new Date(),
    status: "active",
  },
];

export const handlers = [
  // 태스크 목록
  rest.get("/task/list", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: tasks }));
  }),

  // 태스크 디테일
  rest.get("/task/:id", (req, res, ctx) => {
    const { id } = req.params;

    const task = tasks.find((task) => task.id === id);
    return res(ctx.status(200), ctx.json({ data: task }));
  }),

  rest.post("/task", (req: { body: CreateTask }, res, ctx) => {
    const { title, description, creator, placeName, createdDt } = req.body;
    const task: Task = {
      id: uuid(),
      title,
      description,
      creator,
      createdDt,
      placeName,
      coordinate: {
        latitude: 20.20202,
        longitude: 404.04,
      },
      editedDt: new Date(),
      status: "active",
    };

    tasks.push(task);
    return res(ctx.status(201));
  }),
];
