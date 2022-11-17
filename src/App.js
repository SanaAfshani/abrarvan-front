import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Page404 from "./pages/404/404";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AllArticle from "./pages/allArticle/index";
import NewArticle from "./pages/newArticle";
import EditArticle from "./pages/editArticle";
function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path="/articles"
              element={
                <Layout>
                  <AllArticle />
                </Layout>
              }
            />
            <Route
              path="/articles/page/:page"
              element={
                <Layout>
                  <AllArticle />
                </Layout>
              }
            />
            <Route
              path="/newArticle"
              element={
                <Layout>
                  <NewArticle />
                </Layout>
              }
            />
            <Route
              path="/articles/edit/:slug"
              element={
                <Layout>
                  <EditArticle />
                </Layout>
              }
            />
            <Route element={<Page404 />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
