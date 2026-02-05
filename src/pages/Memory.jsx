import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "../styles/global.css";

const SLIDES = [
  "Remember our first chat?",
  "Our inside jokes 😄",
  "I love you ❤️",
];

export default function Memory() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < SLIDES.length - 1) setIndex((i) => i + 1);
    else navigate("/valentine");
  };

  return (
    <PageWrapper gradient="memory">
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--valentine-rose)",
          marginBottom: "1rem",
        }}
      >
        Memory Lane 🖼️
      </p>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.35rem)",
            marginBottom: "1.5rem",
            minHeight: "3rem",
          }}
        >
          {SLIDES[index]}
        </motion.p>
      </AnimatePresence>
      <motion.button
        className="btn btn-primary"
        onClick={next}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {index < SLIDES.length - 1 ? "Next 💕" : "Continue →"}
      </motion.button>
    </PageWrapper>
  );
}
