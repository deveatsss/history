import { useQuery } from "react-query";

async function fetchTodo() {
  return await fetch("/todos").then((response) => response.json());
}

function Home() {
  const { data, isLoading } = useQuery("todos", fetchTodo);

  console.log(data);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return <div className="App">Hello world~</div>;
}

export default Home;
