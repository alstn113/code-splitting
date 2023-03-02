import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./pages/NotFound";
import BaseLayout from "./components/layouts/BaseLayout";
import PostPage from "./pages/PostPage";
import PostDetailPage from "./pages/PostDetailPage";
import Layout from "./components/layouts/Layout";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route
          path=""
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="dashboard/*"
          element={
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="post"
          element={
            <Suspense fallback={<Loading />}>
              <PostPage />
            </Suspense>
          }
        />
        <Route path="post/:id" element={<PostDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
