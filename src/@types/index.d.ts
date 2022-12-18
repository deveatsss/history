export {};

declare global {
  type Nullable<T> = T | null | undefined;

  type Task = {
    id: string;
    title: string;
    description: string;
    creator: "dobby" | "leo";
    createdDt: Date;
    placeName?: string;
    coordinate?: {
      latitude: number;
      longitude: number;
    };
    editedDt?: Nullable<Date>;
    status: "active" | "deactive";
  };

  type CreateTask = Pick<
    Task,
    "title" | "description" | "creator" | "placeName"
  >;
}
