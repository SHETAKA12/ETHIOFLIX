import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ForYou from './components/forYou/forYou'
import AOS from 'aos'
import {useEffect } from 'react'
import 'aos/dist/aos.css'
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div >
      <Navbar/>
      <Hero/>
      <ForYou/>
    </div>
  )
}

export default App