import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import MovingButton from "../components/MovingButton";
import "../styles/global.css";
import "../styles/animations.css";

export default function Valentine() {
  const navigate = useNavigate();
  const [reverseClicked, setReverseClicked] = useState(false);
  const [yesBoost, setYesBoost] = useState(1);
  const [noSpeed, setNoSpeed] = useState(1);
  const [noGaveUp, setNoGaveUp] = useState(false);

  const handleReverseClick = () => {
    if (reverseClicked) return;
    setReverseClicked(true);
    alert("Wow… you never listen 😄");
    setYesBoost(1.25);
    setNoSpeed(1.8);
  };

  return (
    <PageWrapper showHearts gradient="valentine">
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

        {!reverseClicked && (
          <motion.button
            type="button"
            onClick={handleReverseClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              marginBottom: "1rem",
              padding: "0.4rem 0.8rem",
              fontSize: "0.85rem",
              background: "rgba(0,0,0,0.06)",
              color: "var(--valentine-dark)",
              borderRadius: "999px",
              border: "1px dashed rgba(0,0,0,0.15)",
            }}
          >
            Don't click this 👀
          </motion.button>
        )}

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
            animate={{
              scale: noGaveUp ? 1.2 : yesBoost,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{
              scale: (noGaveUp ? 1.2 : yesBoost) * 1.08,
              boxShadow: "0 0 40px rgba(255, 107, 157, 0.7)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            {noGaveUp ? "Obviously Yes 💖" : "Yes 💕"}
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
            speedMultiplier={noSpeed}
            onGiveUp={() => setNoGaveUp(true)}
          />
        </div>
      </div>
    </PageWrapper>
  );
}
