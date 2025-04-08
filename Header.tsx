import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Phone, FileText, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: '홈', path: '/', icon: <Home className="w-5 h-5 mr-2" /> },
    { name: '서비스 소개', path: '/services', icon: <Users className="w-5 h-5 mr-2" /> },
    { name: '공지사항', path: '/notices', icon: <FileText className="w-5 h-5 mr-2" /> },
    { name: '갤러리', path: '/gallery', icon: <Image className="w-5 h-5 mr-2" /> },
    { name: '문의하기', path: '/contact', icon: <Phone className="w-5 h-5 mr-2" /> },
  ];

  return (
    <header className="bg-care-blue text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="bg-white text-care-blue px-2 py-1 rounded-lg mr-2">엘</span>
          <span>재가복지센터</span>
        </Link>

        {/* 모바일 메뉴 버튼 */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-care-blue/80"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="flex items-center text-lg hover:text-care-light-blue transition-colors"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 (드롭다운) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-care-blue p-4 shadow-md lg:hidden">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="flex items-center text-lg p-2 hover:bg-care-blue/80 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
