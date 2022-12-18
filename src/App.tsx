import { worker } from "./mocks/worker";
import BaseRoute from "./Route";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo/client";

worker.start();

function App() {
  const queryClient = new QueryClient();
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
          <div className="bg-amber-300">asdfasd</div>
        <BaseRoute/>
        <div id="modal-root"></div>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
