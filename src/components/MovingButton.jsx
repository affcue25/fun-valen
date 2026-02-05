import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MovingButton({
  onHover,
  onClick,
  onGiveUp,
  className = "",
  style = {},
  speedMultiplier = 1,
}) {
  const [position, setPosition] = useState({ top: "55%", left: "60%" });
  const [clicked, setClicked] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [gaveUp, setGaveUp] = useState(false);
  const [label, setLabel] = useState("No 🙄");

  const getMoveAmount = useCallback(() => {
    if (hoverCount >= 6) return 95;
    if (hoverCount >= 3) return 85;
    return 80;
  }, [hoverCount]);

  const moveButton = useCallback(() => {
    if (gaveUp) return;
    const next = hoverCount + 1;
    setHoverCount(next);
    onHover?.(next);

    if (next >= 7) {
      setLabel("Okay okay 😩 I give up");
      setGaveUp(true);
      setTimeout(() => onGiveUp?.(), 1200);
      return;
    }

    const range = getMoveAmount();
    setPosition({
      top: `${Math.random() * range + (100 - range) / 2}%`,
      left: `${Math.random() * range + (100 - range) / 2}%`,
    });
  }, [hoverCount, gaveUp, onHover, onGiveUp, getMoveAmount]);

  const handleClick = () => {
    if (gaveUp) return;
    onClick?.();
    setClicked(true);
    setLabel("Not happening 😏");
    const range = getMoveAmount();
    setPosition({
      top: `${Math.random() * range + (100 - range) / 2}%`,
      left: `${Math.random() * range + (100 - range) / 2}%`,
    });
  };

  return (
    <AnimatePresence>
      {!gaveUp ? (
        <motion.button
          key="no-btn"
          type="button"
          className={className}
          style={{
            position: "fixed",
            top: position.top,
            left: position.left,
            transform: "translate(-50%, -50%)",
            transition: `top ${0.15 / speedMultiplier}s ease-out, left ${0.15 / speedMultiplier}s ease-out`,
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
      ) : (
        <motion.div
          key="give-up"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: position.top,
            left: position.left,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          <span style={{ fontSize: "0.9rem", color: "var(--valentine-dark)" }}>{label}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
