import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    let mouse = {
      x: null,
      y: null,
      radius: 150 // Increased radius for better magnetic field feel
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.baseX = x; // Original floating position X
        this.baseY = y; // Original floating position Y
        this.dx = dx;
        this.dy = dy;
        this.size = size;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }

      update() {
        // Normal floating movement for base positions
        this.baseX += this.dx;
        this.baseY += this.dy;

        // Bounce base positions off edges
        if (this.baseX > canvas.width || this.baseX < 0) {
          this.dx = -this.dx;
        }
        if (this.baseY > canvas.height || this.baseY < 0) {
          this.dy = -this.dy;
        }

        // Interaction with mouse
        if (mouse.x != null && mouse.y != null) {
          let mouseDx = mouse.x - this.baseX;
          let mouseDy = mouse.y - this.baseY;
          let mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
          
          if (mouseDistance < mouse.radius) {
            // Pull towards mouse (magnet effect)
            let force = (mouse.radius - mouseDistance) / mouse.radius;
            // The closer it is, the stronger the pull. Pull strength is 0.7 here.
            let targetX = this.baseX + (mouseDx * force * 0.7);
            let targetY = this.baseY + (mouseDy * force * 0.7);
            
            // Smoothly move towards the target
            this.x += (targetX - this.x) * 0.1;
            this.y += (targetY - this.y) * 0.1;
          } else {
            // Return to base position smoothly
            this.x += (this.baseX - this.x) * 0.1;
            this.y += (this.baseY - this.y) * 0.1;
          }
        } else {
          // Return to base position smoothly when mouse is off-screen
          this.x += (this.baseX - this.x) * 0.1;
          this.y += (this.baseY - this.y) * 0.1;
        }

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      let numberOfParticles = (canvas.width * canvas.height) / 7000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 1.5) + 0.5;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = (Math.random() - 0.5) * 0.3;
        let dy = (Math.random() - 0.5) * 0.3;
        particles.push(new Particle(x, y, dx, dy, size));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
    };

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" />;
};

export default ParticleBackground;
