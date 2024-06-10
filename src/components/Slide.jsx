import { motion, AnimatePresence, animate, delay } from "framer-motion";
import useCarouselStore from "../store/useCarouselStore"

const Slide = () => {

    const { slideImages } = useCarouselStore()

    const slidesVariants = {
        animate: { height: "100%", width: "100%", inset: 0, margin: 0, borderRadius: 0, },
        exit: { scale: 2, opacity: 0 },
    }

    // Text 
    const containerVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.5
            }
        }
    }

    const textVariants = {
        initial: { opacity: 0, x: -100 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 0.5
            },
        },
        exit: { opacity: 0 }
    };


    return (
        <>
            <div>
                <AnimatePresence initial={false}>
                    {slideImages.map(item => <div key={item.img}>
                        <motion.div
                            key={item.img}
                            layout
                            className="absolute overflow-hidden w-48 h-72 bottom-32 left-1/2 ml-3 mb-2 rounded-md "
                            variants={slidesVariants}
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 1,
                                ease: "easeInOut"
                            }}>
                            <img className="h-full w-full object-cover " src={item.img} alt="" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1 }} className="absolute h-full w-full bg-black " />
                        <div className="h-full w-full">
                            <motion.div variants={containerVariants} initial="initial" animate="animate" exit="exit" className="absolute top-1/2 w-2/5 left-20 text-slate-100 overflow-hidden ">
                                <motion.p variants={textVariants} className="w-60 font-oswald text-8xl">{item.name?.toUpperCase()}</motion.p>
                                <motion.p variants={textVariants} className="py-6 font-oswald italic text-2xl">{`"${item.quote ?? ""}"`}</motion.p>
                            </motion.div>
                        </div>
                    </div>)}
                </AnimatePresence>
            </div>
        </>
    )
}

export default Slide
