import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Paintbrush, Wrench, Users, ArrowLeft } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  const mockServices: Service[] = [
    {
      id: 1,
      title: 'المقاولات العامة',
      description: 'نقدم خدمات المقاولات العامة للمشاريع السكنية والتجارية بأعلى معايير الجودة والأمان، مع فريق من المهندسين والفنيين المتخصصين.'
    },
    {
      id: 2,
      title: 'التشطيب والديكور',
      description: 'خدمات التشطيب الداخلي والخارجي بأحدث التصاميم والمواد عالية الجودة، لإضفاء لمسة جمالية مميزة على مشروعك.'
    },
    {
      id: 3,
      title: 'الصيانة والترميم',
      description: 'خدمات الصيانة الدورية والترميم للمباني القديمة، مع ضمان استخدام أفضل المواد والتقنيات الحديثة.'
    },
    {
      id: 4,
      title: 'الاستشارات الهندسية',
      description: 'نقدم استشارات هندسية متخصصة في التصميم والتخطيط، مع دراسة شاملة لكل مشروع لضمان أفضل النتائج.'
    },
    {
      id: 5,
      title: 'إدارة المشاريع',
      description: 'خدمات إدارة المشاريع الاحترافية من البداية حتى التسليم، مع متابعة دقيقة لكل مرحلة من مراحل التنفيذ.'
    },
    {
      id: 6,
      title: 'التصميم المعماري',
      description: 'تصميم معماري إبداعي يجمع بين الجمال والوظائف العملية، مع مراعاة احتياجات العميل والمعايير البيئية.'
    }
  ];

  const serviceIcons = [Building, Paintbrush, Wrench, Users, Building, Paintbrush];

  useEffect(() => {
    // Simulate API call
    const fetchServices = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch("http://localhost:8000/api/services/");
        // const data = await response.json();
        // setServices(data);
        
        // Using mock data for now
        setTimeout(() => {
          setServices(mockServices);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Failed to fetch services", error);
        setServices(mockServices);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            خدماتنا المتميزة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات في مجال المقاولات والتشطيب، 
            مع التزامنا بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="card p-8 group hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <Link
                  to={`/consultation?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group"
                >
                  <span>طلب الخدمة</span>
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            لم تجد الخدمة التي تبحث عنها؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصل معنا وسنكون سعداء لمناقشة احتياجاتك الخاصة وتقديم حلول مخصصة لمشروعك
          </p>
          <Link
            to="/consultation"
            className="btn-secondary inline-flex items-center space-x-2 space-x-reverse"
          >
            <span>تواصل معنا</span>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;