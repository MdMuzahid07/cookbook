/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chip } from "@nextui-org/chip"

const DetailsPageBanner = ({ recipe }: any) => {
    return (
        <section className="bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/v1728369437/1812_fo8i2y.jpg')] h-[350px] sm:h-[400px] md:h-[500] lg:h-[650px] bg-no-repeat bg-cover bg-center w-full">
            <div className=" bg-slate-950 bg-opacity-45 h-full w-full">
                <div className="max-w-7xl mx-auto w-full px-6 flex items-center h-full">
                    <div className="flex flex-col">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-100 text-left">{recipe?.title}</h1>
                        <p className="text-2xl md:text-4xl text-slate-100 mt-7">{recipe?.description}</p>
                        <div className="mt-5">
                            <Chip color="warning" className="text-sm sm:text-xl bg-yellow-500 px-3 sm:px-5 py-4 sm:py-6" variant="solid">
                                <span className="font-bold tracking-wider">
                                    By {recipe?.author?.name} | {recipe?.category}
                                </span>
                            </Chip>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default DetailsPageBanner