import React from "react";

function TechnologyCard({ index, image, name, disabled = false }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      key={index}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="my-auto mx-3 relative flex flex-col items-center"
    >
      <img src={image} alt={name} className="w-20 h-20" />
      {disabled && (
        <h2
          className={`${
            hover ? "block" : "hidden"
          } absolute top-[-50%] text-center px-2 left-0 mb-4 text-xl`}
        >
          {name}
        </h2>
      )}
    </div>
  );
}

export default TechnologyCard;
