import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ExitTrap() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isPastValentine = location.pathname === "/yes";
  const currentPathRef = useRef(location.pathname);

  useEffect(() => {
    currentPathRef.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    if (isPastValentine) return;
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isPastValentine]);

  useEffect(() => {
    if (isPastValentine) return;
    const handlePopState = () => {
      const pathToRestore = currentPathRef.current;
      navigate(pathToRestore);
      setShowModal(true);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isPastValentine, navigate]);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "1rem",
          }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "1.5rem",
              maxWidth: "320px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "1.25rem", margin: "0 0 1rem", fontWeight: 600 }}>
              HEY 😠
            </p>
            <p style={{ margin: "0 0 1.25rem", color: "#555" }}>
              You can't leave before answering
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{
                  padding: "0.6rem 1.2rem",
                  borderRadius: "999px",
                  border: "1px solid #ddd",
                  background: "#f5f5f5",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Fine 🙄
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  navigate("/valentine");
                }}
                style={{
                  padding: "0.6rem 1.2rem",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #ff6b9d, #e84393)",
                  color: "white",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                I'm curious 😏
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
