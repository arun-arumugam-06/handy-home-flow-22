
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, ArrowRight, ShowerHead, Lightbulb, Plug, 
  Fan, AirVent, Utensils, Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCategoryCardProps {
  title: string;
  icon: string;
  description: string;
  href: string;
  className?: string;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  title,
  icon,
  description,
  href,
  className,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'plumbing':
        return <Wrench className="h-8 w-8" />;
      case 'electrical':
        return <Lightbulb className="h-8 w-8" />;
      case 'handyman':
        return <Wrench className="h-8 w-8" />; // Using Wrench instead of Tools
      case 'cleaning':
        return <ShowerHead className="h-8 w-8" />;
      case 'appliance':
        return <Plug className="h-8 w-8" />;
      case 'hvac':
        return <Fan className="h-8 w-8" />;
      case 'ventilation':
        return <AirVent className="h-8 w-8" />;
      case 'cooking':
        return <Utensils className="h-8 w-8" />;
      default:
        return <Briefcase className="h-8 w-8" />;
    }
  };

  return (
    <Link to={href} className={cn("service-card group flex flex-col items-center p-6", className)}>
      <div className="service-icon mb-4">
        {getIcon()}
      </div>
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="text-center text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 text-sm font-medium text-brand-500 group-hover:text-brand-700 group-hover:underline">
        Find professionals
      </div>
    </Link>
  );
};

export default ServiceCategoryCard;
