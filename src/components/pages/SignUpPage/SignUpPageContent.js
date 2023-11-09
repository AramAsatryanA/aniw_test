import Link from "next/link";

import SocialMediaLinksBlock from "@/components/UI/SocialMediaLinks-Block/SocialMediaLinksBlock";

function SignUpPageContent() {
  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">Welcome to Aniw</h1>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Email"
          type="email"
          id="email"
          className="input-type"
        />
      </div>
      <Link href="/sign-up/credentials" className="button-blue-type">
        Continue
      </Link>
      <div className="flex flex-col gap-4 text-center text-sm">
        <p>Or continue with</p>
        <SocialMediaLinksBlock />
      </div>
      <div className="text-center text-sm">
        By signing up, you agree to{" "}
        <Link
          href="#"
          className="px-[1.5px] text-custom-gray-700 transition-all hover:px-0 hover:font-semibold"
        >
          Terms of Service
        </Link>{" "}
        &{" "}
        <Link
          href="#"
          className="text-custom-gray-700 transition-all hover:font-semibold"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-custom-gray-700 transition-all hover:font-semibold"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

export default SignUpPageContent;
