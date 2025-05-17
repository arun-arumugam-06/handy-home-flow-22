
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface ProviderCardProps {
  id: string;
  name: string;
  avatar: string;
  profession: string;
  rating: number;
  ratingCount: number;
  tags: string[];
  price: string;
  verified: boolean;
}

const ProviderCard: React.FC<ProviderCardProps> = ({
  id,
  name,
  avatar,
  profession,
  rating,
  ratingCount,
  tags,
  price,
  verified,
}) => {
  return (
    <Link to={`/providers/${id}`}>
      <div className="service-card overflow-visible p-0">
        <div className="aspect-video relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
          <div className={`absolute top-2 right-2 z-20 ${verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} text-xs px-2 py-1 rounded-full`}>
            {verified ? 'Verified' : 'New'}
          </div>
          <img 
            src={`https://source.unsplash.com/random/300x200?${profession.toLowerCase().replace(' ', '-')}`} 
            alt={profession}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-muted-foreground">{profession}</p>
            </div>
          </div>
          
          <div className="mt-3 flex items-center text-sm">
            <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-medium">{rating.toFixed(1)}</span>
            <span className="ml-1 text-muted-foreground">({ratingCount} reviews)</span>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, i) => (
              <Badge key={i} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && <span className="text-xs ml-1 text-muted-foreground self-center">+{tags.length - 3} more</span>}
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm">
              Starting from <span className="font-semibold text-base">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProviderCard;
