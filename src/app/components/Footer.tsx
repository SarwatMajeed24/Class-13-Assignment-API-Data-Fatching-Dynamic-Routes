import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-slate-500 text-black py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-xl md:text-3xl font-extrabold">
                    Made By: Sarwat Majeed (Student Leader)
                </h1>
                <div className="mt-4">
                    <Link
                        href="https://www.linkedin.com/in/sarwat-majeed-a6a2891a4"
                        target="_blank"
                        className="flex justify-center items-center gap-2 text-blue-500 text-lg md:text-xl hover:text-blue-400 transition-colors"
                    >
                        <FaLinkedin className="text-2xl" />
                        Connect on LinkedIn
                    </Link>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer
