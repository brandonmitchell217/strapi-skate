import React from "react";
import Head from "next/head";
import Nav from "@/components/Nav";
import { useAuth } from "@/context/AuthContext";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { user } = useAuth();

  return (
    <>
      <Nav />
      <div className={`min-h-screen relative`}>{children}</div>
      <Footer />
    </>
  );
}
