import { useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { TbZoomInArea } from "react-icons/tb";

type LazyImageProps = {
  src: string;
  alt?: string;
  fullscreen?: boolean;
};

export default function LazyImage({
  src,
  alt,
  fullscreen = false,
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleOpenFullscreen = () => {
    if (fullscreen) {
      setIsFullscreen(true);
    }
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      {/* Normal lazy-loaded image */}
<div className="relative w-full h-full">
  <img
    src={src}
    alt={alt ?? ""}
    loading="lazy"
    onLoad={() => setLoaded(true)}
    onClick={handleOpenFullscreen}
    className={`transition-opacity duration-500
      w-full
      h-full
      object-cover
      object-center
      cursor-${fullscreen ? "zoom-in" : "default"}
      ${loaded ? "opacity-100" : "opacity-0"}
    `}
  />

  {fullscreen && (
    <TbZoomInArea
      className="absolute bottom-2 right-2 size-10 text-white dark:text-white rounded p-2 pointer-events-none"
    />
  )}
</div>

      {/* Fullscreen overlay */}
      {fullscreen && isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-[#f6f6f6]/90 dark:bg-[#181818]/90 flex items-center justify-center animate-fade-in p-4"
          onClick={handleCloseFullscreen}

        >
          {/* Close Button */}
          {<button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-6 "
          >
            <RiArrowGoBackFill className="text-black dark:text-white size-14 p-2 bg-[#f6f6f6] dark:bg-[#181818] border border-stone-600 dark:border-stone-400  rounded-xl " />
          </button>
          }


          {/* Fullscreen Image */}
          <img
            src={src}
            className="max-w-full max-h-full object-contain transform transition-transform duration-300 shadow-2xl rounded-xl"
          />
        </div>
      )}
    </>
  );
}