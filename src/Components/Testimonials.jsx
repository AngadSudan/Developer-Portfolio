import React from "react";
import TestimonialCard from "./TestimonialCard";
// import { HoverBorderGradient } from "./ui/hover-border-gradient";

function Testimonials() {
  const data = [
    {
      profilePic: "https://randomuser.me/api/portraits",
      name: "John Doe",
      title: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      profilePic: "https://randomuser.me/api/portraits",
      name: "John Doe",
      title: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      profilePic: "https://randomuser.me/api/portraits",
      name: "John Doe",
      title: "CEO",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="min-h-screen place-items-center">
      <h1 className="text-6xl  font-bold text-center">Testimonials</h1>
      <h2 className="text-4xl font-semibold text-center my-5">
        Know what people say about me
      </h2>
      <div className="grid mt-20 grid-cols-1 md:grid-cols-3 w-4/5 gap-5 ">
        {data.map((item, index) => (
          <TestimonialCard
            // key={index}
            // profilePic={item.profilePic}
            name={item.name}
            title={item.title}
            testimonial={item.testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
