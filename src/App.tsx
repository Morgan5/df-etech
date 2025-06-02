import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import ValueProposition from './components/ValueProposition';
import ClientReferences from './components/ClientReferences';
import Benefits from './components/Benefits';
import PricingTable from './components/PricingTable';
import TrialOffer from './components/TrialOffer';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const GlobalStyles = () => (
  <style>{`
    body {
        font-family: 'Inter', sans-serif;
        margin: 0; 
    }
    .hero-bg {
        background: linear-gradient(-45deg, #1a202c, #2d3748, #1a202c, #4a5568);
        background-size: 400% 400%;
        animation: gradientBG 25s ease infinite;
        position: relative;
        overflow: hidden;
        min-height: 100vh; 
        color: #E2E8F0; 
    }

    @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    #particles-canvas-react { 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
    }

    .content-container {
        position: relative;
        z-index: 2;
    }

    .gradient-text {
        background: linear-gradient(to right, #63b3ed, #4fd1c5);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .cta-primary {
        background-color: #ed8936;
        transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .cta-primary:hover {
        background-color: #dd6b20;
        transform: translateY(-3px);
        box-shadow: 0 10px 15px -3px rgba(237, 137, 54, 0.4), 0 4px 6px -2px rgba(237, 137, 54, 0.3);
    }
    .cta-secondary {
        border: 2px solid #4a5568;
        color: #cbd5e0;
        transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
    }
    .cta-secondary:hover {
        background-color: #4a5568;
        border-color: #63b3ed;
        color: #ffffff;
        transform: translateY(-3px);
    }

    .ai-visual-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease, filter 0.3s ease;
        cursor: none; 
    }
    .ai-visual-container:hover {
        transform: scale(1.02);
    }
    .custom-cursor-aura {
        position: fixed;
        width: 60px;
        height: 60px;
        border: 1px solid rgba(79, 209, 197, 0.5);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out;
        z-index: 9999;
        opacity: 0; 
    }

    .ai-visual-svg {
      width: 90%; 
      max-width: 480px; 
      height: auto;
      opacity: 0.85; 
    }
    .ai-visual-svg .node {
        transition: r 0.2s ease-out, opacity 0.2s ease-out, fill 0.3s ease-out, filter 0.3s ease-out;
        animation: pulseNodeReact 2.8s infinite ease-in-out;
        filter: drop-shadow(0px 0px 3px rgba(79, 209, 197, 0.5)); 
    }
    .ai-visual-svg .node.interactive-near {
        r: 13 !important; 
        opacity: 1 !important;
        fill: #4fd1c5 !important; 
        filter: drop-shadow(0px 0px 8px rgba(79, 209, 197, 0.8)); 
    }

    .ai-visual-svg .link {
        stroke-dasharray: 8 4; 
        animation: dashLinkReact 1.8s linear infinite;
        transition: stroke-width 0.2s ease-out, opacity 0.2s ease-out, stroke 0.3s ease-out;
        stroke-opacity: 0.6; 
    }
    .ai-visual-svg .link.interactive-link { 
       stroke: #63b3ed !important; 
       stroke-width: 2.5px !important; 
       stroke-opacity: 1 !important;
       animation-duration: 0.9s !important;
    }

    @keyframes pulseNodeReact {
        0%, 100% { r: 7; opacity: 0.75; } 
        50% { r: 9.5; opacity: 0.5; } 
    }
    @keyframes dashLinkReact {
        to {
            stroke-dashoffset: -48;
        }
    }

    .title-appear {
        animation: fadeInSlideUpReact 1s ease-out forwards;
        opacity: 0;
    }
    @keyframes fadeInSlideUpReact {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .description-appear {
        animation: fadeInSlideUpReact 1s ease-out 0.3s forwards; opacity: 0;
    }
    .cta-appear {
        animation: fadeInSlideUpReact 1s ease-out 0.6s forwards; opacity: 0;
    }
  `}</style>
);

const ParticlesCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.querySelector('.hero-bg')?.offsetHeight || window.innerHeight;
      initParticles(); 
    };
    
    class Particle {
      constructor(x, y, dX, dY, s) {
        this.x = x; this.y = y; this.directionX = dX; this.directionY = dY; this.size = s;
        this.opacity = Math.random() * 0.4 + 0.2;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(200,210,220,${this.opacity})`;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width + this.size || this.x < -this.size) {
          this.x = this.directionX > 0 ? -this.size : canvas.width + this.size;
          this.y = Math.random() * canvas.height;
        }
        if (this.y > canvas.height + this.size || this.y < -this.size) {
          this.y = this.directionY > 0 ? -this.size : canvas.height + this.size;
          this.x = Math.random() * canvas.width;
        }
        this.x += this.directionX; this.y += this.directionY;
        this.draw();
      }
    }

    function initParticles() {
      particlesArray = [];
      let nP = (canvas.height * canvas.width) / 8000;
      nP = Math.min(nP, 130);
      for (let i = 0; i < nP; i++) {
        let s = Math.random() * 2.2 + 0.8;
        let x = Math.random() * canvas.width; let y = Math.random() * canvas.height;
        let dX = (Math.random() * 0.7) - 0.35;
        let dY = (Math.random() * 0.7) - 0.35;
        particlesArray.push(new Particle(x, y, dX, dY, s));
      }
    }

    let animationFrameId;
    function animateParticles() {
      animationFrameId = requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => p.update());
    }
    
    resizeCanvas();
    animateParticles();
    
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="particles-canvas-react" ref={canvasRef}></canvas>;
};

const InteractiveSvgNeurons = () => {
  const svgRef = useRef(null);
  const svgContainerRef = useRef(null);
  const cursorAuraRef = useRef(null);
  const nodesDataRef = useRef([]); 
  const animationFrameIdRef = useRef(null);
  const linksRef = useRef([]); 

  useEffect(() => {
    const svgElement = svgRef.current;
    const svgContainer = svgContainerRef.current;
    const cursorAura = cursorAuraRef.current;

    if (!svgElement || !svgContainer || !cursorAura) return;

    const svgNodesElements = Array.from(svgElement.querySelectorAll('.node'));
    linksRef.current = Array.from(svgElement.querySelectorAll('.link')); 
    
    nodesDataRef.current = svgNodesElements.map((nodeEl, index) => {
        const initialCx = parseFloat(nodeEl.getAttribute('cx'));
        const initialCy = parseFloat(nodeEl.getAttribute('cy'));
        if (index % 3 === 0) {
            nodeEl.style.animationDuration = '2.5s';
        } else if (index % 3 === 1) {
            nodeEl.style.animationDuration = '3.1s';
        }

        return {
            element: nodeEl,
            id: nodeEl.dataset.id,
            cx: initialCx,
            cy: initialCy,
            initialCx: initialCx,
            initialCy: initialCy,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25
        };
    });
    const nodeMap = new Map(nodesDataRef.current.map(nd => [nd.id, nd]));
    const maxDrift = 10;

    const influenceRadius = 55; 
    const handleMouseEnter = () => { cursorAura.style.opacity = '1'; };
    const handleMouseLeave = () => {
      cursorAura.style.opacity = '0';
      svgNodesElements.forEach(node => node.classList.remove('interactive-near'));
      linksRef.current.forEach(link => link.classList.remove('interactive-link'));
    };
    const handleMouseMove = (event) => {
      cursorAura.style.left = `${event.clientX}px`;
      cursorAura.style.top = `${event.clientY}px`;

      const svgPoint = svgElement.createSVGPoint();
      svgPoint.x = event.clientX;
      svgPoint.y = event.clientY;
      const { x: svgMouseX, y: svgMouseY } = svgPoint.matrixTransform(svgElement.getScreenCTM().inverse());
      
      linksRef.current.forEach(link => link.classList.remove('interactive-link'));

      svgNodesElements.forEach(node => {
        const currentCx = parseFloat(node.getAttribute('cx')); 
        const currentCy = parseFloat(node.getAttribute('cy'));
        const distance = Math.sqrt(Math.pow(svgMouseX - currentCx, 2) + Math.pow(svgMouseY - currentCy, 2));
        
        if (distance < influenceRadius) {
          node.classList.add('interactive-near');
          linksRef.current.forEach(link => {
            if (link.dataset.startNode === node.dataset.id || link.dataset.endNode === node.dataset.id) {
              link.classList.add('interactive-link');
            }
          });
        } else {
          node.classList.remove('interactive-near');
        }
      });
    };

    svgContainer.addEventListener('mouseenter', handleMouseEnter);
    svgContainer.addEventListener('mouseleave', handleMouseLeave);
    svgContainer.addEventListener('mousemove', handleMouseMove);

    function animateSvgElements() {
      nodesDataRef.current.forEach(nodeData => {
        nodeData.cx += nodeData.vx;
        nodeData.cy += nodeData.vy;

        if (Math.abs(nodeData.cx - nodeData.initialCx) > maxDrift) {
          nodeData.vx *= -1;
          nodeData.cx = nodeData.initialCx + Math.sign(nodeData.cx - nodeData.initialCx) * maxDrift;
        }
        if (Math.abs(nodeData.cy - nodeData.initialCy) > maxDrift) {
          nodeData.vy *= -1;
          nodeData.cy = nodeData.initialCy + Math.sign(nodeData.cy - nodeData.initialCy) * maxDrift;
        }
        nodeData.element.setAttribute('cx', nodeData.cx.toString());
        nodeData.element.setAttribute('cy', nodeData.cy.toString());
      });

      linksRef.current.forEach(link => {
        const startNodeId = link.dataset.startNode;
        const endNodeId = link.dataset.endNode;
        const startNodeData = nodeMap.get(startNodeId);
        const endNodeData = nodeMap.get(endNodeId);

        if (startNodeData && endNodeData) {
          link.setAttribute('x1', startNodeData.cx.toString());
          link.setAttribute('y1', startNodeData.cy.toString());
          link.setAttribute('x2', endNodeData.cx.toString());
          link.setAttribute('y2', endNodeData.cy.toString());
        }
      });
      animationFrameIdRef.current = requestAnimationFrame(animateSvgElements);
    }
    animateSvgElements();

    return () => {
      svgContainer.removeEventListener('mouseenter', handleMouseEnter);
      svgContainer.removeEventListener('mouseleave', handleMouseLeave);
      svgContainer.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={cursorAuraRef} className="custom-cursor-aura"></div>
      <div ref={svgContainerRef} className="ai-visual-container hidden md:flex justify-center items-center h-full">
        <svg ref={svgRef} className="ai-visual-svg" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="lineGradientEnhancedReact" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#4fd1c5', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#63b3ed', stopOpacity:1}} />
                </linearGradient>
                 <linearGradient id="activeLinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#A7F3D0', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#6EE7B7', stopOpacity:1}} />
                </linearGradient>
            </defs>
            <circle className="node" data-id="n1" cx="110" cy="110" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0s'}}/>
            <circle className="node" data-id="n2" cx="70" cy="80" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0.1s'}}/>
            <circle className="node" data-id="n3" cx="150" cy="80" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0.2s'}}/>
            <circle className="node" data-id="n4" cx="70" cy="140" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0.3s'}}/>
            <circle className="node" data-id="n5" cx="150" cy="140" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0.4s'}}/>
            <circle className="node" data-id="n6" cx="110" cy="60" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0.5s'}}/>
            <circle className="node" data-id="n7" cx="110" cy="160" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0.6s'}}/>
            <circle className="node" data-id="n8" cx="60" cy="110" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0.7s'}}/>
            <circle className="node" data-id="n9" cx="160" cy="110" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0.8s'}}/>
            <circle className="node" data-id="n10" cx="30" cy="70" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '0.9s'}}/>
            <circle className="node" data-id="n11" cx="190" cy="70" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '1s'}}/>
            <circle className="node" data-id="n12" cx="30" cy="150" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '1.1s'}}/>
            <circle className="node" data-id="n13" cx="190" cy="150" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '1.2s'}}/>
            <circle className="node" data-id="n14" cx="80" cy="30" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '1.3s'}}/>
            <circle className="node" data-id="n15" cx="140" cy="30" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '1.4s'}}/>
            <circle className="node" data-id="n16" cx="80" cy="190" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '1.5s'}}/>
            <circle className="node" data-id="n17" cx="140" cy="190" r="7" fill="url(#lineGradientEnhancedReact)" style={{animationDelay: '1.6s'}}/>

            <line className="link" data-start-node="n1" data-end-node="n2" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.05s'}}/>
            <line className="link" data-start-node="n1" data-end-node="n3" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.15s'}}/>
            <line className="link" data-start-node="n1" data-end-node="n4" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.25s'}}/>
            <line className="link" data-start-node="n1" data-end-node="n5" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.35s'}}/>
            <line className="link" data-start-node="n1" data-end-node="n6" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.45s'}}/>
            <line className="link" data-start-node="n1" data-end-node="n7" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.55s'}}/>
            <line className="link" data-start-node="n1" data-end-node="n8" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.65s'}}/>
            <line className="link" data-start-node="n1" data-end-node="n9" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.75s'}}/>
            <line className="link" data-start-node="n2" data-end-node="n10" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.85s'}}/>
            <line className="link" data-start-node="n3" data-end-node="n11" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '0.95s'}}/>
            <line className="link" data-start-node="n4" data-end-node="n12" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.05s'}}/>
            <line className="link" data-start-node="n5" data-end-node="n13" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.15s'}}/>
            <line className="link" data-start-node="n6" data-end-node="n14" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.25s'}}/>
            <line className="link" data-start-node="n6" data-end-node="n15" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.35s'}}/>
            <line className="link" data-start-node="n7" data-end-node="n16" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.45s'}}/>
            <line className="link" data-start-node="n7" data-end-node="n17" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.55s'}}/>
            <line className="link" data-start-node="n2" data-end-node="n6" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.6s'}}/>
            <line className="link" data-start-node="n3" data-end-node="n6" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.65s'}}/>
            <line className="link" data-start-node="n4" data-end-node="n8" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.7s'}}/>
            <line className="link" data-start-node="n5" data-end-node="n9" stroke="url(#lineGradientEnhancedReact)" strokeWidth="1.5" style={{animationDelay: '1.75s'}}/>
        </svg>
      </div>
    </>
  );
};

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
        document.head.removeChild(link);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <div className="hero-bg">
        <ParticlesCanvas />
        <div className="content-container container mx-auto px-6 py-16 md:py-24 min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
            <div className="md:pr-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight title-appear">
                Vos déploiements <span className="gradient-text">ont du retard</span> ?
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed description-appear">
                Adoptez une <strong className="font-semibold text-white">squad augmentée par l'IA</strong>, rapide, fiable et clé en main.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 cta-appear">
                <a href="#" className="cta-primary text-white font-semibold py-4 px-10 rounded-lg shadow-lg text-lg text-center">
                  Obtenez un crédit de 3.500 €
                </a>
                <a href="#" className="cta-secondary font-semibold py-4 px-10 rounded-lg text-lg text-center">
                  Je veux en savoir plus
                </a>
              </div>
            </div>
            <InteractiveSvgNeurons />
          </div>
        </div>
      </div>
      <ValueProposition />
      <ClientReferences />
      <Benefits />
      <PricingTable />
      <TrialOffer />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;