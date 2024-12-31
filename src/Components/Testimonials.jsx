import React from "react";
import TestimonialCard from "./TestimonialCard";
// import { HoverBorderGradient } from "./ui/hover-border-gradient";

function Testimonials() {
  const data = [
    {
      profilePic: "https://avatars.githubusercontent.com/u/123460167?v=4",
      name: "Soham Chakraborty",
      title: "Team Lead- JP Morgan Corp.",
      githubUrl: "https://github.com/Soham2395",
      linkedinUrl: "https://www.linkedin.com/in/soham-chakraborty-108450255/",
      testimonial:
        "He's a hardworker and does the match the deadlines. Highly appreciate that part of him.",
    },
    {
      profilePic:
        "https://media.licdn.com/dms/image/v2/D5603AQHJJQu8j0lnnw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730834243174?e=1741219200&v=beta&t=j64_Ec11n9ckkYkBUmua6vQCda108QVoSbcqrny6eKs",
      name: "Akshat Singla",
      title: "Team Member - Team Daksh",
      githubUrl: "https://github.com/Akshat-singla",
      linkedinUrl: "https://www.linkedin.com/in/akshat-singla-b41bbb331/",
      testimonial:
        "It was great collaborating with him on Daksh. Everything was pre-planned, and well executed. He is a great team player and leader.",
    },
  ];
  return (
    <div className="min-h-screen place-items-center">
      <h1 className="text-6xl  font-bold text-center">Testimonials</h1>
      <h2 className="text-4xl font-semibold text-center my-5">
        Know what people say about me
      </h2>
      <div className=" grid mt-20 grid-cols-1 md:grid-cols-3 w-4/5  justify-evenly gap-5 ">
        {data.map((item, index) => (
          <TestimonialCard
            index={index}
            profilePic={item.profilePic}
            name={item.name}
            title={item.title}
            testimonial={item.testimonial}
            githubUrl={item.githubUrl}
            linkedinUrl={item.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
