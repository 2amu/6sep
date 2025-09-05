"use client";

import React from "react";

const CollagePage: React.FC = () => {
  return (
    <>
      <style>{`
        html, body {
          margin: 0; padding: 0;
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #fce4ec, #f8bbd9, #e1bee7);
          color: #4a148c;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 20px;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 30px;
          text-shadow: 2px 2px 6px rgba(255, 105, 180, 0.7);
          user-select: none;
          text-align: center;
        }
        .collage {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          width: 100%;
          max-width: 1000px;
        }
        .photo {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow:
            0 8px 20px rgba(255, 105, 180, 0.3);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
          aspect-ratio: 4 / 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .photo:hover {
          transform: scale(1.07) rotate(1deg);
          box-shadow:
            0 12px 30px rgba(255, 20, 147, 0.7);
          z-index: 10;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          display: block;
          transition: filter 0.3s ease;
          filter: drop-shadow(0 0 8px #f48fb1);
          user-select: none;
          pointer-events: none;
        }
        .caption {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: linear-gradient(transparent, rgba(180, 20, 80, 0.8));
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          padding: 10px 15px;
          border-radius: 0 0 20px 20px;
          user-select: none;
          text-shadow: 0 0 5px rgba(0,0,0,0.7);
          text-align: center;
        }
        /* Responsive for mobile: photos stacked vertically */
        @media (max-width: 600px) {
          .collage {
            display: flex;
            flex-direction: column;
            gap: 25px;
            max-width: 90vw;
          }
          .photo {
            width: 100%;
            aspect-ratio: auto;
            height: auto;
            border-radius: 15px;
            box-shadow:
              0 6px 15px rgba(255, 105, 180, 0.25);
          }
          img {
            border-radius: 15px;
            filter: drop-shadow(0 0 6px #f48fb1);
          }
          .caption {
            font-size: 1rem;
            padding: 8px 12px;
            border-radius: 0 0 15px 15px;
          }
        }
      `}</style>

      <h1>Madrid<span aria-hidden="true">🌍</span></h1>
      <section className="collage" aria-label="Collage de fotos románticas">
        <div> Continuará...</div>
      </section>
    </>
  );
};

export default CollagePage;