
const Banner = () => {
    return (
        <section className="bg-[url('https://res.cloudinary.com/dsdbqct3r/image/upload/v1728364305/banner_dewvvs.jpg')] h-[250px] sm:h-[400px] md:h-[500] lg:h-[650px] xl:h-[750px] bg-no-repeat bg-cover bg-center w-full">
            <div className=" bg-slate-950 bg-opacity-45 h-full w-full">
                <div className="max-w-7xl mx-auto w-full px-6 flex items-center h-full">
                    <div>
                        <h1 className="text-2xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-100">Discover & Share Culinary <br /> Masterpieces</h1>
                        <p className="md:text-lg font-bold text-slate-200 lg:text-2xl pl-1 mt-8 tracking-wider">Explore a world of flavors with thousands of recipes at your fingertips, ready to inspire your next culinary adventure!</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner;