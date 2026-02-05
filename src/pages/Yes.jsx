import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import celebrationGif from "../assets/celebration.gif";
import "../styles/global.css";

function fireConfetti() {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#ff6b9d", "#e84393", "#fd79a8", "#ffeaa7"],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#ff6b9d", "#e84393", "#fd79a8", "#ffeaa7"],
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}

export default function Yes() {
  useEffect(() => {
    const t = setTimeout(fireConfetti, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <PageWrapper gradient="yes" showHearts>
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          fontSize: "clamp(1.75rem, 6vw, 2.5rem)",
          color: "white",
          textShadow: "0 2px 20px rgba(0,0,0,0.2)",
          marginBottom: "0.5rem",
        }}
      >
        🎉 SHE SAID YES!!! 💕
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          color: "rgba(255,255,255,0.95)",
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
        }}
      >
        You just made me the happiest person. Let's make every day special. ❤️
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", marginTop: "1rem" }}
      >
        Screenshot this and keep it forever 😄
      </motion.p>
      <motion.img
        src={celebrationGif}
        alt="Celebration"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          marginTop: "1.5rem",
          maxWidth: "100%",
          width: "min(280px, 90vw)",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      />
    </PageWrapper>
  );
}
