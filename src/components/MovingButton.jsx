import { useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function MovingButton({ onHover, onClick, className = "", style = {} }) {
  const [position, setPosition] = useState({ top: "55%", left: "60%" });
  const [clicked, setClicked] = useState(false);
  const [label, setLabel] = useState("No 🙄");

  const moveButton = useCallback(() => {
    onHover?.();
    setPosition({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  }, [onHover]);

  const handleClick = () => {
    onClick?.();
    setClicked(true);
    setLabel("Not happening 😏");
    setPosition({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  };

  return (
    <motion.button
      type="button"
      className={className}
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
        ...style,
      }}
      onMouseEnter={moveButton}
      onTouchStart={(e) => {
        e.preventDefault();
        moveButton();
      }}
      onClick={handleClick}
      animate={clicked ? { scale: 0.9 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      whileHover={{ scale: 1.05 }}
    >
      {label}
    </motion.button>
  );
}
