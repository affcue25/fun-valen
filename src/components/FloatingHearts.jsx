import { useEffect, useRef } from "react";

export default function FloatingHearts() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let hearts = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createHeart = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 12 + 6,
      speed: Math.random() * 0.5 + 0.3,
      opacity: Math.random() * 0.4 + 0.2,
      drift: (Math.random() - 0.5) * 0.5,
    });

    const drawHeart = (x, y, size) => {
      ctx.save();
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(
        x - size / 2,
        y + (size + topCurveHeight) / 2,
        x,
        y + (size + topCurveHeight) / 1.2,
        x,
        y + size
      );
      ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.2, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.fill();
      ctx.restore();
    };

    const init = () => {
      setCanvasSize();
      hearts = Array.from({ length: 15 }, createHeart);
    };

    const animate = () => {
      if (!ctx || !canvas.width) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hearts.forEach((h) => {
        ctx.fillStyle = `rgba(255, 107, 157, ${h.opacity})`;
        drawHeart(h.x, h.y, h.size);
        h.y -= h.speed;
        h.x += h.drift;
        if (h.y < -20) {
          h.y = canvas.height + 10;
          h.x = Math.random() * canvas.width;
        }
        if (h.x < -20 || h.x > canvas.width + 20) h.drift *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", setCanvasSize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden
    />
  );
}
