import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';
import NutritionSection from './sections/NutritionSection';
import BenefitSection from './sections/BenefitSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <NutritionSection />
      <div>
        <BenefitSection />
      </div>
      <FooterSection />
    </main>
  )
}

export default App;
