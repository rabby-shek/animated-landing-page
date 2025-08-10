import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <div className='h-dvh'></div>
    </main>
  )
}

export default App;
