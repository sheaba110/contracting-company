import { GoogleLogin } from "@react-oauth/google";

function Register({
  isModal = false,
  onSwitch,
}: {
  isModal?: boolean;
  onSwitch?: () => void;
}) {
  const handleFacebookSignup = () => {
    window.location.href = "http://localhost:8000/accounts/facebook/login/";
  };

  const handleLinkedInRegister = () => {
    alert("التسجيل عبر LinkedIn غير مفعل بعد");
    // هنا يمكنك إضافة منطق التسجيل الحقيقي
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
        <h1 className="text-3xl font-bold mb-6 text-center">إنشاء حساب جديد</h1>
        <form className="space-y-4 mb-6">
          <div>
            <label className="form-label">الاسم الكامل</label>
            <input
              type="text"
              className="form-input"
              placeholder="أدخل اسمك الكامل"
            />
          </div>
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
            تسجيل
          </button>
        </form>
        <div className="text-center mb-4 text-gray-500">أو سجل عبر</div>
        <div className="flex flex-col gap-3 mb-6">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              // هنا يمكنك إرسال التوكن للسيرفر أو حفظه في الستيت
              console.log(credentialResponse);
            }}
            onError={() => {
              alert("فشل التسجيل عبر Google");
            }}
            width="100%"
            text="signup_with"
            shape="pill"
            locale="ar"
          />
          <button
            className="flex items-center justify-center gap-2 w-full py-2 rounded-full text-sm font-medium border"
            style={{
              backgroundColor: "#fff",
              color: "#1877f2",
              borderColor: "#1877f2",
            }}
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
            التسجيل عبر LinkedIn
          </button>
        </div>
        <div className="text-center text-gray-600">
          {!isModal ? (
            <>
              لديك حساب بالفعل؟{" "}
              <a href="/login" className="text-primary-600 hover:underline">
                تسجيل الدخول
              </a>
            </>
          ) : (
            <>
              لديك حساب بالفعل؟{" "}
              <button
                type="button"
                className="text-primary-600 hover:underline"
                onClick={onSwitch}
              >
                تسجيل الدخول
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
