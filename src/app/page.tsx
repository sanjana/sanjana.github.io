import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Timeline } from "@/components/timeline";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";
import { Awards } from "@/components/awards";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Timeline />
      <Research />
      <Skills />
      <Awards />
    </main>
  );
}
