import React from "react";
import { twMerge } from "tailwind-merge";
import LazyImage from "./LazyImage";


interface ImageProps {
  src: string;
  caption?: string;
  fullscreen?: boolean;
  floatLeft?: boolean;
  floatRight?: boolean;
  center?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  caption,
  fullscreen = false,
  floatLeft = false,
  floatRight = false,
  center = false,
}) => {


  return (

    <div className={twMerge("w-1/3 m-4 overflow-hidden rounded-xl shadow-md bg-[#BDC7E2] dark:bg-[#3D6891]", floatLeft && "float-left", floatRight && "float-right", center && "mx-auto")}>
      <div className="aspect-video flex items-center justify-center ">
        <LazyImage
          src={src}
          fullscreen={fullscreen}
        />
      </div>
      {caption && <div className="p-2 text-sm text-center">{caption}</div>}
    </div>
  );
};

export default Image;