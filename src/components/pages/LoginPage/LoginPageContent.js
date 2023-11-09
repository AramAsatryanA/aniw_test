import Link from "next/link";

import SocialMediaLinksBlock from "@/components/UI/SocialMediaLinks-Block/SocialMediaLinksBlock";

function LoginPageContent() {
  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">Login</h1>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="username">
          Username
        </label>
        <input
          placeholder="Username"
          type="username"
          id="username"
          className="input-type"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            className="input-type"
          />
        </div>
        <Link
          href="/login/reset-password"
          className="self-start text-sm text-custom-gray-700 transition-all hover:font-semibold"
        >
          Forgot password?
        </Link>
      </div>
      <Link href="/" className="button-blue-type">
        Log in
      </Link>
      <div className="flex flex-col gap-4 text-center text-sm">
        <p>Or continue with</p>
        <SocialMediaLinksBlock />
      </div>
      <div className="text-center text-sm">
        Don’t have an account?{" "}
        <Link
          href="/sign-up"
          className="text-custom-gray-700 transition-all hover:font-semibold"
        >
          Sign up{" "}
        </Link>
      </div>
    </div>
  );
}

export default LoginPageContent;
