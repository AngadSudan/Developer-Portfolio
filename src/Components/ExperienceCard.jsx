import React from "react";

function ExperienceCard({
  logo = "https://imgs.search.brave.com/aML63go3qx4B2AZEeBGsMDESVu76lSffF1mIpwch2vs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzg4LzA3Lzg0/LzM2MF9GXzM4ODA3/ODQ1NF9tS3RiZFhZ/RjljeVFvdkNDVHNq/cUkwZ2JmdTdnQ2NT/cC5qcGc",
  Position,
  Organisation,
  Pointers,
  Timeline,
}) {
  return (
    <div className="bg-black mx-2 h-fit p-4 rounded-md my-4 md:w-2/3">
      <div className="mb-2 p-2 flex justify-between w-full">
        <img src={logo} alt={Organisation} className="w-24 h-24 rounded-full" />
        <div>
          <h1 className="text-xl text-right my-auto font-bold">{Position}</h1>
          <h1 className="text-lg text-right my-auto">{Organisation}</h1>
          <h1 className="text-lg text-right my-auto">{Timeline}</h1>
        </div>
      </div>
      <div className="mt-6">
        <ul className="list-disc ml-8">
          {Pointers.map((pointer, index) => {
            return (
              <li key={index} className="text-lg">
                {pointer}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
