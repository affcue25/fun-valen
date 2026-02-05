import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "../styles/global.css";

const MESSAGES = [
  "Checking if she's cute enough…",
  "Calculating compatibility…",
  "Consulting the universe 🌌",
];

export default function Loading() {
  const navigate = useNavigate();
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % MESSAGES.length);
    }, 1800);
    return () => clearInterval(msgInterval);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setProgress(49), 1400);
    const t2 = setTimeout(() => {
      setProgress(100);
      setDone(true);
    }, 13500);
    const t3 = setTimeout(() => navigate("/memory"), 14200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [navigate]);

  return (
    <PageWrapper showHearts gradient="loading">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ width: "100%" }}
      >
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "var(--valentine-dark)",
            marginBottom: "1.5rem",
            minHeight: "2rem",
          }}
        >
          {MESSAGES[messageIndex]}
        </motion.p>
        <div
          style={{
            height: "12px",
            borderRadius: "999px",
            background: "rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{
              width: { duration: 0.8, ease: "easeOut" },
            }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #ff6b9d, #e84393)",
              borderRadius: "999px",
            }}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "var(--valentine-rose)" }}
        >
          {progress < 50 ? "Almost there…" : done ? "Ready! 💘" : "…"}
        </motion.p>
      </motion.div>
    </PageWrapper>
  );
}
