
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BookingCardProps {
  id: string;
  serviceName: string;
  providerName: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: string;
  onCancel?: (id: string) => void;
  onRebook?: (id: string) => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  id,
  serviceName,
  providerName,
  date,
  time,
  location,
  status,
  price,
  onCancel,
  onRebook
}) => {
  const getBadgeVariant = () => {
    switch(status) {
      case 'upcoming': return 'default';
      case 'completed': return 'outline';
      case 'cancelled': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{serviceName}</h3>
            <Badge variant={getBadgeVariant()}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground">with {providerName}</p>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{date}</span>
            </div>
            
            <div className="flex items-center text-sm">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{time}</span>
            </div>
            
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{location}</span>
            </div>
          </div>
          
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-medium">{price}</span>
            </div>
            
            {status === 'upcoming' && (
              <div className="mt-4 flex gap-2">
                {onCancel && (
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => onCancel(id)}>
                    Cancel
                  </Button>
                )}
                <Button size="sm" className="flex-1">
                  View Details
                </Button>
              </div>
            )}
            
            {status === 'completed' && (
              <div className="mt-4 flex gap-2">
                {onRebook && (
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => onRebook(id)}>
                    Book Again
                  </Button>
                )}
                <Button size="sm" className="flex-1">
                  Leave Review
                </Button>
              </div>
            )}
            
            {status === 'cancelled' && onRebook && (
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4 w-full" 
                onClick={() => onRebook(id)}
              >
                Book Again
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
