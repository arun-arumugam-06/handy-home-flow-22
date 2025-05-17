import React from "react";
import { Link } from "react-router-dom";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

const benefits = [
  "Grow your business with access to our customer network",
  "Flexible scheduling that works around your availability",
  "Simple job management tools to organize your work",
  "Secure, on-time payments after job completion",
  "Build your reputation with customer ratings and reviews",
  "24/7 support team to assist with any issues"
];

const howItWorks = [
  {
    title: "Create an account",
    description: "Sign up for free and complete your provider profile"
  },
  {
    title: "Get verified",
    description: "Submit documentation for our verification process"
  },
  {
    title: "Set your services",
    description: "Define your services, rates, and availability"
  },
  {
    title: "Start receiving jobs",
    description: "Accept booking requests from local customers"
  }
];

const BecomeProvider = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-800 to-brand-600 py-20 text-white">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Become a HandyFlow Service Provider
              </h1>
              <p className="mb-8 text-lg text-brand-100">
                Join our network of trusted professionals and connect with customers looking for your services.
                Grow your business and manage your schedule on your own terms.
              </p>
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="bg-white text-brand-700 hover:bg-brand-100"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Why Join HandyFlow?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Provider Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-brand-50 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-4.0.3" 
                  alt="Service provider with tools" 
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-brand-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-lg bg-brand-600 p-8 text-center text-white md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mb-8 text-lg text-brand-100">
                Join thousands of professionals who are growing their business with HandyFlow.
                Registration is free and takes less than 10 minutes.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/signup">
                  <Button 
                    size="lg" 
                    className="bg-white text-brand-700 hover:bg-brand-100"
                  >
                    Apply as Provider
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 bg-transparent hover:bg-white/10"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Provider Success Stories</h2>
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
                      "Joining HandyFlow was the best business decision I made. My customer base has grown by 40% and the platform makes it easy to manage everything."
                    </p>
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div className="ml-3">
                      <div className="font-medium">John Smith</div>
                      <div className="text-sm text-muted-foreground">Electrician, 2 years on platform</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeProvider;
