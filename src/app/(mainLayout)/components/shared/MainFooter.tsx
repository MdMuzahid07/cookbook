import Image from "next/image";

const MainFooter = () => {
    return (
        <footer className="bg-slate-950 text-gray-200">
            <div className="max-w-7xl mx-auto pt-20 px-5 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div>
                        <div className="flex items-center gap-2">
                            <Image
                                alt="logo"
                                src="https://res.cloudinary.com/dsdbqct3r/image/upload/v1728282514/rishhyytfbjqvaqxjqmh.png"
                                width={30}
                                height={30}
                                className="rounded-full border-2 border-yellow-500"
                            />
                            <h2 className="text-2xl font-bold text-yellow-400">CookBook</h2>
                        </div>
                        <div className="mt-5">
                            <p>
                                Discover and share the best homemade recipes from around the world.
                                Your kitchen, your rules, our recipes!
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-yellow-400">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-400">Recipes</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-400">Submit a Recipe</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-400">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-400">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                        </div>

                        <div className="mt-5">
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <p className="text-sm">Email: support@cookbook.com</p>
                            <p className="text-sm">Phone: +1(000) 567-890</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-slate-700 py-10 text-center text-sm">
                    <p>&copy; 2024 CookBook. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
