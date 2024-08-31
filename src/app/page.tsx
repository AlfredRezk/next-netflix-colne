import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  const currentUser = true;

  return (
    <main className="bg-cover-image">
      <div className="overlay h-full flex flex-col justify-center items-center gap-3 text-center">
        <h1 className="text-5xl font-extrabold">
          Unlimited movies TV shows and more
        </h1>
        <p> Watch anywhere, Cancel anytime</p>

        <Link
          className={cn(
            buttonVariants({ variant: "destructive" }),
            "max-w-[250px] text-center",
          )}
          href={currentUser ? "/profile" : "/login"}
        > 
        Get Started
        </Link>
      </div>
    </main>
  );
}
