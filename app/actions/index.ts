"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  if (action) {
    await signIn(action.toString(), { redirectTo: "/chat" });
  } else {
    console.error("No action provided");
  }
  console.log(action);
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
