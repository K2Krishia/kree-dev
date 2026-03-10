import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-center"
    >
      <h2 className="text-4xl font-bold mb-4">👩‍💻 About Me</h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        I&#39;m Krishia — a fullstack developer who talks to APIs more than people.
        I specialize in staring at screens until — voila! — working code appears.
        You’ll usually find me knee-deep in bugs that vanish when someone else looks at them.
        I enjoy building real-time systems, fast games, and solving problems I probably created.
      </p>
    </motion.section>
  );
}
