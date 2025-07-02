import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Building2 className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">شركة دار البناء</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحن شركة رائدة في مجال المقاولات والتشطيب، نقدم خدمات عالية الجودة 
              بأحدث التقنيات والمعايير العالمية لضمان رضا عملائنا.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-400">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">info@daralbina.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-400">خدماتنا</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• المقاولات العامة</li>
              <li>• التشطيب والديكور</li>
              <li>• الصيانة والترميم</li>
              <li>• الاستشارات الهندسية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 شركة دار البناء. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;