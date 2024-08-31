"use client";
import { useEffect } from "react";
import { RootLayoutProps } from "../layout";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function PrivateLayout({ children }: RootLayoutProps) {
  const { currentUser } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user")!);
    if (!user) router.replace("/login");
  }, [currentUser]);
  return <section>{children}</section>;
}
