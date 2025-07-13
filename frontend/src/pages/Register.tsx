import { GoogleLogin } from "@react-oauth/google";
import FacebookLoginButton from "../components/FacebookLoginButton"; // تأكد من المسار الصحيح

function Register({
  isModal = false,
  onSwitch,
}: {
  isModal?: boolean;
  onSwitch?: () => void;
}) {
  const handleLinkedInRegister = () => {
    alert("LinkedIn registration is not enabled yet");
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
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form className="space-y-4 mb-6">
          <div>
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>
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
            Register
          </button>
        </form>
        <div className="text-center mb-4 text-gray-500">Or register with</div>
        <div className="flex flex-col gap-3 mb-6">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              alert("Google registration failed");
            }}
            width="100%"
            text="signup_with"
            shape="pill"
            locale="ar"
          />

          <FacebookLoginButton /> {/* ✅ زر فيسبوك الحقيقي */}

          <button
            className="btn-secondary w-full"
            onClick={handleLinkedInRegister}
          >
            Register with LinkedIn
          </button>
        </div>

        <div className="text-center text-gray-600">
          {!isModal ? (
            <>
              Already have an account?{" "}
              <a href="/login" className="text-primary-600 hover:underline">
                Login
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary-600 hover:underline"
                onClick={onSwitch}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
