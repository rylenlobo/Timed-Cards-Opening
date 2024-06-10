import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from 'lucide-react';
import slides from "../data/slides";
import useCarouselStore from "../store/useCarouselStore"



const NextAndProgress = () => {
    const { handleNextSlide } = useCarouselStore()
    const [slideCount, setSlideCount] = useState(0)

    // useEffect(() => {
    //     const timedCardsInterval = setInterval(() => {
    //         handleNext()
    //     }, 5000)

    //     return () => clearInterval(timedCardsInterval)
    // }, [])

    const handleNext = () => {
        handleNextSlide()
        setSlideCount((prev) => prev + 1)
    }

    const buttonVariants = {
        whileTap: { scale: 0.9 },
        whileHover: { scale: 1.1 }
    }

    const progressVariants = {
        animate: {
            scaleX: (slideCount % slides.length + 1) / slides.length,
        },

    }

    const counterVariants = {
        initial: { y: 100, opacity: 0 },
        animate: {
            y: 0, opacity: 1, transition: {
                type: "tween"
            }
        },
        exit: { y: -100, opacity: 0 },
    };






    return (
        <div className="flex gap-5 p-2 items-center justify-evenly absolute right-0 bottom-12 text-white z-50 w-1/2">

            {/* NextButton*/}
            <motion.button variants={buttonVariants} whileTap="whileTap" whileHover="whileHover" className=" ml-4 rounded-full flex items-center justify-center h-16 w-16 border-2 border-slate-300 " onClick={handleNext}>
                <ChevronLeft size={20} strokeWidth={3} />
            </motion.button>

            {/* ProgressBar */}
            <div className="bg-white w-2/3 h-1 rounded-lg overflow-hidden">
                <motion.div className="bg-red-500 w-full h-full" variants={progressVariants} animate="animate" transition={{ duration: 1 }} style={{ originX: 0 }} />
            </div>

            {/* Counter */}
            <div className="flex items-center w-auto overflow-y-hidden  ">
                <AnimatePresence mode="popLayout" initial={false}>
                    <p className=" font-oswald text-5xl ">0</p>
                    <motion.p key={slideCount} variants={counterVariants} initial="initial" animate="animate" exit="exit" className="font-oswald text-5xl m-0 ">{slideCount % slides.length + 1}</motion.p>
                </AnimatePresence>
            </div>

        </div>
    )
}

export default NextAndProgress
