import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import Surprise from "./pages/Surprise";
import Quiz from "./pages/Quiz";
import Feelings from "./pages/Feelings";
import Valentine from "./pages/Valentine";
import Yes from "./pages/Yes";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/surprise" element={<Surprise />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/feelings" element={<Feelings />} />
          <Route path="/valentine" element={<Valentine />} />
          <Route path="/yes" element={<Yes />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
