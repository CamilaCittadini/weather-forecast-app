import "./App.css";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { Layout } from "./components/layout/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
