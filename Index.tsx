import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Phone, Home, Clock, BookOpen, Users } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ImageCard from '@/components/ImageCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const services = [
    {
      title: '방문요양 서비스',
      description: '전문 케어 인력이 어르신 가정을 방문하여 개인위생, 식사, 약 복용, 가사 지원 등 일상생활을 돕습니다.',
      icon: <Home className="h-8 w-8 text-care-green" />,
      link: '/services#visiting',
    },
    {
      title: '노인돌봄 서비스',
      description: '어르신의 정서적 안정을 위한 말벗 서비스와 함께 취미활동 등 삶의 질 향상을 위한 서비스를 제공합니다.',
      icon: <Heart className="h-8 w-8 text-care-green" />,
      link: '/services#care',
    },
    {
      title: '치매 특별 케어',
      description: '치매 어르신을 위한 특별 케어 프로그램으로 인지기능 유지 및 일상생활 능력 향상을 돕습니다.',
      icon: <BookOpen className="h-8 w-8 text-care-green" />,
      link: '/services#dementia',
    },
    {
      title: '가족 돌봄 교육',
      description: '가족 돌봄자를 위한 교육 및 상담 서비스를 제공하여 어르신 케어에 관한 실질적인 도움을 드립니다.',
      icon: <Users className="h-8 w-8 text-care-green" />,
      link: '/services#family',
    },
  ];

  const recentImages = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: '노인 복지 프로그램',
      date: '2023-06-15',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: '건강 상담 프로그램',
      date: '2023-05-22',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      title: '방문 요양 서비스',
      date: '2023-04-18',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <section className="relative bg-gradient-to-r from-care-blue to-care-green text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                어르신들의 행복한 노후를 위한<br />
                <span className="text-care-light-green">엘재가복지센터</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                맞춤형 돌봄 서비스로 어르신과 가족 모두가 행복한 일상을 만들어 갑니다
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-care-blue hover:bg-care-cream">
                  <Link to="/services">서비스 알아보기</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Link to="/contact" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    문의하기
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 소개 섹션 */}
        <section className="section bg-care-cream">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-care-blue">엘재가복지센터 소개</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-700">
                저희 엘재가복지센터는 2005년부터 어르신들의 건강하고 활기찬 노후 생활을 위해 다양한 재가복지 서비스를 제공해왔습니다.
                전문성과 따뜻한 마음으로 어르신과 가족 모두가 만족하는 서비스를 약속드립니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 특징 카드들 */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-care-light-blue/30 p-4 rounded-full mb-4">
                  <Users className="h-10 w-10 text-care-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-care-blue">전문 케어 인력</h3>
                <p className="text-gray-600">
                  노인복지 분야 경력 5년 이상의 전문 인력이 체계적이고 품격 있는 돌봄 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-care-light-blue/30 p-4 rounded-full mb-4">
                  <Heart className="h-10 w-10 text-care-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-care-blue">맞춤형 서비스</h3>
                <p className="text-gray-600">
                  각 어르신의 상황과 요구에 맞춘 개별화된 돌봄 계획으로 최적의 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-care-light-blue/30 p-4 rounded-full mb-4">
                  <Clock className="h-10 w-10 text-care-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-care-blue">24시간 지원</h3>
                <p className="text-gray-600">
                  365일 24시간 상담 및 긴급 지원 체계를 갖추어 언제든지 필요할 때 도움을 드립니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 서비스 섹션 */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-care-blue">제공 서비스</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-700">
                엘재가복지센터는 다양한 맞춤형 서비스로 어르신의 건강하고 편안한 일상을 지원합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild className="bg-care-blue hover:bg-care-blue/90">
                <Link to="/services">모든 서비스 보기</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 갤러리 섹션 */}
        <section className="section bg-care-light-blue/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-care-blue">활동 갤러리</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-700">
                엘재가복지센터의 다양한 활동과 서비스 모습을 확인해보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentImages.map((image, index) => (
                <ImageCard 
                  key={index}
                  imageUrl={image.imageUrl}
                  title={image.title}
                  date={image.date}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild className="bg-care-green hover:bg-care-green/90">
                <Link to="/gallery">더 많은 사진 보기</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section className="section bg-care-blue text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">서비스 문의하기</h2>
              <p className="text-xl mb-8">
                엘재가복지센터의 서비스에 대해 더 알고 싶으신가요?<br />
                언제든지 연락주시면 친절하게 상담해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-care-blue hover:bg-care-cream">
                  <Link to="/contact">문의하기</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/20">
                  <a href="tel:02-123-4567" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    02-123-4567
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
