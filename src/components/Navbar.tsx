'use client';
import { useEffect, useState } from "react";

const sections = ["Home", "About", "Skills", "Projects"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id.toLowerCase());
        return el ? el.offsetTop - 100 : 0;
      });

      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i]) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur z-50 shadow-sm">
      <ul className="flex justify-center gap-6 py-4 text-sm font-medium">
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec.toLowerCase()}`}
              className={`transition ${
                active === sec
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
