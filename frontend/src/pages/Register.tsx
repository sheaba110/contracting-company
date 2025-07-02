function Register({ isModal = false, onSwitch }: { isModal?: boolean; onSwitch?: () => void }) {
  return (
    <div className={isModal ? '' : 'min-h-screen flex items-center justify-center bg-gray-50 py-12'}>
      <div className="card p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">إنشاء حساب جديد</h1>
        <form className="space-y-4 mb-6">
          <div>
            <label className="form-label">الاسم الكامل</label>
            <input type="text" className="form-input" placeholder="أدخل اسمك الكامل" />
          </div>
          <div>
            <label className="form-label">البريد الإلكتروني</label>
            <input type="email" className="form-input" placeholder="example@email.com" />
          </div>
          <div>
            <label className="form-label">كلمة المرور</label>
            <input type="password" className="form-input" placeholder="********" />
          </div>
          <button type="submit" className="btn-primary w-full">تسجيل</button>
        </form>
        <div className="text-center mb-4 text-gray-500">أو سجل عبر</div>
        <div className="flex flex-col gap-3 mb-6">
          <button className="btn-secondary w-full">التسجيل عبر Google</button>
          <button className="btn-secondary w-full">التسجيل عبر Facebook</button>
          <button className="btn-secondary w-full">التسجيل عبر LinkedIn</button>
        </div>
        <div className="text-center text-gray-600">
          {!isModal ? (
            <>لديك حساب بالفعل؟ <a href="/login" className="text-primary-600 hover:underline">تسجيل الدخول</a></>
          ) : (
            <>لديك حساب بالفعل؟{' '}
              <button type="button" className="text-primary-600 hover:underline" onClick={onSwitch}>
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
