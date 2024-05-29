"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { gcTime: 600000 } },
});

export default function ReactQueryProvider({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
