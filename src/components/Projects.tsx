import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "🃏 Regnum",
    description: "A real-time gambling card game (licensed by PAGCOR) that supports thousands of concurrent users. Developed as part of a large-scale system under ESAT Pilipinas Teknik, OPC.",
    tech: ["Flutter", ".NET", "Django", "Node.js", "Kafka", "Redis", "PostgreSQL", "MsSql", "Socket.io"],
    live: "https://happy-play.ept.ph/",
    code: null,
  },
  {
    title: "🎓 Thesis: Guitar Strum Classification",
    description:
      "My undergrad thesis: trained a neural network to classify guitar strumming patterns using CNN and LSTM. Basically taught a computer to listen to music and go, 'Yep, that’s a downstroke.' Published in the PEJARD journal, SLU Vol. 9.",
    tech: ["Python", "TensorFlow", "CNN", "LSTM", "Audio Processing", "Image Processing", "Machine Learning"],
    live: "https://pejard.slu.edu.ph/vol.9/2019.10.26.pdf",
    code: null,
  },
  {
    title: "🍜 Stir Fry Day",
    description: "A minimal but oddly sentimental app that counts the seconds since someone said yes. Decorated with floating avocados and stir fry — the core ingredients of love and questionable frontend choices. Because emotion-driven deployment is still deployment!",
    tech: ["React", "Javascript", "Firebase"],
    live: "https://stir-fry-76884.web.app/",
    code: "https://github.com/K2Krishia/stir-fry",
  },
  {
    title: "🏰 My Heart's At Home (Java Platformer)",
    description:
      "A classic side-scrolling platformer built in Java using Tiled maps and pixel sprites. Guide our hero named Caesar through 4 perilous levels filled with ogres, skeleton soldiers, and other annoyances who don’t want him to make it home. Just a normal college project, obviously.",
    tech: ["Java", "Tiled", "Pixel Art", "GameDev"],
    live: "/MHAH.jar",
    code: null
  },
  {
    title: "⚠️ Kree Dev",
    description: "Personal portfolio site showcasing my work and humor (this site!).",
    tech: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
    live: "https://kree-dev.vercel.app/",
    code: "https://github.com/K2Krishia/kree-dev",
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-2">💼 Projects</h2>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 mb-8 max-w-2xl mx-auto">
        🔒 Note: Most of my professional projects live in proprietary vaults, protected by NDAs, lawyers, and possibly laser security systems 🧑‍⚖️🧨. Here’s what I can show you without getting sued 🤫.
      </p>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 hover:text-blue-500"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
              {project.code ? (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 hover:text-blue-500"
                >
                  <FaGithub /> Code
                </a>
              ) : (
                <span className="text-sm text-gray-500 italic">Private</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
