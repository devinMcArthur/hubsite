import React from "react";

interface MainPageContainerProps {
  children?: React.ReactNode;
}

const MainPageContainer = ({ children }: MainPageContainerProps) => {
  return <div className="mx-auto px-4 sm:px-6 md:px-8">{children}</div>;
};

export default MainPageContainer;
