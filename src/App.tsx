import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { NotFound, TransactionHistory, Account } from "./screens";

const queryClient = new QueryClient();

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/account/" element={<Account />} />
          <Route path="/account/:address" element={<TransactionHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

    <ToastContainer />
  </>
);

export { App };
