import Hero from "./components/Hero";
import WhyChooseZeroGPT from "./components/WhyChooseZeroGPT";
import AccurateAIDetection from "./components/AccurateAIDetection";
import ChooseYourPlan from "./components/ChooseYourPlan";
import ClientTestimonials from "./components/ClientTestimonials";

export default function Home() {
  return (
    <main>
      <Hero/>
      <WhyChooseZeroGPT/>
      <AccurateAIDetection/>
      <ChooseYourPlan/>
      <ClientTestimonials/>
    </main>
  );
}
