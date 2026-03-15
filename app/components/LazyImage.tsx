import { useState } from "react";
import { IoClose } from "react-icons/io5";

type LazyImageProps = {
  src: string;
  alt?: string;
  allowToClickToShowInFullscreen?: boolean;
};

export default function LazyImage({
  src,
  alt,
  allowToClickToShowInFullscreen = false,
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleOpenFullscreen = () => {
    if (allowToClickToShowInFullscreen) {
      setIsFullscreen(true);
    }
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      {/* Normal lazy-loaded image */}
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
           ${loaded ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* Fullscreen overlay */}
      {allowToClickToShowInFullscreen && isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-white/95 dark:bg-black/95 flex items-center justify-center animate-fade-in p-4"
          onClick={handleCloseFullscreen}

        >
          {/* Close Button */}
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-8 text-white text-3xl p-2 rounded-full bg-black/50 dark:bg-white/50"
          >
            <IoClose />
          </button>

          {/* Fullscreen Image */}
          <img
            src={src}
            className="max-w-full max-h-full object-contain transform transition-transform duration-300 border border-black/50 shadow-2xl rounded-xl"
          />
        </div>
      )}
    </>
  );
}