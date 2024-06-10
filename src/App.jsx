import Slider from "./components/Slider"
import Slide from "./components/Slide";
import NextAndProgress from "./components/NextAndProgress";
import dslogo from "./assets/pngwing.com.png"
import { Computer } from 'lucide-react';
import { isMobile } from 'react-device-detect';


const App = () => {

  const timerVariants = {
    initial: { scaleX: 1 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 5,
        repeat: Infinity,

      },

    },
  };

  if (isMobile) {
    return <>
      <div className="h-screen gap-10 w-screen flex flex-col justify-center items-center">
        <Computer size={50} />
        <p>Please use this on a desktop.</p>
      </div>
    </>
  }



  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden  bg-stone-800">
        <div className="absolute z-50 top-0 w-full h-1">
          {/* <motion.div style={{ originX: 0 }} variants={timerVariants} initial="initial" animate="animate" exit="exit" className="h-full bg-red-500" /> */}
        </div>
        <img className="absolute z-50 right-0 w-52 mt-5 brightness-90" src={dslogo} />
        <Slide />
        <Slider />
        <NextAndProgress />
      </div >
    </>
  )
}







export default App