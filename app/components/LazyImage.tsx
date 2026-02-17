import { useEffect, useState } from "react";


export default function LazyImage({ src, alt }: { src: string; alt?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt ?? ""}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-500 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}