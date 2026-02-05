import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "../styles/global.css";

export default function Surprise() {
  const navigate = useNavigate();
  const [swap, setSwap] = useState(false);

  const handleNo = () => {
    alert("Nice try 😜");
    setSwap((s) => !s);
  };

  const handleYes = () => navigate("/quiz");

  return (
    <PageWrapper showHearts gradient="surprise">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Do you like surprises?
      </motion.h1>
      <motion.div
        className="btn-group"
        style={{ marginTop: "1.5rem", display: "flex", flexDirection: swap ? "column-reverse" : "column", gap: "1rem" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.button
          className="btn btn-primary"
          onClick={handleYes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Yes 😍
        </motion.button>
        <motion.button
          className="btn"
          onClick={handleNo}
          style={{
            background: "rgba(0,0,0,0.06)",
            color: "var(--valentine-dark)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          No 🙄
        </motion.button>
      </motion.div>
    </PageWrapper>
  );
}
