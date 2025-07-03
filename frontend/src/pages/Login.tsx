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
  const handleLinkedInLogin = () => {
    alert("تسجيل الدخول عبر LinkedIn غير مفعل بعد");
    // هنا يمكنك إضافة منطق تسجيل الدخول الحقيقي
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
        <h1 className="text-3xl font-bold mb-6 text-center">تسجيل الدخول</h1>
        <form className="space-y-4 mb-6">
          <div>
            <label className="form-label">البريد الإلكتروني</label>
            <input
              type="email"
              className="form-input"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="form-label">كلمة المرور</label>
            <input
              type="password"
              className="form-input"
              placeholder="********"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            دخول
          </button>
        </form>
        <div className="text-center mb-4 text-gray-500">أو سجل الدخول عبر</div>
        <div className="flex flex-col gap-3 mb-6">
          <GoogleLogin
            onSuccess={(
              credentialResponse: import("@react-oauth/google").CredentialResponse
            ) => {
              // هنا يمكنك إرسال التوكن للسيرفر أو حفظه في الستيت
              console.log(credentialResponse);
            }}
            onError={() => {
              alert("فشل تسجيل الدخول عبر Google");
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
            <span>تسجيل الدخول باستخدام Facebook</span>
          </button>

          <button
            className="btn-secondary w-full"
            onClick={handleFacebookSignup}
          >
            الدخول عبر LinkedIn
          </button>
        </div>
        <div className="text-center text-gray-600">
          {!isModal ? (
            <>
              ليس لديك حساب؟{" "}
              <a href="/register" className="text-primary-600 hover:underline">
                إنشاء حساب جديد
              </a>
            </>
          ) : (
            <>
              ليس لديك حساب؟{" "}
              <button
                type="button"
                className="text-primary-600 hover:underline"
                onClick={onSwitch}
              >
                إنشاء حساب جديد
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
