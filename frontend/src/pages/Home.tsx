import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Users, Award, Clock, ArrowLeft } from "lucide-react";
import Login from "./Login";
import Register from "./Register";

function Home() {
  // Example: authentication state (in real app use context or redux)
  const [isAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  // Shared handler for protected buttons
  const handleProtectedClick = (callback: () => void) => {
    if (isAuthenticated) {
      callback();
    } else {
      setShowLogin(true);
    }
  };

  const features = [
    {
      icon: Building2,
      title: "خبرة واسعة",
      description: "أكثر من 15 عاماً من الخبرة في مجال المقاولات والتشطيب",
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "فريق من المهندسين والفنيين المتخصصين ذوي الخبرة العالية",
    },
    {
      icon: Award,
      title: "جودة عالية",
      description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا",
    },
    {
      icon: Clock,
      title: "التسليم في الوقت",
      description: "نحرص على تسليم المشاريع في المواعيد المحددة",
    },
  ];

  const stats = [
    { number: "500+", label: "مشروع مكتمل" },
    { number: "15+", label: "سنة خبرة" },
    { number: "100+", label: "عميل راضي" },
    { number: "50+", label: "مهندس وفني" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up leading-tight">
              مرحباً بك في شركة
              <span className="block text-accent-400 text-4xl md:text-6xl mt-2">
                دار البناء
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              نحن نقدم خدمات المقاولات والتشطيب باحترافية عالية وجودة استثنائية
              لتحويل أحلامك إلى واقع ملموس
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <button
                className="btn-primary inline-flex items-center space-x-2 space-x-reverse"
                onClick={() => handleProtectedClick(() => navigate("/services"))}
              >
                <span>تعرف على خدماتنا</span>
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                className="btn-secondary"
                onClick={() =>
                  handleProtectedClick(() => navigate("/consultation"))
                }
              >
                اطلب استشارة مجانية
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار دار البناء؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نحن نجمع بين الخبرة والاحترافية لنقدم لك أفضل الخدمات في مجال
              البناء والتشطيب
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-8 text-center group hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-400">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            هل أنت مستعد لبدء مشروعك؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك القادم
          </p>
          <button
            className="btn-primary inline-flex items-center space-x-2 space-x-reverse"
            onClick={() => handleProtectedClick(() => navigate("/consultation"))}
          >
            <span>ابدأ مشروعك الآن</span>
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>
      </section>
      {/* Login Modal */}
      {showLogin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Login
              isModal
              onSwitch={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
            />
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
            onClick={(e) => e.stopPropagation()}
          >
            <Register
              isModal
              onSwitch={() => {
                setShowRegister(false);
                setShowLogin(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
