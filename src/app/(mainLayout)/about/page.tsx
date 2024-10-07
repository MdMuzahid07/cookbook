"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";

const AboutUsPage = () => {
    return (
        <section className="bg-gray-100">
            <section className="bg-yellow-500 py-16">
                <div className=" mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold  mb-2">About Us</h1>
                    <p className="text-xl">Discover our passion for sharing recipes!</p>
                </div>
            </section>


            {/* about the platform section start here  */}
            <section className="px-4 xl:px-0 border-b-2 border-yellow-500">
                <div className="pt-14 lg:pt-32 pb-14 lg:pb-32 max-w-7xl mx-auto ">
                    <h3 className="text-4xl md:text-6xl font-bold mb-5">About the platform</h3>
                    <p className="text-xl md:text-2xl lg:text-3xl">  CookBook is a vibrant recipe-sharing platform designed for food enthusiasts of all levels.
                        We offer a space where individuals can share their favorite recipes, discover new culinary
                        creations, and connect with a community that shares their love for cooking. Our user-friendly
                        interface makes it easy to explore, share, and create delightful dishes from around the world.</p>
                </div>
            </section>



            {/* team section start here  */}

            <section className="bg-slate-200">
                <section className="py-32 max-w-7xl mx-auto px-4 xl:px-0">
                    <h3 className="text-3xl md:text-6xl font-bold mb-5">Our Team</h3>
                    <div className="grid lg:grid-cols-2 gap-8 mt-10">
                        {
                            [1, 2, 3, 4, 5, 6]?.map((index) => (
                                <div key={index} className="md:grid md:grid-cols-7 bg-slate-100 border-2 hover:border-yellow-500 rounded-lg  transition ease-in delay-50">
                                    <div className="md:col-span-3 w-full h-[200px] sm:h-[250px] md:h-[300px]">
                                        <Image
                                            className="h-full rounded-l-lg w-full object-cover" src="https://res.cloudinary.com/dsdbqct3r/image/upload/v1728297493/101686_eikvcv.jpg"
                                            alt="team member image"
                                            width={500}
                                            height={100}
                                        />
                                    </div>
                                    <div className="md:col-span-4 px-6 pt-8 relative">
                                        <h1 className="text-2xl font-bold">John Doe</h1>
                                        <p className="text-md">Ceo & Cto</p>

                                        <p className="mt-2 md:mt-4 text-xs md:text-[16px] leading-relaxed">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi ipsam velit. Incidunt est ad veritatis quisquam ipsam repudiandae explicabo?
                                        </p>

                                        <div className="md:absolute md:bottom-0 md:left-4 pt-6 pb-8">
                                            <div className="flex items-center gap-4">
                                                <Button className="rounded-lg bg-yellow-500 hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                                </Button>
                                                <Button className="rounded-lg bg-yellow-500 hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                                </Button>
                                                <Button className="rounded-lg bg-yellow-500 hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </section>


            {/* about our mission  */}

            <section className="bg-yellow-500">
                <section className="max-w-7xl mx-auto px-4 xl:px-0 border-b border-yellow-500">
                    <div className="pt-14 lg:pt-32 pb-14 lg:pb-32">
                        <h3 className="text-4xl md:text-6xl font-bold mb-5">Our Mission</h3>
                        <p className="text-xl md:text-2xl lg:text-3xl">
                            At CookBook, we believe that food brings people together. Our mission is to create a platform
                            where everyone can find inspiration, share their culinary experiences, and celebrate the joy of cooking.
                            We strive to foster a community that encourages creativity and collaboration among food lovers.
                        </p>
                    </div>
                </section>
            </section>


        </section>
    );
};

export default AboutUsPage;
