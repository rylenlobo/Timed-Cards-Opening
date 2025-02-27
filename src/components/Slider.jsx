import { AnimatePresence, motion } from "framer-motion"
import useCarouselStore from "../store/useCarouselStore"



const Slider = () => {
  const { slidesData } = useCarouselStore()


  return (
    <>
      <div className="absolute bottom-32 right-0 z-50 flex w-1/2 space-x-7 rounded-md">

        <AnimatePresence mode="popLayout" initial={false}>
          {slidesData.map((item, index) => (
            <motion.div
              className="relative h-72 w-48 flex-shrink-0 overflow-hidden rounded-md shadow-3xl"
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