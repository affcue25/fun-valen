import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import MovingButton from "../components/MovingButton";
import "../styles/global.css";
import "../styles/animations.css";

export default function Valentine() {
  const navigate = useNavigate();

  return (
    <PageWrapper gradient="valentine">
      <div
        style={{
          position: "relative",
          minHeight: "min(70vh, 420px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "2rem" }}
        >
          💘 Will you be my Valentine?
        </motion.h1>

        <div
          className="btn-group"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "120px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.button
            className="btn btn-primary animate-glow"
            onClick={() => navigate("/yes")}
            style={{ position: "relative", zIndex: 2 }}
            whileHover={{ scale: 1.12, boxShadow: "0 0 40px rgba(255, 107, 157, 0.7)" }}
            whileTap={{ scale: 0.98 }}
          >
            Yes 💕
          </motion.button>
          <MovingButton
            className="btn"
            style={{
              background: "rgba(0,0,0,0.08)",
              color: "var(--valentine-dark)",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              fontWeight: 600,
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </PageWrapper>
  );
}
