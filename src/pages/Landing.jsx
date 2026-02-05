import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "../styles/global.css";
import "../styles/animations.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <PageWrapper showHearts gradient="default">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        💌 Hey you… I made something just for you
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Trust me, you'll like this 😉
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button
          className="btn btn-primary animate-bounce-soft"
          onClick={() => navigate("/surprise")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
        >
          Start
        </motion.button>
      </motion.div>
    </PageWrapper>
  );
}
