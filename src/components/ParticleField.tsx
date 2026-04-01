import { useEffect, useRef } from "react";

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; size: number; speedY: number; speedX: number; opacity: number; hue: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        hue: Math.random() > 0.6 ? 45 : 180,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const light = p.hue === 180 ? "50%" : "55%";
        ctx.fillStyle = `hsla(${p.hue}, 100%, ${light}, ${p.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${p.hue}, 100%, ${light}, 0.5)`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />;
};

export default ParticleField;
