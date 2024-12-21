import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
      <div className="bg-gradient-to-br from-gray-200 via-blue-100 to-blue-200 py-10 ">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                  { title: "Posts", image: "/images/posts.png", link: "/posts" },
                  { title: "Comments", image: "/images/comments.png", link: "/comments" },
                  { title: "Albums", image: "/images/album.png", link: "/albums" },
                  { title: "Photos", image: "/images/photos.png", link: "/photos" },
                  { title: "Todos", image: "/images/todos.png", link: "/todos" },
                  { title: "Users", image: "/images/users.png", link: "/users" },
              ].map((item, index) => (
                  <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
                      <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                      <Image
                          src={item.image}
                          alt={`${item.title} Icon`}
                          width={64}
                          height={64}
                          className="mx-auto mb-4"
                      />
                      <Link href={item.link} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                          Go to {item.title}
                      </Link>
                  </div>
              ))}
          </div>
      </div>
  );
};
export default HeroSection
