import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Page404 from "./pages/404/404";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AllArticle from "./pages/allArticle/index";
import NewArticle from "./pages/newArticle";
import EditArticle from "./pages/editArticle";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <div className="app">
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path="/articles"
              element={
                <Layout isMobile={isMobile}>
                  <AllArticle isMobile={isMobile} />
                </Layout>
              }
            />
            <Route
              path="/articles/page/:page"
              element={
                <Layout isMobile={isMobile}>
                  <AllArticle isMobile={isMobile} />
                </Layout>
              }
            />
            <Route
              path="/newArticle"
              element={
                <Layout isMobile={isMobile}>
                  <NewArticle isMobile={isMobile} />
                </Layout>
              }
            />
            <Route
              path="/articles/edit/:slug"
              element={
                <Layout isMobile={isMobile}>
                  <EditArticle isMobile={isMobile} />
                </Layout>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path="/login" element={<Login isMobile={isMobile} />} />
          <Route path="/register" element={<Register isMobile={isMobile} />} />
        </Routes>
      </div>
    </>
  );
}

const isLogin = () => !!localStorage.getItem("token");
const PrivateRoute = () => {
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isLogin() ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
