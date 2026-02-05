import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ROUTE_STEPS = {
  "/": 1,
  "/surprise": 2,
  "/quiz": 3,
  "/feelings": 4,
  "/choice": 5,
  "/loading": 6,
  "/memory": 7,
  "/valentine": 8,
  "/yes": 9,
};

const SUB_LABELS = {
  1: "Just getting started…",
  2: "Rising…",
  3: "Getting warm 🔥",
  4: "Dangerously high 😳",
  5: "Critical levels reached 🚨",
  6: "Off the charts!",
  7: "Memory lane 🖼️",
  8: "Maximum cuteness 💘",
  9: "100% ❤️",
};

export default function LoveMeter() {
  const location = useLocation();
  const step = ROUTE_STEPS[location.pathname] ?? 0;
  const total = 9;
  const percent = step === 0 ? 0 : Math.round(10 + (step / total) * 90);
  const subLabel = SUB_LABELS[step] || "";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0.75rem 1rem",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: "24rem", margin: "0 auto" }}>
        <p
          style={{
            margin: 0,
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--valentine-dark)",
            marginBottom: "0.25rem",
          }}
        >
          Cuteness Level
        </p>
        <div
          style={{
            height: "8px",
            borderRadius: "999px",
            background: "rgba(255,107,157,0.2)",
            overflow: "hidden",
          }}
        >
          <motion.div
            initial={false}
            animate={{ width: `${percent}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 25 }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #ff6b9d, #e84393)",
              borderRadius: "999px",
            }}
          />
        </div>
        {subLabel && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={step}
            style={{
              margin: "0.25rem 0 0",
              fontSize: "0.7rem",
              color: "var(--valentine-rose)",
              fontWeight: 500,
            }}
          >
            {subLabel}
          </motion.p>
        )}
      </div>
    </div>
  );
}
