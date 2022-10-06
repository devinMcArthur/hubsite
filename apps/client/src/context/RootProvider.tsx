import MyApolloProvider from "../services/ApolloProvider";
import { ColorModeProvider } from "./ColorModeProvider";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MyApolloProvider>
      <ColorModeProvider>{children}</ColorModeProvider>
    </MyApolloProvider>
  );
};

export default RootProvider;
