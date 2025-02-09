"use client"; //next.js directive indicating the file should be treated as a client-side component
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; //Bringing in tools from tanstack to manage data
import { ReactNode } from "react"; //typescript type representing anything that can be rendered by React. Gives better type safety while developing

const queryClient = new QueryClient(); //this object is the manager of the queries, handeling caching and syncing data

export function Providers({ children }: { children: ReactNode }) {
  //defines a react functional component named Providers. It takes a prop called children, ReactNode mean it can take any valid react content eg numbers, strings, booleans
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider> //any child component can now use TanStack query to fetch and manage data
  );
}

//this code sets up a provider component (Providers) and makes the TanStack Query client available to the entire app. Any component that is a child of providers can now use TanStack Query to fetch data, handle caching and sync data.
