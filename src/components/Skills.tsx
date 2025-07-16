import { motion } from "framer-motion";
import {
  FaReact, FaVuejs, FaDocker, FaGitAlt,
  FaNodeJs
} from "react-icons/fa";
import {
  SiTailwindcss, SiFirebase, SiDjango, SiMongodb, SiPostgresql,
  SiMysql, SiKubernetes, SiApachekafka, SiRedis, SiJavascript,
  SiTypescript, SiPython, SiDotnet
} from "react-icons/si";
import { PiFileCSharpBold } from "react-icons/pi";

const skillIcons: Record<string, React.ReactNode> = {
  React: <FaReact />,
  Vue: <FaVuejs />,
  "React Native": <FaReact />,
  Tailwind: <SiTailwindcss />,
  HTML: <span>🌐</span>,
  CSS: <span>🎨</span>,
  SCSS: <span>💅</span>,
  "Node.js": <FaNodeJs />,
  Django: <SiDjango />,
  ".NET": <SiDotnet />,
  Firebase: <SiFirebase />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Docker: <FaDocker />,
  Kubernetes: <SiKubernetes />,
  Kafka: <SiApachekafka />,
  Git: <FaGitAlt />,
  Redis: <SiRedis />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Python: <SiPython />,
  "C#": <PiFileCSharpBold />,
  "Malware Analysis 🐛": <span>🐛</span>,
  "Machine Learning 🎓": <span>🎓</span>,
  "Real-time Systems ⚡": <span>⚡</span>,
};

const skills = {
  "Frontend": ["React", "Vue", "React Native", "Tailwind", "HTML", "CSS", "SCSS"],
  "Backend": ["Node.js", "Django", ".NET", "Firebase", "PostgreSQL", "MySQL", "MongoDB"],
  "Tools & DevOps": ["Docker", "Kubernetes", "Kafka", "Git", "Redis"],
  "Languages": ["JavaScript", "TypeScript", "Python", "C#"],
  "Other": ["Malware Analysis 🐛", "Machine Learning 🎓", "Real-time Systems ⚡"],
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-10">🧠 Skills</h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:scale-105 transition-transform"
                >
                  <span className="text-xl">{skillIcons[skill] ?? "💻"}</span>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
