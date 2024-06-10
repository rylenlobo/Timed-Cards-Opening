import { AnimatePresence, motion } from "framer-motion"
import useCarouselStore from "../store/useCarouselStore"



const Slider = () => {
  const { slidesData } = useCarouselStore()


  return (
    <>
      <div className="absolute z-50 flex w-1/2 overflow-hidden right-0 bottom-24 py-10">

        <AnimatePresence mode="popLayout" initial={false}>
          {slidesData.map((item, index) => (
            <motion.div
              className="relative w-48 h-72 flex-shrink-0 rounded-md overflow-hidden shadow-3xl  mx-3 "
              layout
              key={item.id}
              transition={{
                type: "tween",
                ease: "easeInOut",
                delay: 0.06 * index,
                duration: 1
              }}

            >
              <img className="h-full w-full object-cover" src={item.img} alt="" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div >

    </>);
}

export default Slider;