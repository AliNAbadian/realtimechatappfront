import React from "react";
import InfoCard from "./InfoCard";

const ChatSideBar = ({ user }: { user: any }) => {
  return (
    <div className="bg-stone-50 h-full border-r">
      <InfoCard user={user} />
    </div>
  );
};

export default ChatSideBar;
