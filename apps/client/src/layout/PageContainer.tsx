interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="max-w-8xl mx-auto">{children}</div>;
};

export default PageContainer;
