import { Routes, Route } from "react-router-dom";
import * as lazy from "./lazy";
import NotFound from "../pages/NotFound";
import BaseLayout from "../components/layouts/BaseLayout";

const PageRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<BaseLayout />}>
        <Route index element={<lazy.Home />} />
        <Route path="dashboard/*" element={<lazy.Dashboard />} />
        <Route path="post" element={<lazy.PostPage />} />
        <Route path="post/:id" element={<lazy.PostDetailPage />} />
      </Route>

      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
