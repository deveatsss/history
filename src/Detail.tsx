import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data } = useQuery(
    ["task", "detail", id],
    async () =>
      await fetch(`/task/${id}`).then(
        (res) => res.json() as Promise<{ data: Task }>
      )
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {data?.data.title}
    </div>
  );
}

export default Detail;
