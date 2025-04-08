import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-care-light-blue/50">
      <CardHeader className="flex flex-col items-center">
        <div className="bg-care-light-green/30 p-3 rounded-full mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center pt-3">
        <Button asChild variant="outline" className="text-care-blue border-care-blue hover:bg-care-light-blue/20">
          <Link to={link} className="flex items-center">
            더 알아보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
