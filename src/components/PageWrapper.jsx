import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import "../styles/global.css";
import "../styles/animations.css";

export default function PageWrapper({ children, gradient = "default", showHearts = false }) {
  const gradients = {
    default: "linear-gradient(135deg, #fff5f7 0%, #ffe4ec 50%, #ffd6e0 100%)",
    surprise: "linear-gradient(135deg, #fff9e6 0%, #ffe4b5 50%, #ffd699 100%)",
    quiz: "linear-gradient(135deg, #fff0f5 0%, #ffd6e8 50%, #ffb3d9 100%)",
    feelings: "linear-gradient(135deg, #f0f4ff 0%, #e8eeff 50%, #dde5ff 100%)",
    valentine: "linear-gradient(135deg, #ffebf0 0%, #ffcce0 50%, #ffb3d0 100%)",
    yes: "linear-gradient(135deg, #ff6b9d 0%, #e84393 50%, #fd79a8 100%)",
  };

  const bg = gradients[gradient] || gradients.default;

  return (
    <motion.div
      className="page"
      style={{
        background: bg,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {showHearts && <FloatingHearts />}
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "32rem" }}>
        {children}
      </div>
    </motion.div>
  );
}
