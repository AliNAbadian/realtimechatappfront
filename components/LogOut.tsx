import { doLogout } from "@/app/actions";
import React from "react";

const LogOut = () => {
  return (
    <form action={doLogout}>
      <button type="submit">LogOut</button>
    </form>
  );
};

export default LogOut;
