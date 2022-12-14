import React from "react";
import ColorMode from "./ColorMode";

const Navbar = () => {
  /**
   * ----- Hook Initialization -----
   */

  const [scrollTop, setScrollTop] = React.useState(true);

  /**
   * ----- Functions -----
   */

  const handleScroll = () => {
    if (window.pageYOffset === 0) setScrollTop(true);
    else setScrollTop(false);
  };

  /**
   * ----- Variables -----
   */

  const background = React.useMemo(() => {
    if (scrollTop) return "bg-transparent";
    else return "bg-white/75 dark:bg-slate-900/75";
  }, [scrollTop]);

  /**
   * ----- Logic -----
   */

  React.useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", handleScroll);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  /**
   * ----- Rendering -----
   */

  return (
    <div
      className={`sticky top-0 z-40 h-nav w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-700/10 supports-backdrop-blue:bg-white/95 ${background}`}
    >
      <div className="max-w-8xl mx-auto">
        <div className="py-4 mx-4 lg:mx-0">
          <div className="relative w-full flex flex-row justify-between">
            <div>
              <a>Hubsite</a>
            </div>
            <ColorMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
