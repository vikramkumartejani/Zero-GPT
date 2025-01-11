import AccurateAIDetection from "@/components/AccurateAIDetection";
import ChooseYourPlan from "@/components/ChooseYourPlan";
import ClientTestimonials from "@/components/ClientTestimonials";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Hero from "@/components/Hero";
import OurBlogs from "@/components/OurBlogs";
import ScienceBehindZeroGPT from "@/components/ScienceBehindZeroGPT";
import StartDetectingNow from "@/components/StartDetectingNow";
import WhyChooseZeroGPT from "@/components/WhyChooseZeroGPT";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseZeroGPT />
      <AccurateAIDetection />
      <ChooseYourPlan />
      <ClientTestimonials />
      <ScienceBehindZeroGPT />
      <StartDetectingNow />
      <FrequentlyAskedQuestions />
      <OurBlogs />
    </main>
  );
}
