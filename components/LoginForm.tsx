import { doSocialLogin } from "@/app/actions";
import React from "react";

const LoginForm = () => {
  return (
    <form
      action={doSocialLogin}
      className="flex flex-row mx-auto w-fit gap-x-10 p-10 bg-slate-200 rounded-md border border-slate-400"
    >
      <button
        className="bg-rose-600 px-4 py-2 rounded-lg shadow-lg text-white hover:bg-black hover:text-white transition-all ease-in-out duration-300 "
        type="submit"
        name="action"
        value="google"
      >
        SignIn With Google
      </button>
      <button
        className="bg-stone-600 px-4 py-2 rounded-lg shadow-lg text-white hover:bg-black hover:text-white transition-all ease-in-out duration-300 "
        type="submit"
        name="action"
        value="github"
      >
        SignIn With Github
      </button>
    </form>
  );
};

export default LoginForm;
