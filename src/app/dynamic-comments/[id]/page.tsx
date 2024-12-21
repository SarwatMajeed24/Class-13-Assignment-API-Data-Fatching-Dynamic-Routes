import Link from "next/link";
const DynamicComments = async (props: any) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`);
  const response = await url.json();
  console.log("single userid", response)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-blue-500">
      <div className="p-8 bg-white shadow-2xl rounded-xl max-w-lg w-full transform transition-all hover:scale-105 hover:shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          💬 Dynamic Comment Details
        </h1>

        <div className="space-y-4 text-lg">
          <div>
            <span className="font-semibold text-gray-700">Post Id:</span> {response.postId}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Id:</span> {response.id}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Name:</span>
            <span className="block text-blue-600 font-medium mt-1">{response.name}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Email:</span>
            <a
              href={`mailto:${response.email}`}
              className="text-blue-500 underline hover:text-blue-700"
            >
              {response.email}
            </a>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Body:</span>
            <p className="text-gray-700 mt-2 leading-relaxed">{response.body}</p>
          </div>
        </div>
        <Link href="/comments" className="text-blue-500 underline mt-4 block text-center">
          🔙 Back to Comments
        </Link>
      </div>
    </div>
  );
};

export default DynamicComments;
