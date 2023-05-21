import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import PageSuspense from "./components/PageSuspense/PageSuspense";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <GlobalStyles />
        {/* Page Suspense */}
        <PageSuspense.Provider>
          <Suspense>
            <App />
          </Suspense>
        </PageSuspense.Provider>
        {/*  */}
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
