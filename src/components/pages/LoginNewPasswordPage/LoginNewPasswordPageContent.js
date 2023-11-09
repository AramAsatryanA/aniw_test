import Link from "next/link";

function LoginNewPasswordPageContent() {
  return (
    <div className="authentication-card-type">
      <h1 className="text-center text-2xl font-semibold">New password</h1>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="new-password">
          New password
        </label>
        <input
          placeholder="New password"
          type="password"
          id="new-password"
          className="input-type"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="confirm-new-password">
          Confirm new password
        </label>
        <input
          placeholder="Confirm New Password"
          type="password"
          id="confirm-new-password"
          className="input-type"
        />
      </div>
      <Link href="/login" className="button-blue-type">
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

export default LoginNewPasswordPageContent;
