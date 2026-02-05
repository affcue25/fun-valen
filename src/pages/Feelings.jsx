import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import TypewriterText from "../components/TypewriterText";
import "../styles/global.css";

const lines = [
  "You make my days brighter…",
  "You make me laugh without trying…",
  "And honestly… I really like you ❤️",
];

export default function Feelings() {
  const navigate = useNavigate();

  return (
    <PageWrapper gradient="feelings">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ marginBottom: "1rem" }}
      >
        💕
      </motion.h1>
      <TypewriterText lines={lines} lineDelay={900} />
      <motion.button
        className="btn btn-primary"
        onClick={() => navigate("/valentine")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        👉 Continue
      </motion.button>
    </PageWrapper>
  );
}
