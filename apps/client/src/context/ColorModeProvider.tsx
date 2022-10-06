import React from "react";
import useStorage from "../hooks/useStorage";

/**
 * ----- Types
 */

interface ColorModeProviderProps {
  children: React.ReactNode;
}

export enum ColorModes {
  Dark,
  Light,
  OS,
}

export enum FinalColorModes {
  Dark,
  Light,
}

interface ColorModeContext {
  colorMode: ColorModes;
  finalColorMode: FinalColorModes;
  setMode: (mode: ColorModes) => void;
}

/**
 * ----- Initialize Values -----
 */

const colorModeToken = "theme";

const ColorModeContext = React.createContext<ColorModeContext | undefined>(
  undefined
);

/**
 * ----- Provider -----
 */

const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  /**
   * ----- Hook Initialization -----
   */

  const { getItem, setItem, removeItem } = useStorage();

  const [colorMode, setColorMode] = React.useState<ColorModes>(ColorModes.OS);
  const [finalColorMode, setFinalColorMode] = React.useState<FinalColorModes>(
    FinalColorModes.Light
  );

  /**
   * ----- Functions -----
   */

  const setMode = React.useCallback((mode: ColorModes) => {
    setColorMode(mode);
  }, []);

  /**
   * ----- Logic -----
   */

  // Setup correct mode on first render
  React.useEffect(() => {
    const token = getItem(colorModeToken);
    if (!token) return;
    if (token === "dark") setColorMode(ColorModes.Dark);
    else if (token === "light") setColorMode(ColorModes.Light);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(colorMode);

  // Update local storage to match state
  React.useEffect(() => {
    switch (colorMode) {
      case ColorModes.Light: {
        setItem(colorModeToken, "light");
        break;
      }
      case ColorModes.Dark: {
        setItem(colorModeToken, "dark");
        break;
      }
      default:
        removeItem(colorModeToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

  // Set color mode based on all data
  React.useEffect(() => {
    if (
      colorMode === ColorModes.Dark ||
      (!(colorModeToken in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setFinalColorMode(FinalColorModes.Dark);
      document.documentElement.classList.add("dark");
    } else {
      setFinalColorMode(FinalColorModes.Light);
      document.documentElement.classList.remove("dark");
    }
  }, [colorMode]);

  /**
   * ----- Render -----
   */

  return (
    <ColorModeContext.Provider value={{ colorMode, finalColorMode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorMode = () => {
  const context = React.useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error(
      "useColorMode can only be used in a component wrapped by ColorModeProvider"
    );
  }

  return context;
};

export { ColorModeProvider, useColorMode };
