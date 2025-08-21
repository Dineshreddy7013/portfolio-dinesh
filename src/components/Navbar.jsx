import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Highlight active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        // Trigger when 40% of the section is visible
        threshold: 0.4,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl p-[2px] rounded-full shadow-lg
                 bg-gradient-to-r from-cyan-600 via-slate-900 to-indigo-700"
      aria-label="Primary"
    >
      <div className="backdrop-blur-md bg-black/60 border border-white/15 rounded-full px-4 sm:px-6 py-2">
        <ul className="flex justify-center flex-wrap gap-2 sm:gap-4 text-sm font-medium text-white">
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-1 rounded-full transition duration-300 outline-none
                    ${isActive
                      ? "bg-white/15 text-cyan-300 border border-cyan-400/30"
                      : "hover:bg-white/10 text-white/90"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
