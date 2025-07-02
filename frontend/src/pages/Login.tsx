function Login({ isModal = false, onSwitch }: { isModal?: boolean; onSwitch?: () => void }) {
  return (
    <div className={isModal ? '' : 'min-h-screen flex items-center justify-center bg-gray-50 py-12'}>
      <div className="card p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">تسجيل الدخول</h1>
        <form className="space-y-4 mb-6">
          <div>
            <label className="form-label">البريد الإلكتروني</label>
            <input type="email" className="form-input" placeholder="example@email.com" />
          </div>
          <div>
            <label className="form-label">كلمة المرور</label>
            <input type="password" className="form-input" placeholder="********" />
          </div>
          <button type="submit" className="btn-primary w-full">دخول</button>
        </form>
        <div className="text-center mb-4 text-gray-500">أو سجل الدخول عبر</div>
        <div className="flex flex-col gap-3 mb-6">
          <button className="btn-secondary w-full">الدخول عبر Google</button>
          <button className="btn-secondary w-full">الدخول عبر Facebook</button>
          <button className="btn-secondary w-full">الدخول عبر LinkedIn</button>
        </div>
        <div className="text-center text-gray-600">
          {!isModal ? (
            <>ليس لديك حساب؟ <a href="/register" className="text-primary-600 hover:underline">إنشاء حساب جديد</a></>
          ) : (
            <>ليس لديك حساب؟{' '}
              <button type="button" className="text-primary-600 hover:underline" onClick={onSwitch}>
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
