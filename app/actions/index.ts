"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  if (action) {
    try {
      await signIn(action.toString(), { redirectTo: "/chat" });
    } catch (error) {
      console.log(error);
    }
  } else {
    console.error("No action provided");
  }
  console.log(action);
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
