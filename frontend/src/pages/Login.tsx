import { GoogleLogin } from "@react-oauth/google";

function Login({
  isModal = false,
  onSwitch,
}: {
  isModal?: boolean;
  onSwitch?: () => void;
}) {
  const handleFacebookSignup = () => {
    window.location.href = "http://localhost:8000/accounts/facebook/login/";
  };
  // const handleLinkedInLogin = () => {
  //   alert("LinkedIn login is not enabled yet");
  //   // You can add real LinkedIn login logic here
  // };
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
              // Here you can send the token to your backend or save it in state
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
          <button
            className="flex items-center justify-center gap-2 w-full py-2 rounded-full text-white text-sm font-medium"
            style={{ backgroundColor: "#1877f2" }}
            onClick={() =>
              (window.location.href =
                "http://localhost:8000/accounts/facebook/login/")
            }
          >
            <i className="fab fa-facebook-f text-lg"></i>
            <span>Login with Facebook</span>
          </button>

          <button
            className="btn-secondary w-full"
            onClick={handleFacebookSignup}
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
