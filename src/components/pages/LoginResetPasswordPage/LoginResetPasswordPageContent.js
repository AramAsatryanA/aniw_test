import Link from "next/link";

function LoginResetPasswordPageContent() {
  return (
    <div className="authentication-card-type">
      <div className="text-center">
        <h1 className="mb-3 text-2xl font-semibold">Reset password</h1>
        <p className="text-sm">
          Enter your email and we’ll send you instructions on how to reset your
          password.
        </p>
      </div>
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
      <Link href="/login/new-password" className="button-blue-type">
        Send
      </Link>
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

export default LoginResetPasswordPageContent;
