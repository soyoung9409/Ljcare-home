import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Home, BookOpen, Users, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'visiting',
      title: '방문요양 서비스',
      icon: <Home className="h-8 w-8 text-care-blue" />,
      description: '전문 요양보호사가 어르신의 가정을 방문하여 신체활동 지원, 가사 지원, 정서 지원 등 어르신의 일상생활을 종합적으로 케어합니다.',
      details: [
        '식사 준비 및 식사 도움',
        '개인위생 관리 (목욕, 옷 갈아입기 등)',
        '약 복용 관리 및 지원',
        '가사 도움 (청소, 세탁 등)',
        '외출 동행 및 병원 방문 지원',
        '말벗 및 정서적 지원'
      ]
    },
    {
      id: 'care',
      title: '노인돌봄 서비스',
      icon: <Heart className="h-8 w-8 text-care-blue" />,
      description: '어르신의 신체적, 정서적 건강을 위한 종합 돌봄 서비스로, 전문적인 케어와 함께 정서 지원을 통해 삶의 질을 향상시킵니다.',
      details: [
        '정서 지원 및 말벗 서비스',
        '건강 상태 모니터링',
        '취미 및 여가 활동 지원',
        '산책 및 가벼운 운동 도움',
        '가족과의 소통 지원',
        '일상생활 기능 유지 훈련'
      ]
    },
    {
      id: 'dementia',
      title: '치매 특별 케어',
      icon: <BookOpen className="h-8 w-8 text-care-blue" />,
      description: '치매 어르신을 위한 특화된 케어 프로그램으로, 인지기능 유지 및 향상을 위한 다양한 활동과 안전한 생활환경 조성을 지원합니다.',
      details: [
        '인지 기능 유지 활동',
        '기억력 향상을 위한 두뇌 게임',
        '일상생활 능력 유지 훈련',
        '안전한 환경 조성 지원',
        '행동심리증상 대응 케어',
        '가족 상담 및 교육'
      ]
    },
    {
      id: 'family',
      title: '가족 돌봄 교육',
      icon: <Users className="h-8 w-8 text-care-blue" />,
      description: '어르신을 돌보는 가족을 위한 교육 및 상담 서비스로, 돌봄에 필요한 실질적인 지식과 기술을 제공하고 케어 부담을 경감시킵니다.',
      details: [
        '기본 돌봄 기술 교육',
        '응급 상황 대처법',
        '스트레스 관리 및 정서적 지원',
        '돌봄 관련 정보 제공',
        '가족 간 소통 방법 안내',
        '지역사회 자원 연계 안내'
      ]
    },
    {
      id: 'daily',
      title: '일상생활 지원',
      icon: <Clock className="h-8 w-8 text-care-blue" />,
      description: '어르신의 독립적인 생활을 존중하면서 필요한 부분에 대한 도움을 제공하여 편안하고 안정된 생활을 유지할 수 있도록 지원합니다.',
      details: [
        '가사 도움 (청소, 빨래, 요리 등)',
        '장보기 및 생필품 구매 대행',
        '금융 업무 및 공과금 납부 지원',
        '각종 행정 서류 작성 지원',
        '주거환경 개선 상담',
        '안부 확인 서비스'
      ]
    },
    {
      id: 'health',
      title: '건강관리 서비스',
      icon: <Shield className="h-8 w-8 text-care-blue" />,
      description: '어르신의 건강 상태를 지속적으로 모니터링하고 관리하여 질병 예방 및 건강 유지를 돕는 서비스입니다.',
      details: [
        '복약 관리 및 지원',
        '혈압, 혈당 등 기초 건강 체크',
        '영양 상담 및 식단 관리',
        '재활 운동 지원',
        '병원 동행 및 진료 지원',
        '건강 정보 제공 및 교육'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* 서비스 소개 배너 */}
        <section className="bg-gradient-to-r from-care-blue to-care-green text-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">서비스 소개</h1>
              <p className="text-xl">
                엘재가복지센터는 어르신의 상황과 필요에 맞는<br />
                맞춤형 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </section>
        {/* 이하 동일 */}
      </main>
      <Footer />
    </div>
  );
};

export default Services;
