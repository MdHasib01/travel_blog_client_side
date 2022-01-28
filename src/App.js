import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import DashboardMain from "./pages/Dashboard/DashboardMian/DashboardMain";
import AddBlogs from "./pages/Dashboard/AddBlogs/AddBlogs";
import ManageBlogs from "./pages/Dashboard/ManageBlogs/ManageBlogs";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import UpdateBlogs from "./pages/Dashboard/UpdateBlogs/UpdateBlogs";
import UpdateAllBlogs from "./pages/Dashboard/UpdateAllBlogs/UpdateAllBlogs";
import UserBlogPost from "./pages/Dashboard/UserBlogPost/UserBlogPost";
import AproveUserBlog from "./pages/Dashboard/AproveUserBlog/AproveUserBlog";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog_details" element={<AllBlogs />} />
            <Route path="/update_blogs/" element={<UpdateAllBlogs />} />
            <Route path="/update_blogs/:id" element={<UpdateBlogs />} />
            <Route
              path="/blog_details/:id"
              element={
                <PrivateRoute>
                  <SingleBlog />
                </PrivateRoute>
              }
            />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                path="/dashboard/dashboard_home"
                element={<DashboardMain />}
              />
              <Route path="/dashboard/add_blogs" element={<AddBlogs />} />
              <Route
                path="/dashboard/user_blog_post"
                element={<UserBlogPost />}
              />
              <Route
                path="/dashboard/aprove_users_blog"
                element={<AproveUserBlog />}
              />
              <Route path="/dashboard/manage_blogs" element={<ManageBlogs />} />
              <Route path="/dashboard/make_admin" element={<MakeAdmin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
