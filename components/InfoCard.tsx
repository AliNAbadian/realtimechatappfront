"use client";
import { doLogout } from "@/app/actions";
import { useAuthStore } from "@/store/store";
import Image from "next/image";
import React, { useEffect } from "react";

const InfoCard = ({ user }: { user: any }) => {
  //   const session = await auth();
  const { setName, setEmail, setImage, name, email, image } = useAuthStore();
  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setImage(user.image);
  }, [setName, setEmail, setImage]);
  return (
    <div className="flex flex-row items-center p-4 font-sans overflow-hidden bg-gradient-to-b from-stone-300 to-stone-50">
      <Image
        className="rounded-full"
        src={image || "/no.png"}
        alt=""
        width={72}
        height={72}
      />
      <div className="flex flex-col items-center p-4 space-y-2">
        <h1>{name}</h1>
        <p>{email}</p>
        <form action={doLogout}>
          <button
            type="submit"
            className="bg-red-400 px-2 py-1 rounded-md text-white self-end"
          >
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default InfoCard;
