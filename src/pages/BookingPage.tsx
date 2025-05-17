
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Calendar as CalendarIcon,
  ChevronRight,
  CheckCircle,
  Star,
  MapPin,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Sample provider data (in a real app, this would be fetched based on the ID)
const providerData = {
  id: "1",
  name: "John Doe",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  profession: "Plumber",
  rating: 4.9,
  ratingCount: 142,
  verified: true,
  services: [
    {
      id: "service1",
      name: "Basic Plumbing Inspection",
      price: "$60",
      duration: "1 hour",
      description: "Comprehensive inspection of your plumbing system to identify existing or potential issues.",
    },
    {
      id: "service2",
      name: "Leak Repair",
      price: "$85",
      duration: "1-2 hours",
      description: "Repair of leaking pipes, faucets, or fixtures to prevent water damage and waste.",
    },
    {
      id: "service3",
      name: "Drain Cleaning",
      price: "$95",
      duration: "1-2 hours",
      description: "Professional cleaning to remove clogs and restore proper flow in drains.",
    },
    {
      id: "service4",
      name: "Fixture Installation",
      price: "$120",
      duration: "2-3 hours",
      description: "Installation of new fixtures including faucets, sinks, toilets, and showers.",
    },
  ],
  availability: {
    dates: ["2023-05-18", "2023-05-19", "2023-05-20", "2023-05-21", "2023-05-22"],
    slots: {
      "2023-05-18": ["09:00", "11:00", "13:00", "15:00"],
      "2023-05-19": ["09:00", "11:00", "13:00"],
      "2023-05-20": ["10:00", "12:00", "14:00"],
      "2023-05-21": ["09:00", "13:00", "15:00"],
      "2023-05-22": ["11:00", "13:00", "15:00"],
    },
  },
};

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const preSelectedService = queryParams.get("service");
  
  // Find the service in provider's services array
  const initialService = preSelectedService
    ? providerData.services.find((s) => s.name === preSelectedService) || null
    : null;
  
  const [selectedService, setSelectedService] = useState(initialService?.id || "");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  
  // Get formatted date string for availability lookup
  const formattedDate = date ? format(date, "yyyy-MM-dd") : null;
  // Get available time slots for selected date
  const availableTimeSlots = formattedDate
    ? providerData.availability.slots[formattedDate] || []
    : [];
  
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      providerId: id,
      serviceId: selectedService,
      date: formattedDate,
      time,
      address,
      notes,
    });
    // Here you would typically submit the booking to your backend
    setCurrentStep(4); // Move to confirmation step
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Book a Service</h1>
            <div className="mt-2 flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Booking with</span>
              <Avatar className="h-6 w-6">
                <AvatarImage src={providerData.avatar} alt={providerData.name} />
                <AvatarFallback>{providerData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{providerData.name}</span>
              <ChevronRight className="h-4 w-4" />
              <span>{providerData.profession}</span>
            </div>
          </div>
          
          {/* Step indicators */}
          <div className="mb-8">
            <ol className="flex items-center">
              {[1, 2, 3, 4].map((step) => (
                <li key={step} className="flex items-center">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium",
                      currentStep === step
                        ? "border-primary bg-primary text-primary-foreground"
                        : currentStep > step
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-muted-foreground/30 text-muted-foreground"
                    )}
                  >
                    {currentStep > step ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      step
                    )}
                  </div>
                  <div
                    className={cn(
                      "ml-2 hidden text-sm md:inline",
                      currentStep === step
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {step === 1
                      ? "Select Service"
                      : step === 2
                      ? "Choose Date & Time"
                      : step === 3
                      ? "Your Details"
                      : "Confirmation"}
                  </div>
                  {step < 4 && (
                    <div className="flex-1 border-t border-muted-foreground/30 px-4"></div>
                  )}
                </li>
              ))}
            </ol>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Step 1: Select Service */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Select a Service</CardTitle>
                    <CardDescription>Choose the service you need</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {providerData.services.map((service) => (
                        <div
                          key={service.id}
                          className={cn(
                            "flex cursor-pointer flex-col rounded-lg border p-4",
                            selectedService === service.id
                              ? "border-primary bg-primary/5"
                              : "hover:border-primary/50"
                          )}
                          onClick={() => setSelectedService(service.id)}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{service.name}</h3>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="text-lg font-semibold">{service.price}</div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                {service.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div></div>
                    <Button
                      onClick={handleNextStep}
                      disabled={!selectedService}
                    >
                      Continue
                    </Button>
                  </CardFooter>
                </Card>
              )}
              
              {/* Step 2: Choose Date & Time */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Choose Date & Time</CardTitle>
                    <CardDescription>Select when you need this service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <Label className="mb-2 block">Select Date</Label>
                        <div className="rounded-md border">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => {
                              const formatted = format(date, "yyyy-MM-dd");
                              return (
                                !providerData.availability.dates.includes(
                                  formatted
                                ) || date < new Date()
                              );
                            }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label className="mb-2 block">Select Time</Label>
                        {formattedDate ? (
                          availableTimeSlots.length > 0 ? (
                            <div className="grid grid-cols-3 gap-2">
                              {availableTimeSlots.map((slot) => (
                                <div
                                  key={slot}
                                  className={cn(
                                    "flex cursor-pointer items-center justify-center rounded-md border p-2 text-center",
                                    time === slot
                                      ? "border-primary bg-primary/5"
                                      : "hover:border-primary/50"
                                  )}
                                  onClick={() => setTime(slot)}
                                >
                                  {slot}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="rounded-md border border-dashed p-6 text-center">
                              <p className="text-muted-foreground">
                                No available slots for this date
                              </p>
                            </div>
                          )
                        ) : (
                          <div className="rounded-md border border-dashed p-6 text-center">
                            <p className="text-muted-foreground">
                              Please select a date first
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevStep}>
                      Back
                    </Button>
                    <Button
                      onClick={handleNextStep}
                      disabled={!date || !time}
                    >
                      Continue
                    </Button>
                  </CardFooter>
                </Card>
              )}
              
              {/* Step 3: Your Details */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmit}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Details</CardTitle>
                      <CardDescription>Provide your address and any special instructions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="address">Service Address</Label>
                          <Textarea
                            id="address"
                            placeholder="Enter your full address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notes">Special Instructions (optional)</Label>
                          <Textarea
                            id="notes"
                            placeholder="Any additional details about your request"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button type="button" variant="outline" onClick={handlePrevStep}>
                        Back
                      </Button>
                      <Button type="submit" disabled={!address}>
                        Confirm Booking
                      </Button>
                    </CardFooter>
                  </Card>
                </form>
              )}
              
              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle>Booking Confirmed!</CardTitle>
                    <CardDescription>Your service has been successfully booked</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-muted p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-muted-foreground">Service</div>
                          <div>
                            {providerData.services.find((s) => s.id === selectedService)?.name}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-muted-foreground">Provider</div>
                          <div className="flex items-center">
                            <Avatar className="mr-2 h-5 w-5">
                              <AvatarImage src={providerData.avatar} alt={providerData.name} />
                              <AvatarFallback>{providerData.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {providerData.name}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-muted-foreground">Date</div>
                          <div>{formattedDate}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-muted-foreground">Time</div>
                          <div>{time}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-muted-foreground">Location</div>
                          <div className="max-w-[200px] truncate text-right">{address}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-muted-foreground">Price</div>
                          <div>
                            {providerData.services.find((s) => s.id === selectedService)?.price}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-sm text-muted-foreground">
                        A confirmation has been sent to your email address.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button className="mr-4" asChild>
                      <a href="/user/dashboard">Go to Dashboard</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/user/bookings">View Bookings</a>
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>
            
            {/* Summary Card */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-lg bg-secondary/50 p-3">
                      <Avatar className="h-12 w-12 border">
                        <AvatarImage src={providerData.avatar} alt={providerData.name} />
                        <AvatarFallback>{providerData.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{providerData.name}</div>
                        <div className="text-sm text-muted-foreground">{providerData.profession}</div>
                        <div className="mt-1 flex items-center">
                          <Star className="mr-1 h-3 w-3 fill-amber-400 text-amber-400" />
                          <span className="text-xs">
                            {providerData.rating} ({providerData.ratingCount} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="mb-2 text-sm font-medium">Selected Service</div>
                      {selectedService ? (
                        <div className="rounded-md bg-muted p-2">
                          <div className="font-medium">
                            {providerData.services.find((s) => s.id === selectedService)?.name}
                          </div>
                          <div className="mt-1 flex justify-between text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="mr-1 h-3 w-3" />
                              {providerData.services.find((s) => s.id === selectedService)?.duration}
                            </div>
                            <div className="font-medium">
                              {providerData.services.find((s) => s.id === selectedService)?.price}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-md border border-dashed p-2 text-center text-sm text-muted-foreground">
                          No service selected
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="mb-2 text-sm font-medium">Date & Time</div>
                      {date && time ? (
                        <div className="rounded-md bg-muted p-2">
                          <div className="flex items-center text-sm">
                            <CalendarIcon className="mr-2 h-3 w-3 text-muted-foreground" />
                            {format(date, "MMMM d, yyyy")}
                          </div>
                          <div className="mt-1 flex items-center text-sm">
                            <Clock className="mr-2 h-3 w-3 text-muted-foreground" />
                            {time}
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-md border border-dashed p-2 text-center text-sm text-muted-foreground">
                          Not scheduled yet
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="mb-2 text-sm font-medium">Location</div>
                      {address ? (
                        <div className="rounded-md bg-muted p-2">
                          <div className="flex items-start">
                            <MapPin className="mr-2 mt-0.5 h-3 w-3 shrink-0 text-muted-foreground" />
                            <span className="text-sm">{address}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-md border border-dashed p-2 text-center text-sm text-muted-foreground">
                          No address provided
                        </div>
                      )}
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="mb-2 text-sm font-medium">Payment Summary</div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Service Fee</span>
                          <span>
                            {selectedService
                              ? providerData.services.find((s) => s.id === selectedService)?.price
                              : "-"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Platform Fee</span>
                          <span>$5.00</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex items-center justify-between font-medium">
                          <span>Total</span>
                          <span>
                            {selectedService
                              ? `$${(
                                  parseFloat(
                                    providerData.services
                                      .find((s) => s.id === selectedService)
                                      ?.price.replace("$", "") || "0"
                                  ) + 5
                                ).toFixed(2)}`
                              : "-"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-4 text-center text-xs text-muted-foreground">
                <p>
                  By confirming this booking, you agree to our{" "}
                  <a href="/terms" className="text-brand-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-brand-600 hover:underline">
                    Cancellation Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
