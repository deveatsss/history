import { worker } from "./mocks/worker";
import BaseRoute from "./Route";
import Background from "./Background";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo/client";

worker.start();

function App() {
  const queryClient = new QueryClient();
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
          }}
        >
          <Background />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
          >
            <BaseRoute />
          </div>
        </div>
        <div id="modal-root"></div>
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
