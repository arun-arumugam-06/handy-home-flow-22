
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex flex-1 items-center justify-center bg-background px-4 py-12">
        <div className="max-w-md text-center">
          <h1 className="text-9xl font-extrabold text-brand-200">404</h1>
          <div className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Page not found
          </div>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. The URL{" "}
            <span className="font-semibold">{location.pathname}</span> doesn't exist or may have been moved.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="w-full sm:w-auto">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
