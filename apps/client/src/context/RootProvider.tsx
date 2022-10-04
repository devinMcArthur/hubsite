import MyApolloProvider from "../services/ApolloProvider";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <MyApolloProvider>{children}</MyApolloProvider>;
};

export default RootProvider;
