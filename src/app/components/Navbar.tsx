import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <h1 className="text-xl font-bold">
                    Assignment of class # 13 <br /> Tuesday 7pm to 10pm
                </h1>
                <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 w-full md:w-auto">
                    {[
                        { title: "Home", link: "/" },
                        { title: "Posts", link: "/posts" },
                        { title: "Comments", link: "/comments" },
                        { title: "Albums", link: "/albums" },
                        { title: "Photos", link: "/photos" },
                        { title: "Todos", link: "/todos" },
                        { title: "Users", link: "/users" },
                    ].map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.link}
                                className="block px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 hover:scale-105 transition-transform"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar
