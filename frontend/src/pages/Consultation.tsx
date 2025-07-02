import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  services_type: string;
  preferred_date: string;
  message: string;
}

function Consultation() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    services_type: '',
    preferred_date: '',
    message: '',
  });
  
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        services_type: preselectedService,
        message: `أرغب في طلب خدمة: ${preselectedService}`
      }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const response = await fetch("http://localhost:8000/api/consultation/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services_type: formData.services_type,
          preferred_date: formData.preferred_date,
          message: formData.message,

        }),
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          services_type: '',
          message: '',
          preferred_date: '',
        });
      } else {
        alert("حدث خطأ أثناء الإرسال");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("حدث خطأ أثناء الإرسال");
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    'المقاولات العامة',
    'التشطيب والديكور',
    'الصيانة والترميم',
    'الاستشارات الهندسية',
    'إدارة المشاريع',
    'التصميم المعماري',
    'أخرى'
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="card p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              تم إرسال طلبك بنجاح!
            </h2>
            <p className="text-gray-600 mb-6">
              شكراً لك على تواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary w-full"
            >
              إرسال طلب آخر
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                طلب استشارة مجانية
              </h1>
              <p className="text-xl text-gray-600">
                املأ النموذج أدناه وسيتواصل معك أحد خبرائنا لمناقشة مشروعك
              </p>
            </div>

            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="form-label">الاسم الكامل *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="form-label">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="form-label">رقم الهاتف *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+966 50 123 4567"
                  />
                </div>

                <div>
                  <label className="form-label">نوع الخدمة *</label>
                  <select
                    name="services_type"
                    className="form-input"
                    value={formData.services_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">اختر نوع الخدمة</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label">التاريخ المفضل للاستشارة</label>
                  <input
                    type="date"
                    name="preferred_date"
                    className="form-input"
                    value={formData.preferred_date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="form-label">تفاصيل المشروع *</label>
                  <textarea
                    name="message"
                    className="form-input"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="أخبرنا عن مشروعك وما تحتاجه..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center space-x-2 space-x-reverse disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>إرسال الطلب</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                معلومات التواصل
              </h2>
              <p className="text-lg text-gray-600">
                يمكنك أيضاً التواصل معنا مباشرة عبر الطرق التالية
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="card p-6 flex items-center space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">الهاتف</h3>
                  <p className="text-gray-600">+966 50 123 4567</p>
                  <p className="text-sm text-gray-500">متاح 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="card p-6 flex items-center space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">البريد الإلكتروني</h3>
                  <p className="text-gray-600">info@daralbina.com</p>
                  <p className="text-sm text-gray-500">نرد خلال 24 ساعة</p>
                </div>
              </div>

              {/* Address */}
              <div className="card p-6 flex items-center space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">العنوان</h3>
                  <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                  <p className="text-sm text-gray-500">مواعيد العمل: 8 ص - 6 م</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-8 card p-6 bg-primary-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                لماذا تختار دار البناء؟
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span>استشارة مجانية وتقييم شامل للمشروع</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span>فريق من المهندسين والفنيين المتخصصين</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span>ضمان الجودة والتسليم في الوقت المحدد</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span>أسعار تنافسية وشفافية كاملة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;