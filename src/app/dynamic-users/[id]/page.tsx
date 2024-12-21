import Link from "next/link";
const DynamicUsers = async (props: any) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`);
  const response = await url.json();
  console.log("single userid", response)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-blue-500">
      <div className="p-8 bg-white shadow-2xl rounded-xl max-w-3xl w-full transform transition-all hover:scale-105 hover:shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          👤 Dynamic User Details
        </h1>

        {/* Personal Information */}
        <div className="p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 border rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Personal Information</h2>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Id:</span> {response.id}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Name:</span> {response.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Username:</span> {response.username}
          </p>
        </div>

        {/* Address */}
        <div className="p-6 bg-gradient-to-r from-green-50 via-white to-green-50 border rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Address</h2>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Street:</span> {response.address.street}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Suite:</span> {response.address.suite}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">City:</span> {response.address.city}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Zip Code:</span> {response.address.zipcode}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Latitude:</span> {response.address.geo.lat}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Longitude:</span> {response.address.geo.lng}
          </p>
        </div>

        {/* Contact */}
        <div className="p-6 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 border rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">Contact</h2>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Phone:</span> {response.phone}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Website:</span>{" "}
            <a
              href={`https://${response.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              {response.website}
            </a>
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Email:</span>{" "}
            <a
              href={`mailto:${response.email}`}
              className="text-blue-500 underline hover:text-blue-700"
            >
              {response.email}
            </a>
          </p>
        </div>

        {/* Company */}
        <div className="p-6 bg-gradient-to-r from-red-50 via-white to-red-50 border rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Company</h2>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Name:</span> {response.company.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Catch Phrase:</span>{" "}
            <em>{response.company.catchPhrase}</em>
          </p>
          <p className="mb-2">
            <span className="font-semibold text-gray-700">Bs:</span> {response.company.bs}
          </p>
        </div>
        <Link href="/users" className="text-blue-500 underline mt-4 block text-center">
          🔙 Back to Users
        </Link>
      </div>
    </div>
  );
};

export default DynamicUsers;
