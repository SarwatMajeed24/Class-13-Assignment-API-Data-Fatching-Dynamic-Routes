import Link from "next/link";

export default async function Todos() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await url.json();
  console.log(response);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 p-8">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-10">✅ All Todos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {response.map((todo: any) => (
          <Link
            href={`/dynamic-todos/${todo.id}`}
            key={todo.id}
            className="block bg-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              📋 {todo.title}
            </h2>
            <p className="text-sm text-gray-600">
              Click to view more details...
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
