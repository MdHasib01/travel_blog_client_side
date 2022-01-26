import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog_details" element={<AllBlogs />} />
          <Route path="/blog_details/:id" element={<SingleBlog />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
