import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "@/components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
