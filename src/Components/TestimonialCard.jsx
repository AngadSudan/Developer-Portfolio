import React from "react";

function TestimonialCard({
  profilePic = "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.webp?a=1&b=1&s=612x612&w=0&k=20&c=8lmFJ68jo0AB02jBDHswcJjuh_YhQMKEC7nTrtgQ58I=",
  name,
  title,
  testimonial,
}) {
  return (
    <div className="p-4 border-white border-2 rounded-md">
      <div className="flex justify-between mx-auto w-[90%]">
        <div
          src={profilePic}
          alt={name}
          style={{
            backgroundImage: `url(${profilePic})`,
            backgroundSize: "cover",
            backgroundOrigin: "center",
          }}
          className="rounded-full h-20 w-20"
        />
        <div className="text-right">
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
      </div>
      <p className="w-full text-center my-4 text-wrap leading-relaxed tracking-tight ">
        {testimonial}
      </p>
    </div>
  );
}

export default TestimonialCard;
