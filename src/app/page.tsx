import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { PortableText } from "next-sanity";

let getdata = async () => {
  let fetchdata = await client.fetch(`*[_type == 'student']{
    name,
    age,
    gender,
    "imageUrl": image.asset->url,
    hobbies,
    about,
    dob,
    "documentUrl": documents.asset->url,
    address {
      houseNumber,
      areaName,
      city
    },
    subjects,
    content
  }`);
  return fetchdata;
};

export default async function Home() {
  let data = await getdata();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-sky-100 bg-cover bg-fixed" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className="max-w-5xl w-full bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-pink-800">
          SANITY BACKEND DATA USE FOR NEXT JS
        </h1>
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((val: any, i: number) => (
            <li
              key={i}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out bg-white p-4 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {val.imageUrl && (
                  <div className="mb-4">
                    <Image
                      src={val.imageUrl}
                      alt={val.name}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                )}
                <h2 className="text-xl font-bold mb-2 text-gray-800">{val.name}</h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Age:</span> {val.age}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Gender:</span> {val.gender}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Hobbies:</span> {val.hobbies?.join(", ")}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">About:</span> {val.about?.join(", ")}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Date of Birth:</span> {val.dob}
                </p>
                {val.documentUrl && (
                  <div className="mt-2">
                    <a
                      href={val.documentUrl}
                      className="text-blue-600 hover:underline"
                      download
                    >
                      Download Document
                    </a>
                  </div>
                )}
                <p className="text-gray-700 mt-2">
                  Address: {val.address?.houseNumber}, {val.address?.areaName}, {val.address?.city}
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Subjects:</span> {val.subjects?.join(", ")}
                </p>
                <div className="mt-4 text-left w-full">
                  <PortableText value={val.content} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
