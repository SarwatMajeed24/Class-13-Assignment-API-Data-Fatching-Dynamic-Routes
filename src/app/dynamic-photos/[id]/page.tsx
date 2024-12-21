import Link from "next/link";
const DynamicPhotos = async (props: any) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/photos/${props.params.id}`);
  const response = await url.json();
  console.log("single userid", response)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-blue-500">
      <div className="p-8 bg-white shadow-2xl rounded-xl max-w-lg w-full transform transition-all hover:scale-105 hover:shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          🖼️ Dynamic Photo Details
        </h1>

        <div className="space-y-4 text-lg">
          <div>
            <span className="font-semibold text-gray-700">Album Id:</span> {response.albumId}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Id:</span> {response.id}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Title:</span>
            <span className="block text-blue-600 font-medium mt-1">{response.title}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Url:</span>
            <a
              href={response.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              {response.url}
            </a>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-gray-700 mb-2">Thumbnail:</span>
            <img
              src={response.thumbnailUrl}
              alt="Thumbnail"
              className="w-24 h-24 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        <Link href="/photos" className="text-blue-500 underline mt-4 block text-center">
          🔙 Back to Photos
        </Link>
      </div>
    </div>
  );
};

export default DynamicPhotos;
