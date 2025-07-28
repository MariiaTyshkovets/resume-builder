import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/ui/Loader";

const Home = lazy(() => import("../pages/Home"));
const Builder = lazy(() => import("../pages/Builder"));
const Login = lazy(() => import("../pages/Login"));
const Preview = lazy(() => import("../pages/Preview"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const RouterConfig = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);
