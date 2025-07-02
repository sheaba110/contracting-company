import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  location?: string;
  date?: string;
  category?: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  const mockProjects: Project[] = [
    {
      id: 1,
      title: 'مجمع سكني فاخر - الرياض',
      description: 'مشروع مجمع سكني يضم 50 وحدة سكنية بتصميم عصري ومرافق متكاملة، تم تنفيذه بأعلى معايير الجودة والأمان.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      location: 'الرياض',
      date: '2024',
      category: 'سكني'
    },
    {
      id: 2,
      title: 'مركز تجاري حديث',
      description: 'تصميم وتنفيذ مركز تجاري على مساحة 5000 متر مربع، يضم محلات تجارية ومطاعم ومرافق ترفيهية.',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg',
      location: 'جدة',
      date: '2023',
      category: 'تجاري'
    },
    {
      id: 3,
      title: 'فيلا عصرية بتصميم مميز',
      description: 'تصميم وتنفيذ فيلا سكنية بمساحة 800 متر مربع، بتصميم معماري حديث ومواد عالية الجودة.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      location: 'الدمام',
      date: '2024',
      category: 'سكني'
    },
    {
      id: 4,
      title: 'مبنى إداري متطور',
      description: 'مشروع مبنى إداري يضم 20 طابق بتقنيات ذكية ونظم إدارة متقدمة، مع مراعاة المعايير البيئية.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      location: 'الرياض',
      date: '2023',
      category: 'إداري'
    },
    {
      id: 5,
      title: 'مشروع ترميم تراثي',
      description: 'ترميم وتطوير مبنى تراثي عمره 100 عام، مع الحفاظ على الطابع المعماري الأصيل وإضافة التقنيات الحديثة.',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
      location: 'الطائف',
      date: '2024',
      category: 'ترميم'
    },
    {
      id: 6,
      title: 'منتجع سياحي فاخر',
      description: 'تصميم وتنفيذ منتجع سياحي يضم 100 غرفة ومرافق ترفيهية متنوعة، بإطلالة على البحر الأحمر.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      location: 'ينبع',
      date: '2023',
      category: 'سياحي'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchProjects = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('http://localhost:8000/api/projects/');
        // const data = await response.json();
        // setProjects(data);
        
        // Using mock data for now
        setTimeout(() => {
          setProjects(mockProjects);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects(mockProjects);
        setLoading(false);
      }
    };

    fetchProjects();
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
            مشاريعنا المميزة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفخر بعرض مجموعة من أبرز مشاريعنا التي تعكس خبرتنا وجودة عملنا 
            في مختلف القطاعات والمجالات
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category || 'مشروع'}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  {project.location && (
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  )}
                  {project.date && (
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  to="/consultation"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 group"
                >
                  <span>اطلب مشروع مماثل</span>
                  <ArrowLeft className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل لديك مشروع في ذهنك؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            دعنا نساعدك في تحويل رؤيتك إلى واقع. تواصل معنا اليوم للحصول على استشارة مجانية
          </p>
          <Link
            to="/consultation"
            className="btn-secondary inline-flex items-center space-x-2 space-x-reverse"
          >
            <span>ابدأ مشروعك الآن</span>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;