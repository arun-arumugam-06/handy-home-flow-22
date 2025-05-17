import React from "react";
import { Link } from "react-router-dom";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import ServiceCategoryCard from "@/components/ServiceCategoryCard";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

const services = [
  {
    title: "Plumbers",
    icon: "plumbing",
    description: "Fix leaks, install fixtures, and handle plumbing emergencies",
    href: "/services/plumbing",
  },
  {
    title: "Electricians",
    icon: "electrical",
    description: "Wiring, installations, and electrical repairs",
    href: "/services/electrical",
  },
  {
    title: "House Cleaning",
    icon: "cleaning",
    description: "Regular and deep cleaning services for your home",
    href: "/services/cleaning",
  },
  {
    title: "Handyman",
    icon: "handyman",
    description: "General repairs and home improvement tasks",
    href: "/services/handyman",
  },
  {
    title: "Appliance Repair",
    icon: "appliance",
    description: "Repair and maintenance for your household appliances",
    href: "/services/appliance",
  },
  {
    title: "HVAC Services",
    icon: "hvac",
    description: "Heating, cooling, and air conditioning services",
    href: "/services/hvac",
  },
  {
    title: "Cooking Services",
    icon: "cooking",
    description: "Personal chefs and meal preparation",
    href: "/services/cooking",
  },
  {
    title: "Home Ventilation",
    icon: "ventilation",
    description: "Improve air quality and ventilation systems",
    href: "/services/ventilation",
  },
];

const features = [
  "Verified local professionals",
  "Real customer reviews",
  "Secure online payments",
  "Service guarantee",
  "24/7 customer support",
  "No hidden fees",
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-900 to-brand-700 py-20 text-white">
          <div className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center md:px-6">
            <h1 className="mb-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Home Services on Demand,{" "}
              <span className="text-brand-200">When You Need Them</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-brand-100">
              Connect with verified local professionals for all your home service needs.
              Book appointments, track progress, and pay securely online.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link to="/services">
                <Button size="lg" className="bg-brand-500 hover:bg-brand-600">
                  Book a Service
                </Button>
              </Link>
              <Link to="/become-provider">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 hover:bg-white/20">
                  Become a Provider
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Book home services in 3 simple steps
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mb-2 text-xl font-medium">Choose a Service</h3>
                <p className="text-muted-foreground">
                  Browse through our wide range of home services and select what you need
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mb-2 text-xl font-medium">Book an Appointment</h3>
                <p className="text-muted-foreground">
                  Select a date and time that works for you, and provide service details
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mb-2 text-xl font-medium">Relax & Get Service</h3>
                <p className="text-muted-foreground">
                  Our verified professional will arrive at your doorstep at the appointed time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">Popular Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our most requested home services
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCategoryCard
                  key={index}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  href={service.href}
                />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/services">
                <Button>View All Services</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold">Why Choose HandyFlow</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We connect you with the best local service providers who have been vetted and verified to ensure quality service.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/about">
                    <Button variant="outline">Learn More About Us</Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-white p-1 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3"
                  alt="Handyman service"
                  className="rounded-lg object-cover"
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">What Our Customers Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Read reviews from our satisfied customers
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-muted-foreground">
                      "HandyFlow made finding a reliable plumber so easy! The booking process was simple, 
                      and the service was excellent. Will definitely use again for all my home service needs."
                    </p>
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div className="ml-3">
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-sm text-muted-foreground">Homeowner</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-700 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mt-4 max-w-2xl text-lg text-brand-100">
                Join thousands of satisfied customers who use HandyFlow for their home service needs.
              </p>
              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link to="/services">
                  <Button size="lg" className="bg-white text-brand-700 hover:bg-brand-100">
                    Book a Service Now
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="lg" variant="outline" className="border-white/30 bg-transparent hover:bg-white/10">
                    Create an Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
