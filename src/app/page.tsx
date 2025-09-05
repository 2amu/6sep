// pages/aniversario.tsx
'use client'
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const AnniversaryPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    };

    const colors = ["#fce4ec", "#f8bbd9", "#e1bee7"];
    const particles: Particle[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 1 + 1,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.y += p.vy;
        if (p.y > canvas.height) p.y = 0;
        p.x += p.vx;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    // Fade in sections sequentially
    const sections = document.querySelectorAll<HTMLElement>(".section");
    sections.forEach((section, index) => {
      section.style.opacity = "0";
      setTimeout(() => {
        section.style.transition = "opacity 1s";
        section.style.opacity = "1";
      }, index * 500);
    });
  }, []);

  return (
    <>
      <style>{`
        body,html {
          margin: 0; padding: 0; overflow-x: hidden;
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #c5a195ff, #a36f5dff, #78402eff);
          color: #2d1b69;
        }
        h1 {
          font-size: 3em;
          text-align: center;
          margin-top: 20px;
          color: #4a148c;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          animation: fadeIn 2s ease-in;
        }
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
        .section {
          margin-bottom: 40px;
          padding: 20px;
          border-radius: 15px;
          background: rgba(255,255,255,0.8);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s;
          opacity: 0;
        }
        .section:hover {
          transform: scale(1.02);
        }
        .image-wrapper {
          text-align: center;
          margin: 20px 0;
        }
        img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
          transition: transform 0.3s;
        }
        img:hover {
          transform: scale(1.05);
        }
        p {
          font-size: 1.2em;
          line-height: 1.6;
          text-align: justify;
        }
        .highlight {
          font-weight: bold;
          color: #7b1fa2;
        }
        .footer {
          text-align: center;
          font-size: 1.5em;
          margin-top: 40px;
          animation: fadeIn 3s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
          .footer-text {
          max-width: 900px;
          margin: 40px 20px 60px;
          padding: 25px 30px;
          background: rgba(255 255 255 / 0.9);
          border-radius: 20px;
          box-shadow:
            0 8px 25px rgba(255, 105, 180, 0.3);
          color: #1a0e88ff;
          font-size: 1.3rem;
          font-weight: 600;
          text-align: center;
          user-select: none;
          line-height: 1.5;
        }
        .heart {
          color: #e91e63;
          font-size: 2em;
          display: inline-block;
          animation: pulse 1s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        canvas#particles {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }
      `}</style>

      <canvas id="particles" ref={canvasRef} />
      <div className="container">
        <section className="section">
          <h2>Los Principios Inocentes</h2>
          <div className="image-wrapper">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/22a87a35-e3ae-4978-97c3-f186c8d8f23b.png"
              alt="Dos niños pequeños jugando juntos en un jardín soleado con flores, representando la infancia inocente y el comienzo de un amor puro"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/800x400/f5f5f5/333?text=Imagen+no+cargada";
              }}
            />
          </div>
          <p>
           Desde bien chiquititos aunque no sabíamos nada había algo que nos unía más allá de la casualidad. Perdimos el contacto pero el destino nos volvió a juntar.
          </p>
        </section>

        <section className="section">
          <h2>El Reencuentro Bajo las Estrellas</h2>
          <div className="image-wrapper">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3966563a-4339-4495-8f86-5335cb1e7bd7.png"
              alt="Playa nocturna con luna llena brillando sobre el agua, dos siluetas caminando de la mano bajo un cielo estrellado"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/800x400/f5f5f5/333?text=Imagen+no+cargada";
              }}
            />
          </div>
          <p>
            El destino, con su magia infinita, decidió reunirnos de nuevo.
            Una noche estrellada, en la playa donde el mar con sus olas me atraía a tu corazón,
            vi tu mirada y aunque me negaba sabía que eras tú el sitio donde siempre quería estar.
          </p>
        </section>

        <section className="section">
          <h2>Nuestra Nueva Historia</h2>
          <div className="image-wrapper">
            <Link href="/6">
            <img
              src="/1.jpeg"
              alt="Calendario marcando el 6 de septiembre con flores y corazones, simbolizando el día especial"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/800x400/f5f5f5/333?text=Imagen+no+cargada";
              }}
            />
            </Link>
          </div>
          <p>
            Desde aquel <span className="highlight">6 de septiembre</span>,
            esa fecha quedó grabada en nuestro corazones, comenzamos a escribir
            juntos una nueva vida. Y, aunque a veces me equivoque, puedo decir con el corazón que desde ese entonces, cada día te quiero más.
          </p>
          <div className="image-wrapper">
            <Link href="/sevilla">
            <img
              src="https://www.elcaminoconcorreos.com/admin/files/articulos/67/que-ver-en-sevilla.jpg"
              alt="Montañas verdes con lago cristalino y senderos en Vall de Núria, rodeados de picos nevados y bosques"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/800x400/f5f5f5/333?text=Imagen+no+cargada";
              }}
            />
            </Link>
          </div>
          <p>
            Viajamos a Sevilla donde encontramos una parte de nuestros antepasados.
          </p>
          <div className="image-wrapper">
            <Link href="/vall">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/52/Nuria13.jpg"
              alt="Montañas verdes con lago cristalino y senderos en Vall de Núria, rodeados de picos nevados y bosques"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/800x400/f5f5f5/333?text=Imagen+no+cargada";
              }}
            />
            </Link>
          </div>
          <p>
            Fuimos a la tan ansiada Vall de Núria y nos dió tiempo a pasarnos por Andorra, aquel fue nuestro primer gran viaje juntos y aunque me ví reacio al principio, me encantó.
          </p>
          <div className="image-wrapper">
            <Link href="/praga">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54a16c06-b094-41d0-a945-8876dfc2f744.png"
              alt="Castillo de Praga iluminado por la noche con el Puente de Carlos y el río Vltava"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/800x400/f5f5f5/333?text=Imagen+no+cargada";
              }}
            />
            </Link>
          </div>
          <p>
            Viaje inesperado pero un día aparecimos en Praga. Nunca pensé que fuése a viajar a esa ciudad, pero a mi amor le complementaba genial.
          </p>
          <div className="image-wrapper">
            <Link href="/madrid">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dd63164a-344a-4e92-a782-decbdc031434.png"
              alt="Panorama de Madrid con la Plaza Mayor, el Palacio Real y monumentos históricos bajo un cielo azul"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://placehold.co/800x400/f5f5f5/333?text=Imagen+no+cargada";
              }}
            />
            </Link>
          </div>
          <p>
            Finalmente, camino a Madrid. Una nueva historia, quizá un poco corta y agotadora pero seguro llena de fotitos y aventuras para recordar juntos.
          </p>
        </section>
      </div>

      <div className="footer-text" role="contentinfo">
        <p>
          Gracias por compartir estos momentos tan especiales conmigo. Feliz aniversario mi amor.
        </p>
      </div>
    </>
  );
};

export default AnniversaryPage;