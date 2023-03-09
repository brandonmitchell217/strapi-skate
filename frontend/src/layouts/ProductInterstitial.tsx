import React from "react";

interface ProductInterstitialProps {
  title: string;
  children: React.ReactNode;
  contClass?: string;
  innerClass?: string;
}

export default function ProductInterstitialLayout({
  title,
  children,
  contClass,
  innerClass,
}: ProductInterstitialProps) {
  return (
    <div className={`py-24 ${contClass}`}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <div
        className={`p-5 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 place-items-center gap-6 ${innerClass}`}
      >
        {children}
      </div>
    </div>
  );
}
