import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import TypewriterText from "../components/TypewriterText";
import TypoLine from "../components/TypoLine";
import "../styles/global.css";

const lines = [
  "You make my days brighter…",
  "You make me laugh without trying…",
];

export default function Feelings() {
  const navigate = useNavigate();

  return (
    <PageWrapper showHearts gradient="feelings">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ marginBottom: "1rem" }}
      >
        💕
      </motion.h1>
      <TypewriterText lines={lines} lineDelay={900} />
      <TypoLine />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", margin: "0.75rem 0", lineHeight: 1.6 }}
      >
        And honestly… I really like you ❤️
      </motion.p>
      <motion.button
        className="btn btn-primary"
        onClick={() => navigate("/choice")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        👉 Continue
      </motion.button>
    </PageWrapper>
  );
}
