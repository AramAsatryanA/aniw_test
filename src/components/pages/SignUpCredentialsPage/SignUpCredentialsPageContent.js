import Link from "next/link";

function SignUpCredentialsPageContent() {
  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">Welcome to Aniw</h1>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="username">
          Username
        </label>
        <input
          placeholder="Username"
          type="text"
          id="username"
          className="input-type"
        />
      </div>
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
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="confirm-password">
          Confirm password
        </label>
        <input
          placeholder="Confirm password"
          type="password"
          id="confirm-password"
          className="input-type"
        />
      </div>
      <Link href="/sign-up/user-info" className="button-blue-type">
        Continue
      </Link>
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

export default SignUpCredentialsPageContent;
