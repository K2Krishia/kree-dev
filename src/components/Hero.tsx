import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 font-['JetBrains_Mono']">
        Krishia Ranque Bello
      </h1>
      <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
        Fullstack Developer | Bug Whisperer | Not-So-Coffee-Driven Coder ☕
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/Krishia_Bello_Resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/K2Krishia"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-6 py-2 rounded-md transition flex items-center gap-2"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/krishia-bello"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-6 py-2 rounded-md transition flex items-center gap-2"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}
