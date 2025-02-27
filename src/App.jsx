import Slider from "./components/Slider"
import Slide from "./components/Slide";
import NextAndProgress from "./components/NextAndProgress";
import dslogo from "./assets/pngwing.com.png"
import { Computer } from 'lucide-react';
import { isMobile } from 'react-device-detect';


const App = () => {

  // const timerVariants = {
  //   initial: { scaleX: 1 },
  //   animate: {
  //     scaleX: 1,
  //     transition: {
  //       duration: 5,
  //       repeat: Infinity,

  //     },

  //   },
  // };

  if (isMobile) {
    return <>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
        <Computer size={50} />
        <p>Please use this on a desktop.</p>
      </div>
    </>
  }



  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden bg-stone-800">
        <img className="absolute right-0 z-50 mt-5 w-52 brightness-90" src={dslogo} />
        <Slide />
        <Slider />
        <NextAndProgress />
      </div >
    </>
  )
}







export default App