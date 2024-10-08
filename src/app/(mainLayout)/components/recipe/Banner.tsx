"use client"
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section className="bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/v1728369437/1812_fo8i2y.jpg')] h-[350px] sm:h-[400px] md:h-[500] lg:h-[650px] xl:h-screen bg-no-repeat bg-cover bg-center w-full">
            <div className=" bg-slate-950 bg-opacity-25 h-full w-full">
                <div className="max-w-7xl mx-auto w-full px-6 flex items-center h-full">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                        >
                            <h1 className="text-2xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-100 text-left">Discover & Share Culinary </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
                        >
                            <h1 className="text-2xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-100 text-left">Masterpieces </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
                        >
                            <p className="md:text-lg font-bold text-slate-200 lg:text-2xl mt-8 tracking-wider text-left">Explore a world of flavors with thousands of recipes at your fingertips, ready to inspire your next culinary adventure!</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner;