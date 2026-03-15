import React, { useRef } from "react";
import { extractText } from "../utils/textExtractor";
import { speakText, type SpeechLang } from "../utils/speech";

interface SpeakableProps {
  children: React.ReactNode;
  lang?: SpeechLang;
  holdDelay?: number;
  className?: string;
}

const Speakable: React.FC<SpeakableProps> = ({
  children,
  lang = "en-US",
  holdDelay = 500,
  className
}) => {
  const timerRef = useRef<number | null>(null);

  const text = extractText(children);

  const startHold = () => {
    timerRef.current = window.setTimeout(() => {
      speakText(text, lang);
    }, holdDelay);
  };

  const endHold = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <div
      className={className}
      onMouseDown={startHold}
      onMouseUp={endHold}
      onMouseLeave={endHold}
      onTouchStart={startHold}
      onTouchEnd={endHold}
    >
      {children}
    </div>
  );
};

export default Speakable;