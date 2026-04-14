import { useEffect, useRef } from 'react';

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let comets: Comet[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    class Star {
      x: number; y: number; size: number; color: string; 
      alpha: number; alphaChange: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5;
        const colors = ['255, 255, 255', '148, 163, 184', '255, 191, 0'];
        const rand = Math.random();
        this.color = rand < 0.7 ? colors[0] : rand < 0.9 ? colors[1] : colors[2];
        this.alpha = Math.random();
        this.alphaChange = (Math.random() * 0.02) - 0.01;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx!.fill();
      }

      update() {
        this.alpha += this.alphaChange;
        if (this.alpha <= 0.1 || this.alpha >= 0.9) this.alphaChange = -this.alphaChange;
        this.draw();
      }
    }

    class Comet {
  // Initialize with default values to satisfy TypeScript
  x: number = 0;
  y: number = 0;
  length: number = 0;
  speed: number = 0;
  opacity: number = 0;

  constructor() {
    this.init();
  }

  init() {
    this.x = Math.random() * canvas!.width * 1.5 - (canvas!.width * 0.5);
    this.y = Math.random() * -canvas!.height;
    this.length = Math.random() * 150 + 50;
    this.speed = Math.random() * 8 + 4;
    this.opacity = 0;
  }

  draw() {
    if (!ctx) return;
    ctx.beginPath();
    const grad = ctx.createLinearGradient(this.x, this.y, this.x - this.length, this.y - this.length);
    grad.addColorStop(0, `rgba(255, 191, 0, ${this.opacity})`);
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.length, this.y - this.length);
    ctx.stroke();
  }

  update() {
    this.x += this.speed;
    this.y += this.speed;
    if (this.opacity < 0.6) this.opacity += 0.01;
    
    if (this.y > canvas!.height || this.x > canvas!.width) {
      this.init();
    }
    this.draw();
  }
}

    const initElements = () => {
      stars = [];
      comets = [];
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 3000);
      for (let i = 0; i < numStars; i++) stars.push(new Star());
      
      // Limit to 2-3 comets at a time so it doesn't look cluttered
      for (let i = 0; i < 2; i++) comets.push(new Comet());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => s.update());
      comets.forEach(c => c.update());
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}