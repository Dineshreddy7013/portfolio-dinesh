import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center px-6 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/devops-bg.jpg')",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center animate-fadeInUp">
        <img
          src="/Dinesh Reddy.jpg"
          alt="Dinesh Reddy"
          className="w-44 h-44 object-cover rounded-full mb-6 border-4 border-cyan-400 shadow-lg animate-scaleIn"
        />
        <h1
          className="text-5xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 tracking-wide animate-slideDown"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Dinesh Reddy
        </h1>
        <p
          className="text-lg md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-400 italic font-medium mb-6 animate-fadeIn delay-300"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          🚀 DevOps Engineer | AWS Solutions Architect
        </p>
        <Link to="/contact-form">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-cyan-500 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 animate-bounceIn delay-500">
            Let’s Connect
          </button>
        </Link>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Playfair+Display:wght@600;700&family=Roboto:wght@400;500&display=swap');

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.9); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 1s ease-out forwards; }
        .animate-slideDown { animation: slideDown 1s ease-out forwards; }
        .animate-bounceIn { animation: bounceIn 1s ease-out forwards; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  )
}
