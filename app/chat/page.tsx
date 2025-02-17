import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  console.log(session?.user);
  return (
    <div className="flex flex-col items-center justify-center text-3xl font-code gap-y-4">
      <span className="font-sans">Welcome</span>
      {session?.user?.name}
      <Image
        className="rounded-full"
        src={session?.user?.image || "/default-image.png"}
        alt="User profile image"
        width={320}
        height={320}
        quality={100}
      />
    </div>
  );
};

export default page;
