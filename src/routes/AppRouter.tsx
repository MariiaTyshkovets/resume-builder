import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Builder = lazy(() => import("../pages/Builder"));
const Login = lazy(() => import("../pages/Login"));
const Preview = lazy(() => import("../pages/Preview"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const Loader = () => (
  <div className="spinner">
    <svg viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" />
    </svg>
  </div>
);

export const RouterConfig = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        )}
      />
      <Route
        path="/builder"
        render={() => (
          <Suspense fallback={<Loader />}>
            <Builder />
          </Suspense>
        )}
      />
      <Route
        path="/login"
        render={() => (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        )}
      />
      <Route
        path="/preview"
        render={() => (
          <Suspense fallback={<Loader />}>
            <Preview />
          </Suspense>
        )}
      />
      <Route
        path="*"
        render={() => (
          <Suspense fallback={<Loader />}>
            <NotFoundPage />
          </Suspense>
        )}
      />
    </Switch>
  </Suspense>
);
