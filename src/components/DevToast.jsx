import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEV_KEY = "Ctrl+Shift+H";

export default function DevToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let hideTimer;
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "h") {
        e.preventDefault();
        setShow(true);
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => setShow(false), 3000);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          style={{
            position: "fixed",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(45, 19, 44, 0.95)",
            color: "white",
            padding: "0.6rem 1.2rem",
            borderRadius: "999px",
            fontSize: "0.9rem",
            fontWeight: 500,
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            zIndex: 10001,
          }}
        >
          Built with love (and React) 💻❤️
        </motion.div>
      )}
    </AnimatePresence>
  );
}
