import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "../styles/global.css";

const options = ["You 😌", "Still you 😌", "Obviously you 😌"];

export default function Quiz() {
  const navigate = useNavigate();

  return (
    <PageWrapper gradient="quiz">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Who is the cutest person in the world?
      </motion.h1>
      <motion.div
        className="btn-group"
        style={{ marginTop: "1.5rem" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {options.map((text, i) => (
          <motion.button
            key={text}
            className="btn btn-primary"
            onClick={() => navigate("/feelings")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            {text}
          </motion.button>
        ))}
      </motion.div>
    </PageWrapper>
  );
}
