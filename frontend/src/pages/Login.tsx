import { GoogleLogin } from "@react-oauth/google";
import FacebookLoginButton from "../components/FacebookLoginButton"; // تأكد من المسار الصحيح

function Login({
  isModal = false,
  onSwitch,
}: {
  isModal?: boolean;
  onSwitch?: () => void;
}) {
  const handleLinkedInLogin = () => {
    alert("LinkedIn login is not enabled yet");
  };

  return (
    <div
      className={
        isModal
          ? ""
          : "min-h-screen flex items-center justify-center bg-gray-50 py-12"
      }
    >
      <div className="card p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4 mb-6">
          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="********"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
        </form>

        <div className="text-center mb-4 text-gray-500">Or login with</div>
        <div className="flex flex-col gap-3 mb-6">
          <GoogleLogin
            onSuccess={(
              credentialResponse: import("@react-oauth/google").CredentialResponse
            ) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              alert("Google login failed");
            }}
            width="100%"
            text="signin_with"
            shape="pill"
            locale="ar"
          />

          <FacebookLoginButton /> {/* ✅ زر الفيسبوك الجديد */}

          <button
            className="btn-secondary w-full"
            onClick={handleLinkedInLogin}
          >
            Login with LinkedIn
          </button>
        </div>

        <div className="text-center text-gray-600">
          {!isModal ? (
            <>
              Don't have an account?{" "}
              <a href="/register" className="text-primary-600 hover:underline">
                Register
              </a>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                className="text-primary-600 hover:underline"
                onClick={onSwitch}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
