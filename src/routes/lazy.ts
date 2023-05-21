import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const Dashboard = lazy(() => import("../pages/Dashboard"));
export const PostDetailPage = lazy(() => import("../pages/PostDetailPage"));
export const PostPage = lazy(() => import("../pages/PostPage"));
