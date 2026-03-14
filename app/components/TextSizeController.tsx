import { useEffect, useState } from "react";

import ActionButton from "./ActionButton";


import { MdOutlineTextFields } from "react-icons/md";
import { MdOutlineTextIncrease } from "react-icons/md";
import { MdOutlineTextDecrease } from "react-icons/md";


const DEFAULT_SIZE = 16;
const MIN_SIZE = 12;
const MAX_SIZE = 34;
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
    <div className="flex gap-2">
      <ActionButton 
        onClick={decrease}
        disabled={fontSize <= MIN_SIZE}
      >
        <MdOutlineTextDecrease className="w-12 h-12 text-gray-600 dark:text-gray-100 p-2" />
      </ActionButton>

      <ActionButton
        onClick={reset}
      >
        <MdOutlineTextFields className="w-12 h-12 text-gray-600 dark:text-gray-100 p-2" />
      </ActionButton>

      <ActionButton
        onClick={increase}
        disabled={fontSize >= MAX_SIZE}
      >
        <MdOutlineTextIncrease className="w-12 h-12 text-gray-600 dark:text-gray-100 p-2" />
      </ActionButton>
    </div>
  );
};

export default TextSizeController;


