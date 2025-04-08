import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-care-blue text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 센터 정보 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">엘재가복지센터</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>충남 태안군 태안읍 샘골로 9 2층</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>02-123-4567</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>elcare_home@naver.com</span>
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>평일 09:00 - 18:00</span>
              </p>
            </div>
          </div>

          {/* 메뉴 링크 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">사이트 맵</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-care-light-blue">홈</Link></li>
              <li><Link to="/services" className="hover:text-care-light-blue">서비스 소개</Link></li>
              <li><Link to="/notices" className="hover:text-care-light-blue">공지사항</Link></li>
              <li><Link to="/gallery" className="hover:text-care-light-blue">갤러리</Link></li>
              <li><Link to="/contact" className="hover:text-care-light-blue">문의하기</Link></li>
            </ul>
          </div>

          {/* 서비스 안내 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">제공 서비스</h3>
            <ul className="space-y-2">
              <li>방문요양 서비스</li>
              <li>주간보호 서비스</li>
              <li>노인돌봄 서비스</li>
              <li>치매 특별 케어</li>
              <li>가족 상담 서비스</li>
            </ul>
          </div>

          {/* 뉴스레터 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">뉴스레터 구독</h3>
            <p className="mb-3">최신 소식과 정보를 받아보세요.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="이메일 주소" 
                className="px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-care-light-blue"
              />
              <button 
                type="submit" 
                className="bg-white text-care-blue px-4 py-2 rounded-md hover:bg-care-light-blue transition-colors"
              >
                구독하기
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-care-light-blue/50 mt-8 pt-4 text-center">
          <p>© {new Date().getFullYear()} 엘재가복지센터. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
