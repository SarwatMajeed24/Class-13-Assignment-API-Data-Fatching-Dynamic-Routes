import Link from "next/link";

export default async function Albums() {
  const url = await fetch("https://jsonplaceholder.typicode.com/albums");
  const response = await url.json();
  console.log(response);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 p-8">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-10">📀 All Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {response.map((album: any) => (
          <Link
            href={`/dynamic-albums/${album.id}`}
            key={album.id}
            className="block bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-lg font-semibold text-blue-700 mb-2">
              🎵 {album.title}
            </h2>
            <p className="text-sm text-gray-600">
              Click to view album details...</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
