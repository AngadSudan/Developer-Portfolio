import React from "react";
import TestimonialCard from "./TestimonialCard";
// import { HoverBorderGradient } from "./ui/hover-border-gradient";

function Testimonials() {
  const data = [
    {
      profilePic:
        "https://media.licdn.com/dms/image/v2/D5603AQF-AZSuuxCeMA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722771251707?e=1752710400&v=beta&t=U3KPVMyEvPio6qpGB9LsI67SLBbnIga5p2NdBf6P6fk",
      name: "Robin Gupta",
      title: "CEO- TBB Media",
      githubUrl: "",
      linkedinUrl: "https://www.linkedin.com/in/robin-gupta-r16197g/",
      testimonial:
        "It was a pleasure working with Angad. He's a humble and highly skilled professional who truly knows his craft. Always available for a call and a master of frontend development.",
    },
    {
      profilePic: "https://avatars.githubusercontent.com/u/123460167?v=4",
      name: "Soham Chakraborty",
      title: "Team Lead- J Media Corp.",
      githubUrl: "https://github.com/Soham2395",
      linkedinUrl: "https://www.linkedin.com/in/soham-chakraborty-108450255/",
      testimonial:
        "He's a hardworker and does the work before the deadlines. Highly appreciate that part of him.",
    },
  ];
  return (
    <div className="min-h-screen place-items-center">
      <h1 className="text-6xl  font-bold text-center">Testimonials</h1>
      <h2 className="text-4xl font-semibold text-center my-5">
        Know what people say about me
      </h2>
      <div className=" grid mt-20 grid-cols-1 md:grid-cols-2 w-4/5  justify-evenly gap-5 ">
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
