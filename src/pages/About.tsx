
import React from "react";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="bg-brand-50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="mb-6 text-4xl font-bold">About HandyFlow</h1>
            <p className="mb-4 max-w-3xl text-lg text-muted-foreground">
              HandyFlow connects homeowners with verified local professionals for all home service needs. 
              Our platform makes it easy to find, book, and manage services with just a few clicks.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
                <p className="mb-4">
                  Founded in 2023, HandyFlow was created to solve a common problem: finding reliable home service professionals quickly and easily. 
                  What started as a small local platform has grown into a nationwide service connecting thousands of homeowners with trusted professionals every day.
                </p>
                <p>
                  Our mission is to make home maintenance and improvement hassle-free by creating a transparent marketplace where quality and reliability come first.
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3" 
                  alt="HandyFlow Team" 
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-medium">Quality First</h3>
                <p>We carefully vet all service providers to ensure they meet our high standards of quality and professionalism.</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-medium">Transparency</h3>
                <p>Clear pricing, honest reviews, and open communication are the cornerstones of our platform.</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-medium">Customer Satisfaction</h3>
                <p>We're committed to ensuring every service booking leads to a satisfied customer.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
