import { useEffect, useState } from "react";

import ActionButton from "./ActionButton";


const DEFAULT_SIZE = 16;
const MIN_SIZE = 12;
const MAX_SIZE = 28;
const STEP = 2;

const STORAGE_KEY = "fontSize";

const TextSizeController: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? Number(saved) : DEFAULT_SIZE;

    if (Number.isNaN(parsed)) return DEFAULT_SIZE;
    return Math.min(Math.max(parsed, MIN_SIZE), MAX_SIZE);
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem(STORAGE_KEY, fontSize.toString());
  }, [fontSize]);

  const increase = (): void => {
    setFontSize(size => Math.min(size + STEP, MAX_SIZE));
  };

  const decrease = (): void => {
    setFontSize(size => Math.max(size - STEP, MIN_SIZE));
  };

  const reset = (): void => {
    setFontSize(DEFAULT_SIZE);
  };

  return (
    <div style={styles.wrapper} aria-label="Text size controls">
      <ActionButton 
        onClick={decrease}
        disabled={fontSize <= MIN_SIZE}
      >
        A−
      </ActionButton>

      <ActionButton
        onClick={reset}
      >
        Reset
      </ActionButton>

      <ActionButton
        onClick={increase}
        disabled={fontSize >= MAX_SIZE}
      >
        A+
      </ActionButton>
    </div>
  );
};

export default TextSizeController;

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center"
  }
};
