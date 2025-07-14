import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[oklch(0.985_0_0)]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;