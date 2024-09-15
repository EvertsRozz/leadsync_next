import React from "react";
import Image from "next/image";

function StepCard(props: {
  ImageSrc: any;
  header: string;
  headerColor: string;
  text: string;
}) {
  return (
    <div className="space-between flex flex-col items-center gap-5 border border-solid border-white md:gap-8">
      <div className="pt-8">
        <Image src={props.ImageSrc} alt="" width={130} height={130} />
      </div>
      <h3
        style={{ color: `#${props.headerColor}` }}
        className="text-center text-4xl font-semibold"
      >
        {props.header}
      </h3>
      <p className="px-5 pb-12 text-center text-2xl">{props.text}</p>
    </div>
  );
}

export default StepCard;
