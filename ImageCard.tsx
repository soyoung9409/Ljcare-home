import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageCardProps {
  imageUrl: string;
  title: string;
  date?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, date }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-0">
        <AspectRatio ratio={4/3}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="font-medium text-lg">{title}</h3>
        {date && <p className="text-sm text-gray-500">{date}</p>}
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
