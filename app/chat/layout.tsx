import { auth } from "@/auth";
import ChatSideBar from "@/components/ChatSideBar";
import { useAuthStore } from "@/store/store";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  } else {
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 h-[100vh]">
        <ChatSideBar user={session?.user} />
      </div>
      <div className="col-span-7">{children}</div>
    </div>
  );
};

export default Layout;
