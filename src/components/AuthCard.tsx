import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

type CardProps = {
  title: string;
  children: React.ReactNode;
};
export default function AuthCard({ title, children }: CardProps) {
  return (
    <Card className=" lg:w-2/5 lg:max-w-md rounded-md w-full bg-opacity-80 shadow">
      <CardHeader className="text-red-600 text-2xl text-center mb-3">
        {title}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
