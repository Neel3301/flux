import Hero from "@/components/Hero";
import TemplateSection from "@/components/TemplateSection";

export default function Home() {
  return (
    <div className="m-auto flex max-w-[1440px] flex-col px-4 md:px-24 lg:px-36">
      <Hero />
      <TemplateSection />
    </div>
  );
}
