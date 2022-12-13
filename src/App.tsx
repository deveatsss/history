import "./App.css";
import Home from "./Home";
import { worker } from "./mocks/worker";
import { QueryClient, QueryClientProvider } from "react-query";

worker.start();

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
