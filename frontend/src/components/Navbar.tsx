import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';
import LoginForm from '../pages/Login';
import RegisterForm from '../pages/Register';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/services', label: 'الخدمات' },
    { path: '/projects', label: 'المشاريع' },
    { path: '/consultation', label: 'الاستشارة' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 space-x-reverse">
              <Building2 className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">شركة دار البناء</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                className="px-3 py-2 rounded-md text-sm font-medium text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                onClick={() => setShowLogin(true)}
              >
                تسجيل الدخول
              </button>
              <button
                className="px-3 py-2 rounded-md text-sm font-medium text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                onClick={() => setShowRegister(true)}
              >
                إنشاء حساب
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                  onClick={() => { setShowLogin(true); setIsOpen(false); }}
                >
                  تسجيل الدخول
                </button>
                <button
                  className="block w-full text-right px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                  onClick={() => { setShowRegister(true); setIsOpen(false); }}
                >
                  إنشاء حساب
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-md w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 left-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowLogin(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <LoginForm isModal onSwitch={() => { setShowLogin(false); setShowRegister(true); }} />
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => setShowRegister(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-md w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 left-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowRegister(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <RegisterForm isModal onSwitch={() => { setShowRegister(false); setShowLogin(true); }} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;