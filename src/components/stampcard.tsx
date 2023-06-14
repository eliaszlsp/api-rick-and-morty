import React from "react";
interface stamp {
  status: string;
}

const StampCard = (props: stamp) => {
  let stampComponent;

  if (props.status === "Alive") {
    stampComponent = (
      <span
        className="font-courier inline-block rotate-12 transform rounded-full border-4 border-green-500 px-4 py-1 text-2xl font-bold uppercase text-green-500 mix-blend-multiply"
        style={{
          WebkitMaskImage:
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png')",
          WebkitMaskSize: "944px 604px",
        }}
      >
        Alive
      </span>
    );
  } else if (props.status === "unknown") {
    stampComponent = (
      <span
        className="font-courier inline-block rotate-12 transform rounded-full border-4 border-gray-500 px-4 py-1 text-2xl font-bold uppercase text-gray-500 mix-blend-multiply"
        style={{
          WebkitMaskImage:
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png')",
          WebkitMaskSize: "944px 604px",
        }}
      >
        Unknown
      </span>
    );
  } else {
    stampComponent = (
      <span
        className="font-courier inline-block rotate-12 transform rounded-full border-4 border-red-500 px-4 py-1 text-2xl font-bold uppercase text-red-500 mix-blend-multiply"
        style={{
          WebkitMaskImage:
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png')",
          WebkitMaskSize: "944px 604px",
        }}
      >
        dead
      </span>
    );
  }

  return <div>{stampComponent}</div>;
};

export default StampCard;
