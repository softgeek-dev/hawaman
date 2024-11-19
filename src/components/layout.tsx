import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-xs">Made with 💗 by DevRam</p>
        </div>
      </footer>
    </div>
  );
}
