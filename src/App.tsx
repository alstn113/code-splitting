import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Help = lazy(() => import("./pages/Help"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={
            <Suspense fallback={<div>home loading</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<div>about loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="help"
          element={
            <Suspense fallback={<div>help loading...</div>}>
              <Help />
            </Suspense>
          }
        />
        <Route
          path="dashboard/*"
          element={
            <Suspense fallback={<div>dashboard loading...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
