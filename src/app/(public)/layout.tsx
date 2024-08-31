import React from "react";
import { RootLayoutProps } from "../layout";

export default function PublicLayout({ children }: RootLayoutProps) {
  return (
    <main className="bg-cover-image">
      <div className="overlay flex flex-col justify-center items-center gap-3 p-5 h-full">
        
        {children}
      </div>
    </main>
  );
}
