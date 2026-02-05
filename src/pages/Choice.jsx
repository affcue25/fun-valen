import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "../styles/global.css";

const OPTIONS = [
  { label: "Dinner 🍝", value: "dinner" },
  { label: "Movie 🎬", value: "movie" },
  { label: "Surprise 🤫", value: "surprise" },
  { label: "Stay in 💕", value: "stay" },
];

export default function Choice() {
  const navigate = useNavigate();
  const [chosen, setChosen] = useState(false);

  const handleChoice = () => {
    setChosen(true);
    setTimeout(() => navigate("/loading"), 1200);
  };

  return (
    <PageWrapper showHearts gradient="choice">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        What do you want to do on Valentine's Day?
      </motion.h1>
      {chosen ? (
        <motion.p
          key="great"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ fontSize: "1.25rem", marginTop: "1rem", color: "var(--valentine-rose)" }}
        >
          Great choice 😌
        </motion.p>
      ) : (
        <motion.div
          className="btn-group"
          style={{ marginTop: "1.5rem", flexDirection: "column" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {OPTIONS.map((opt, i) => (
            <motion.button
              key={opt.value}
              className="btn btn-primary"
              onClick={handleChoice}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              {opt.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </PageWrapper>
  );
}
