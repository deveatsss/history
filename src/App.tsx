import "./App.css";
import Home from "./Home";
import { worker } from "./mocks/worker";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo/client';

worker.start();

function App() {
  const queryClient = new QueryClient();
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Home/>
        </div>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
