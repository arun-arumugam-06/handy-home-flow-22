
import React from "react";
import { useParams, Link } from "react-router-dom";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  Shield,
  CheckCircle,
  Award,
  MessageSquare,
  Phone,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sample provider data
const providerData = {
  id: "1",
  name: "John Doe",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  profession: "Plumber",
  rating: 4.9,
  ratingCount: 142,
  verified: true,
  joinDate: "May 2020",
  completedJobs: 384,
  location: "New York, NY",
  responseTime: "Under 1 hour",
  about: "Professional plumber with over 10 years of experience. Specializing in residential plumbing repairs, installations, and emergency services. Licensed and insured, providing quality work at competitive rates.",
  services: [
    {
      name: "Basic Plumbing Inspection",
      price: "$60",
      duration: "1 hour",
      description: "Comprehensive inspection of your plumbing system to identify existing or potential issues.",
    },
    {
      name: "Leak Repair",
      price: "$85",
      duration: "1-2 hours",
      description: "Repair of leaking pipes, faucets, or fixtures to prevent water damage and waste.",
    },
    {
      name: "Drain Cleaning",
      price: "$95",
      duration: "1-2 hours",
      description: "Professional cleaning to remove clogs and restore proper flow in drains.",
    },
    {
      name: "Fixture Installation",
      price: "$120",
      duration: "2-3 hours",
      description: "Installation of new fixtures including faucets, sinks, toilets, and showers.",
    },
    {
      name: "Emergency Plumbing",
      price: "$150",
      duration: "Varies",
      description: "Urgent response to plumbing emergencies such as burst pipes or major leaks.",
    },
  ],
  reviews: [
    {
      id: "1",
      user: "Sarah Miller",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 5,
      date: "June 15, 2023",
      comment: "John was fantastic! He arrived on time, fixed our leaking sink quickly, and left the area spotless. His prices are very reasonable, and he explained everything he was doing. Highly recommend!",
      service: "Leak Repair",
    },
    {
      id: "2",
      user: "Michael Clark",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 4,
      date: "May 28, 2023",
      comment: "Good service overall. Fixed my clogged drain effectively. Could have been a bit more thorough in cleaning up afterward, but the work itself was excellent.",
      service: "Drain Cleaning",
    },
    {
      id: "3",
      user: "Jessica Brown",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 5,
      date: "April 10, 2023",
      comment: "John responded to my emergency call within 30 minutes. He was professional, knowledgeable, and fixed our burst pipe quickly, preventing further damage to our home. Worth every penny!",
      service: "Emergency Plumbing",
    },
  ],
  availability: {
    monday: ["9:00 AM - 5:00 PM"],
    tuesday: ["9:00 AM - 5:00 PM"],
    wednesday: ["9:00 AM - 5:00 PM"],
    thursday: ["9:00 AM - 5:00 PM"],
    friday: ["9:00 AM - 5:00 PM"],
    saturday: ["10:00 AM - 2:00 PM"],
    sunday: ["Unavailable"],
  },
  gallery: [
    "https://images.unsplash.com/photo-1573689705342-f891545989c4?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3",
  ],
};

const ProviderDetail = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, you would fetch the provider data based on the ID
  const provider = providerData;

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Provider Header */}
        <section className="bg-gradient-to-r from-brand-50 to-brand-100 py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <Avatar className="h-24 w-24 border-4 border-white">
                <AvatarImage src={provider.avatar} alt={provider.name} />
                <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold">{provider.name}</h1>
                  {provider.verified && (
                    <Badge variant="outline" className="border-green-500 bg-green-50 text-green-700">
                      <Shield className="mr-1 h-3 w-3" /> Verified
                    </Badge>
                  )}
                </div>
                
                <p className="text-lg text-muted-foreground">{provider.profession}</p>
                
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{provider.rating}</span>
                    <span className="ml-1 text-muted-foreground">
                      ({provider.ratingCount} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>{provider.location}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>{provider.completedJobs} jobs completed</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Link to={`/providers/${id}/book`}>
                  <Button>Book Service</Button>
                </Link>
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" /> Contact
                </Button>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Provider Details Tabs */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="services" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>
              
              {/* Services Tab */}
              <TabsContent value="services" className="mt-6">
                <h2 className="mb-4 text-xl font-semibold">Available Services</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {provider.services.map((service, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center text-sm">
                              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{service.duration}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold">{service.price}</div>
                            <div className="text-xs text-muted-foreground">starting price</div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link to={`/providers/${id}/book?service=${encodeURIComponent(service.name)}`} className="w-full">
                          <Button variant="outline" className="w-full">Book This Service</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Reviews Tab */}
              <TabsContent value="reviews" className="mt-6">
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="md:w-1/3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Rating Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="text-4xl font-bold">{provider.rating}</div>
                          <div className="flex flex-col">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${
                                    i < Math.floor(provider.rating)
                                      ? "fill-amber-400 text-amber-400"
                                      : "fill-gray-200 text-gray-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Based on {provider.ratingCount} reviews
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 space-y-2">
                          {[5, 4, 3, 2, 1].map((star) => {
                            // Calculate percentage (in a real app, this would come from actual data)
                            const percent =
                              star === 5
                                ? 80
                                : star === 4
                                ? 15
                                : star === 3
                                ? 3
                                : star === 2
                                ? 1
                                : 1;
                            
                            return (
                              <div key={star} className="flex items-center">
                                <div className="w-8 text-sm">{star}</div>
                                <Star className="mr-2 h-4 w-4 fill-amber-400 text-amber-400" />
                                <div className="flex-1">
                                  <div className="h-2 rounded-full bg-gray-200">
                                    <div
                                      className="h-2 rounded-full bg-amber-400"
                                      style={{ width: `${percent}%` }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="w-10 text-right text-sm text-muted-foreground">
                                  {percent}%
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h2 className="mb-4 text-xl font-semibold">Client Reviews</h2>
                    <div className="space-y-6">
                      {provider.reviews.map((review) => (
                        <Card key={review.id}>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={review.avatar} alt={review.user} />
                                  <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{review.user}</div>
                                  <div className="text-xs text-muted-foreground">{review.date}</div>
                                </div>
                              </div>
                              <Badge variant="outline">{review.service}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "fill-amber-400 text-amber-400"
                                      : "fill-gray-200 text-gray-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-sm">{review.comment}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* About Tab */}
              <TabsContent value="about" className="mt-6">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>About {provider.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{provider.about}</p>
                        
                        <div className="mt-6">
                          <h3 className="font-semibold">Qualifications & Credentials</h3>
                          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                            <li>Licensed Master Plumber (License #PL12345)</li>
                            <li>Certified by the National Association of Plumbers</li>
                            <li>10+ years of professional experience</li>
                            <li>Specialized training in emergency repair techniques</li>
                            <li>Fully insured and bonded</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Member since</h4>
                          <p>{provider.joinDate}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Response time</h4>
                          <p>{provider.responseTime}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Service area</h4>
                          <p>Within 15 miles of {provider.location}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground">Availability</h4>
                          <div className="mt-2 space-y-1 text-sm">
                            {Object.entries(provider.availability).map(([day, hours]) => (
                              <div key={day} className="grid grid-cols-2">
                                <div className="font-medium capitalize">{day}</div>
                                <div>{hours}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* Gallery Tab */}
              <TabsContent value="gallery" className="mt-6">
                <h2 className="mb-4 text-xl font-semibold">Work Gallery</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {provider.gallery.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`Work sample ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProviderDetail;
