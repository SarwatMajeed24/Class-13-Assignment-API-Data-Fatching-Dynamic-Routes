import Link from "next/link";
const DynamicPosts = async (props: any) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`);
  const response = await url.json();
  console.log("single userid", response)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-blue-500">
      <div className="p-8 bg-white shadow-2xl rounded-xl max-w-lg w-full transform transition-all hover:scale-105 hover:shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          📜 Dynamic Post Details
        </h1>

        <div className="space-y-4 text-lg">
          <div>
            <span className="font-semibold text-gray-700">User Id:</span> {response.userId}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Id:</span> {response.id}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Title:</span>
            <span className="block text-blue-600 font-medium mt-1">{response.title}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Body:</span>
            <p className="text-gray-700 mt-2 leading-relaxed">{response.body}</p>
          </div>
        </div>
        <Link href="/posts" className="text-blue-500 underline mt-4 block text-center">
          🔙 Back to Posts
        </Link>
      </div>
    </div>
  );
};

export default DynamicPosts;
