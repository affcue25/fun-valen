import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WRONG = "You make my heart hapy…";
const RIGHT = "happy ❤️";
const PREFIX = "You make my heart ";

export default function TypoLine() {
  const [text, setText] = useState(PREFIX + "hapy…");
  const [phase, setPhase] = useState("show"); // show -> pause -> backspace -> correct

  useEffect(() => {
    const showDone = setTimeout(() => setPhase("pause"), 600);
    return () => clearTimeout(showDone);
  }, []);

  useEffect(() => {
    if (phase !== "pause") return;
    const t = setTimeout(() => setPhase("backspace"), 800);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "backspace") return;
    let i = WRONG.length - 1;
    const interval = setInterval(() => {
      if (i <= PREFIX.length) {
        clearInterval(interval);
        setPhase("correct");
        return;
      }
      i--;
      setText(WRONG.slice(0, i) + "…");
    }, 80);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "correct") return;
    setText(PREFIX + RIGHT);
  }, [phase]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        margin: "0.75rem 0",
        lineHeight: 1.6,
      }}
    >
      {text}
    </motion.p>
  );
}
