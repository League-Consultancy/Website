"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  size: number;
  pulse: number;
  pulseSpeed: number;
}

const NODE_LABELS = ["AI", "Vision", "IoT", "SW", "Mech", "ML", "RPA", "IIoT"];

export default function HeroVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();

    const W = () => canvas.getBoundingClientRect().width;
    const H = () => canvas.getBoundingClientRect().height;

    // Initialize orbital nodes
    const initNodes = () => {
      const w = W();
      const h = H();
      const cx = w / 2;
      const cy = h / 2;
      const baseRadius = Math.min(w, h) * 0.3;

      nodesRef.current = NODE_LABELS.map((label, i) => {
        const angle = (i / NODE_LABELS.length) * Math.PI * 2;
        const radiusVariance = baseRadius * (0.85 + Math.random() * 0.3);
        return {
          x: cx + Math.cos(angle) * radiusVariance,
          y: cy + Math.sin(angle) * radiusVariance,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          label,
          size: label === "AI" || label === "ML" ? 9 : 7,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        };
      });
    };

    initNodes();

    const draw = () => {
      const w = W();
      const h = H();
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);
      timeRef.current += 0.008;
      const t = timeRef.current;

      // ── Background grid ──────────────────────────────
      ctx.strokeStyle = "rgba(255,255,255,0.03)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // ── Orbital rings ────────────────────────────────
      const orbits = [
        { r: Math.min(w, h) * 0.14, speed: 0.004, opacity: 0.12 },
        { r: Math.min(w, h) * 0.25, speed: -0.003, opacity: 0.08 },
        { r: Math.min(w, h) * 0.38, speed: 0.002, opacity: 0.06 },
      ];

      orbits.forEach(({ r, speed, opacity }) => {
        const phase = t * speed * 100;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(phase);

        // Dashed ellipse
        ctx.setLineDash([4, 16]);
        ctx.strokeStyle = `rgba(98, 184, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.38, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.restore();
      });

      // ── Solid large orbit ─────────────────────────────
      ctx.beginPath();
      ctx.strokeStyle = "rgba(98,184,255,0.06)";
      ctx.lineWidth = 1;
      ctx.arc(cx, cy, Math.min(w, h) * 0.32, 0, Math.PI * 2);
      ctx.stroke();

      // ── Update nodes ─────────────────────────────────
      const maxR = Math.min(w, h) * 0.38;
      nodesRef.current.forEach((node) => {
        const dx = node.x - cx;
        const dy = node.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Gentle orbital drift
        const orbitAngle = Math.atan2(dy, dx) + 0.003;
        const targetDist = Math.min(w, h) * (0.28 + 0.08 * Math.sin(t + node.pulse));
        node.x += (cx + Math.cos(orbitAngle) * targetDist - node.x) * 0.005;
        node.y += (cy + Math.sin(orbitAngle) * targetDist - node.y) * 0.005;

        // Keep in bounds
        if (dist > maxR) {
          node.x = cx + (dx / dist) * maxR * 0.9;
          node.y = cy + (dy / dist) * maxR * 0.9;
        }

        node.pulse += node.pulseSpeed;
      });

      // ── Connection lines between nodes ───────────────
      const nodes = nodesRef.current;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.min(w, h) * 0.35;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(98,184,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // ── Lines from center to nodes ───────────────────
      nodes.forEach((node) => {
        const dx = node.x - cx;
        const dy = node.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = 0.08 + 0.04 * Math.sin(t * 2 + node.pulse);

        const grad = ctx.createLinearGradient(cx, cy, node.x, node.y);
        grad.addColorStop(0, `rgba(98,184,255,${alpha * 1.5})`);
        grad.addColorStop(1, `rgba(98,184,255,0)`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + (dx / dist) * dist * 0.85, cy + (dy / dist) * dist * 0.85);
        ctx.stroke();
      });

      // ── Draw nodes ───────────────────────────────────
      nodes.forEach((node) => {
        const pulseFactor = 0.8 + 0.2 * Math.sin(node.pulse + t * 3);
        const r = node.size * pulseFactor;

        // Glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4);
        glow.addColorStop(0, "rgba(98,184,255,0.15)");
        glow.addColorStop(1, "rgba(98,184,255,0)");
        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
        ctx.fill();

        // Ring
        ctx.beginPath();
        ctx.strokeStyle = `rgba(98,184,255,${0.4 + 0.2 * Math.sin(node.pulse)})`;
        ctx.lineWidth = 1;
        ctx.arc(node.x, node.y, r + 3, 0, Math.PI * 2);
        ctx.stroke();

        // Core
        const coreGrad = ctx.createRadialGradient(
          node.x - r * 0.3, node.y - r * 0.3, 0,
          node.x, node.y, r
        );
        coreGrad.addColorStop(0, "rgba(159,224,255,0.9)");
        coreGrad.addColorStop(1, "rgba(98,184,255,0.6)");
        ctx.beginPath();
        ctx.fillStyle = coreGrad;
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = "rgba(255,255,255,0.75)";
        ctx.font = `500 ${node.size > 7 ? "9" : "8"}px 'Inter', system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.label, node.x, node.y + r + 10);
      });

      // ── Central engineering core ──────────────────────
      const coreR = Math.min(w, h) * 0.06;
      const corePulse = 0.9 + 0.1 * Math.sin(t * 2);

      // Outer glow rings
      [coreR * 2.5, coreR * 1.8, coreR * 1.3].forEach((radius, i) => {
        const alpha = [0.04, 0.06, 0.08][i];
        ctx.beginPath();
        ctx.strokeStyle = `rgba(98,184,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.arc(cx, cy, radius * corePulse, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Core fill
      const coreGrad = ctx.createRadialGradient(cx - coreR * 0.3, cy - coreR * 0.3, 0, cx, cy, coreR);
      coreGrad.addColorStop(0, "rgba(159,224,255,0.95)");
      coreGrad.addColorStop(0.5, "rgba(98,184,255,0.8)");
      coreGrad.addColorStop(1, "rgba(62,140,220,0.6)");
      ctx.beginPath();
      ctx.fillStyle = coreGrad;
      ctx.arc(cx, cy, coreR * corePulse, 0, Math.PI * 2);
      ctx.fill();

      // Core ring
      ctx.beginPath();
      ctx.strokeStyle = "rgba(159,224,255,0.5)";
      ctx.lineWidth = 1.5;
      ctx.arc(cx, cy, coreR * corePulse + 4, 0, Math.PI * 2);
      ctx.stroke();

      // Core label
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = `700 ${Math.max(9, coreR * 0.4)}px 'Inter', system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("LEAGUE", cx, cy);

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      resize();
      initNodes();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-label="Interactive engineering disciplines visualization showing interconnected nodes representing AI, Vision, IoT, Software, Mechanical engineering and more"
      role="img"
    />
  );
}
