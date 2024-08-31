import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SenderDashboard from "./pages/SenderDashboard";
import ReceiverDashboard from "./pages/ReceiverDashboard";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        className="bg-amber-100"
        style={{ height: "calc(100vh - 154px)", overflow: "auto" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard route with dynamic type */}
          <Route path="/dashboard/" element={<Dashboard />}>
            {/* Nested routes under dashboard */}
            <Route path="sender" element={<SenderDashboard />} />
            <Route path="receiver" element={<ReceiverDashboard />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
