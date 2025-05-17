
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type AuthMode = "login" | "signup";
type UserType = "user" | "provider";

const Auth = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [userType, setUserType] = useState<UserType>("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      authMode,
      userType,
      email,
      password,
      name,
      phone,
      service,
    });
    // Here you would typically handle authentication with your backend
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1 py-12">
        <div className="container mx-auto grid items-start px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="hidden lg:block">
            <div className="rounded-lg bg-brand-50 p-6">
              <h1 className="mb-6 text-3xl font-bold">
                {authMode === "login" ? "Welcome Back!" : "Join HandyFlow"}
              </h1>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {authMode === "login"
                        ? "Log in to your account"
                        : "Create your account"}
                    </h3>
                    <p className="text-muted-foreground">
                      {authMode === "login"
                        ? "Access your bookings and settings"
                        : "Set up your profile in minutes"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {authMode === "login"
                        ? "Book services with ease"
                        : userType === "user"
                        ? "Book your first service"
                        : "Create your service listings"}
                    </h3>
                    <p className="text-muted-foreground">
                      {authMode === "login"
                        ? "Quick access to providers and bookings"
                        : userType === "user"
                        ? "Find the right professional for your needs"
                        : "Showcase your skills and expertise"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {authMode === "login"
                        ? "Manage your account"
                        : userType === "user"
                        ? "Leave reviews and ratings"
                        : "Receive booking requests"}
                    </h3>
                    <p className="text-muted-foreground">
                      {authMode === "login"
                        ? "Update preferences and view history"
                        : userType === "user"
                        ? "Help others find great service providers"
                        : "Grow your business through our platform"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-lg bg-brand-600 p-4 text-white">
                <p className="font-medium">Did you know?</p>
                <p className="mt-1 text-sm text-brand-100">
                  {userType === "user"
                    ? "Our platform helps you find verified professionals with an average response time of under 1 hour!"
                    : "Service providers on HandyFlow report an average 30% increase in business within the first three months!"}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  {authMode === "login" ? "Sign In" : "Create Account"}
                </CardTitle>
                <CardDescription>
                  {authMode === "login"
                    ? "Enter your credentials to access your account"
                    : "Fill out the form below to create your account"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs
                  value={userType}
                  onValueChange={(value) => setUserType(value as UserType)}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="user">I need services</TabsTrigger>
                    <TabsTrigger value="provider">I provide services</TabsTrigger>
                  </TabsList>
                </Tabs>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {authMode === "signup" && (
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      {authMode === "login" && (
                        <Link
                          to="/forgot-password"
                          className="text-xs text-brand-600 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      )}
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder={authMode === "login" ? "Enter your password" : "Create a password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {authMode === "signup" && (
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 8 characters long with a mix of letters, numbers, and symbols
                      </p>
                    )}
                  </div>

                  {authMode === "signup" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>

                      {userType === "provider" && (
                        <div className="space-y-2">
                          <Label htmlFor="service">Primary Service</Label>
                          <Select value={service} onValueChange={setService}>
                            <SelectTrigger id="service">
                              <SelectValue placeholder="Select your primary service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="plumbing">Plumbing</SelectItem>
                              <SelectItem value="electrical">Electrical</SelectItem>
                              <SelectItem value="cleaning">House Cleaning</SelectItem>
                              <SelectItem value="handyman">Handyman</SelectItem>
                              <SelectItem value="appliance">Appliance Repair</SelectItem>
                              <SelectItem value="hvac">HVAC Services</SelectItem>
                              <SelectItem value="cooking">Cooking Services</SelectItem>
                              <SelectItem value="painting">Painting</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </>
                  )}

                  <Button type="submit" className="w-full">
                    {authMode === "login" ? "Sign In" : "Create Account"}
                  </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                  <p>
                    {authMode === "login" ? "New to HandyFlow?" : "Already have an account?"}{" "}
                    <button
                      type="button"
                      onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                      className="font-medium text-brand-600 hover:underline"
                    >
                      {authMode === "login" ? "Create an account" : "Sign in"}
                    </button>
                  </p>
                </div>

                <div className="relative mt-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    Facebook
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link to="/terms" className="text-brand-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-brand-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
