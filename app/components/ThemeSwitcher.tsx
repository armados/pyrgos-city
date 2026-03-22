import { useEffect, useState } from "react";
import { useTheme } from "~/hooks/useTheme";
import type { Theme } from "~/hooks/useTheme";
import ActionButton from "./ActionButton";

import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();


  useEffect(() => {
    console.log('Changed Theme Mode:', theme);
  }, [theme]);


    return (
        <>
            {theme === "light" ?

                <ActionButton
                    onClick={() => setTheme("dark")}
                    className="p-2"
                >
                    <IoSunny className="w-6 h-6 text-yellow-400" />
                </ActionButton>
                
                :

                <ActionButton
                    onClick={() => setTheme("light")}
                    className="p-2"
                >
                    <IoMoon className="w-6 h-6 text-cyan-400" />
                </ActionButton>

            }
        </>
    );
}
