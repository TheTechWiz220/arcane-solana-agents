import { useEffect, useRef } from "react";

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; size: number; speedY: number; speedX: number; opacity: number; hue: number; pulse: number; pulseSpeed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // More particles, varied types
    for (let i = 0; i < 90; i++) {
      const isGold = Math.random() > 0.65;
      const isRune = Math.random() > 0.92;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: isRune ? Math.random() * 1.5 + 1.5 : Math.random() * 2 + 0.4,
        speedY: -(Math.random() * 0.3 + 0.05),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.15,
        hue: isGold ? 51 : 185,
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;
        const pulsedOpacity = p.opacity + Math.sin(p.pulse) * 0.15;

        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const light = p.hue === 185 ? "50%" : "50%";
        ctx.fillStyle = `hsla(${p.hue}, 100%, ${light}, ${Math.max(0, pulsedOpacity)})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${p.hue}, 100%, ${light}, 0.6)`;
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
