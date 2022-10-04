import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { localStorageTokenKey } from "../data/constants";
import useStorage from "../hooks/useStorage";

const MyApolloProvider = ({ children }: { children: React.ReactNode }) => {
  const { getItem } = useStorage();

  const token = getItem(localStorageTokenKey);

  const httpLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization:
          localStorage.getItem(localStorageTokenKey) || token || "",
      },
    };
  });

  const splitLink = process.browser ? authLink.concat(httpLink) : httpLink;

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default MyApolloProvider;
