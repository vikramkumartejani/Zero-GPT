import Hero from "./components/Hero";
import WhyChooseZeroGPT from "./components/WhyChooseZeroGPT";
import AccurateAIDetection from "./components/AccurateAIDetection";
import ChooseYourPlan from "./components/ChooseYourPlan";
import ClientTestimonials from "./components/ClientTestimonials";
import ScienceBehindZeroGPT from "./components/ScienceBehindZeroGPT";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import StartDetectingNow from "./components/StartDetectingNow";
import OurBlogs from "./components/OurBlogs";

export default function Home() {
  return (
    <main>
      <Hero/>
      <WhyChooseZeroGPT/>
      <AccurateAIDetection/>
      <ChooseYourPlan/>
      <ClientTestimonials/>
      <ScienceBehindZeroGPT/>
      <StartDetectingNow/>
      <FrequentlyAskedQuestions/>
      <OurBlogs/>
    </main>
  );
}
