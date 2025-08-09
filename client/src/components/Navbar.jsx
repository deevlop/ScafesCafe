
import { motion } from "framer-motion"
export default function Navbar({ setPage, isNavOpen, setIsNavOpen }) {
    return (
        <div className="absolute top-0 left-0 h-full flex items-start z-20">
            {/* Menu icon when closed */}
            {!isNavOpen && (
                <button
                onClick={() => setIsNavOpen(true)}
                className="p-3 m-2 text-white focus:outline-none bg-black"
                >
                {/* Simple Hamburger Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            )}

            {
                isNavOpen &&
                <>
                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: isNavOpen ? 0 : "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="bg-black bg-opacity-100 text-white w-64 h-full shadow-lg flex flex-col"
                    >
                        {/* Close button */}
                        <button
                        onClick={() => setIsNavOpen(false)}
                        className="py-2 px-4 mr-4 mt-2 text-white self-end bg-black"
                        >
                        ✕
                        </button>

                        {/* Nav items */}
                        <nav className="flex flex-col space-y-4 p-4">
                        <button className="hover:underline text-left bg-black" onClick={() => setPage("landing")}>
                            Home
                        </button>
                        <button className="hover:underline text-left bg-black" onClick={() => setPage("menu")}>
                            Menu
                        </button>
                        <button className="hover:underline text-left bg-black" onClick={() => setPage("about")}>
                            About
                        </button>
                        <button className="hover:underline text-left bg-black" onClick={() => setPage("contact")}>
                            Contact
                        </button>
                        </nav>
                    </motion.div>
                </>

            }


        </div>

    )
}
