import React from "react";
import ShoppingCartProvider from "@/context/ShoppingCart";
import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ShoppingCartProvider>
    </AuthProvider>
  );
}
