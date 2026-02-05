import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/animations.css";

const defaultLines = [
  "You make my days brighter…",
  "You make me laugh without trying…",
  "And honestly… I really like you ❤️",
];

export default function TypewriterText({ lines = defaultLines, lineDelay = 800, onComplete }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= lines.length) {
      onComplete?.();
      return;
    }
    const t = setTimeout(() => setVisibleCount((c) => c + 1), lineDelay);
    return () => clearTimeout(t);
  }, [visibleCount, lines.length, lineDelay, onComplete]);

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <AnimatePresence mode="wait">
        {lines.slice(0, visibleCount).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              margin: "0.75rem 0",
              lineHeight: 1.6,
            }}
          >
            {line}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
