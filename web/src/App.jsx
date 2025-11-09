import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard.jsx";
import CourseDetail from "./components/CourseDetail";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      {/* <Header /> */}
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
