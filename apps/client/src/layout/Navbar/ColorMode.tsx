import { Menu } from "@headlessui/react";
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import {
  ColorModes,
  FinalColorModes,
  useColorMode,
} from "../../context/ColorModeProvider";

const ColorMode = () => {
  const { setMode, colorMode, finalColorMode } = useColorMode();

  /**
   * ----- Render -----
   */

  const sunIcon = React.useMemo(() => {
    const chosen = colorMode === ColorModes.Light;
    return (
      <SunIcon
        className={`h-6 w-6 stroke-slate-400 dark:stroke-slate-500 ${
          chosen && "stroke-sky-500 fill-sky-400/20"
        }`}
      />
    );
  }, [colorMode]);

  const moonIcon = React.useMemo(() => {
    const chosen = colorMode === ColorModes.Dark;
    return (
      <MoonIcon
        className={`h-6 w-6 stroke-slate-500 ${
          chosen && "dark:stroke-sky-500 fill-sky-400/20"
        }`}
      />
    );
  }, [colorMode]);

  const osIcon = React.useMemo(() => {
    const chosen = colorMode === ColorModes.OS;
    return (
      <ComputerDesktopIcon
        className={`h-6 w-6 stroke-slate-400 dark:stroke-slate-500 ${
          chosen &&
          "stroke-sky-500 dark:stroke-sky-500 fill-sky-400/20 dark:fill-sky-400/20"
        }`}
      />
    );
  }, [colorMode]);

  const menuIcon = React.useMemo(() => {
    switch (colorMode) {
      case ColorModes.Light: {
        return sunIcon;
      }
      case ColorModes.Dark: {
        return moonIcon;
      }
      case ColorModes.OS: {
        if (finalColorMode === FinalColorModes.Light) return sunIcon;
        else return moonIcon;
      }
    }
  }, [colorMode, finalColorMode, moonIcon, sunIcon]);

  return (
    <Menu>
      <Menu.Button>{menuIcon}</Menu.Button>
      <Menu.Items className="absolute top-full right-0 w-32 mt-6 pt-1 pb-1 rounded-md bg-white text-sm shadow-lg overflow-hidden font-semibold  text-slate-700 dark:bg-slate-800 dark:highlight-white/5 dark:text-slate-300">
        <Menu.Item>
          {({ active }) => {
            const chosen = colorMode === ColorModes.Light;
            return (
              <div
                className={`flex items-center py-1 px-2 ${
                  active && "bg-slate-100 dark:bg-slate-700"
                } ${chosen && "text-sky-500"}`}
              >
                {sunIcon}
                <button
                  className={`flex w-full items-center px-2 text-md`}
                  onClick={() => setMode(ColorModes.Light)}
                >
                  Light
                </button>
              </div>
            );
          }}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => {
            const chosen = colorMode === ColorModes.Dark;
            return (
              <div
                className={`flex items-center py-1 px-2 ${
                  active && "bg-slate-100 dark:bg-slate-700"
                } ${chosen && "text-sky-500"}`}
              >
                {moonIcon}
                <button
                  onClick={() => setMode(ColorModes.Dark)}
                  className={`flex w-full items-center px-2 text-md`}
                >
                  Dark
                </button>
              </div>
            );
          }}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => {
            const chosen = colorMode === ColorModes.OS;
            return (
              <div
                className={`flex items-center py-1 px-2 ${
                  active && "bg-slate-100 dark:bg-slate-700"
                } ${chosen && "text-sky-500"}`}
              >
                {osIcon}
                <button
                  className={`flex w-full items-center px-2 text-md`}
                  onClick={() => setMode(ColorModes.OS)}
                >
                  OS
                </button>
              </div>
            );
          }}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default ColorMode;
