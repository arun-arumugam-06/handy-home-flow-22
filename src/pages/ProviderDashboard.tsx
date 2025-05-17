import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Calendar,
  Settings,
  User,
  Star,
  MessageSquare,
  Bell,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Users,
  Briefcase,
  LogOut,
} from "lucide-react";
import BookingCard from "@/components/BookingCard";

// Sample data
const upcomingBookings = [
  {
    id: "1",
    serviceName: "Leak Repair",
    providerName: "John Doe",
    date: "May 18, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "123 Main St, New York, NY",
    status: "upcoming" as const,
    price: "$85.00",
  },
  {
    id: "2",
    serviceName: "Fixture Installation",
    providerName: "John Doe",
    date: "May 20, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "456 Park Ave, New York, NY",
    status: "upcoming" as const,
    price: "$120.00",
  },
];

const completedBookings = [
  {
    id: "3",
    serviceName: "Drain Cleaning",
    providerName: "John Doe",
    date: "May 10, 2023",
    time: "9:00 AM - 10:30 AM",
    location: "789 Broadway, New York, NY",
    status: "completed" as const,
    price: "$95.00",
  },
];

const ProviderDashboardSidebar = () => {
  const sidebar = useSidebar();
  const collapsed = sidebar.state === "collapsed";
  
  return (
    <Sidebar
      className={collapsed ? "w-14 border-r" : "w-64 border-r"}
      collapsible="icon"
    >
      <div className="flex h-14 items-center justify-between border-b px-4">
        {!collapsed && <div className="font-semibold">HandyFlow Pro</div>}
        <SidebarTrigger className="ml-auto" />
      </div>
      <SidebarContent>
        <div className="px-2 py-4">
          {!collapsed && (
            <div className="mb-4 flex items-center px-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-muted-foreground">Plumber</div>
              </div>
            </div>
          )}
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <Link
                    to="/provider/dashboard"
                    className="flex items-center rounded-md bg-accent px-2 py-2 font-medium text-accent-foreground"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Dashboard</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <Link
                    to="/provider/bookings"
                    className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Bookings</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <Link
                    to="/provider/services"
                    className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    {!collapsed && <span>My Services</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <Link
                    to="/provider/messages"
                    className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Messages</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <Link
                    to="/provider/reviews"
                    className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                  >
                    <Star className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Reviews</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <Link
                    to="/provider/clients"
                    className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Clients</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full" asChild>
                    <Link
                      to="/provider/profile"
                      className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                    >
                      <User className="mr-2 h-4 w-4" />
                      {!collapsed && <span>Profile</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full" asChild>
                    <Link
                      to="/provider/settings"
                      className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      {!collapsed && <span>Settings</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full" asChild>
                    <Link
                      to="/provider/notifications"
                      className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                    >
                      <Bell className="mr-2 h-4 w-4" />
                      {!collapsed && <span>Notifications</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <div className="absolute bottom-4 left-0 right-0 px-4">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/login">
                <LogOut className="mr-2 h-4 w-4" />
                {!collapsed && <span>Log Out</span>}
              </Link>
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

const ProviderDashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col">
        <div className="flex flex-1">
          <ProviderDashboardSidebar />
          
          <div className="flex-1 overflow-auto">
            <div className="border-b">
              <div className="flex h-14 items-center px-4">
                <div className="font-semibold">Provider Dashboard</div>
                <div className="ml-auto flex items-center gap-4">
                  <Link
                    to="/notifications"
                    className="relative rounded-full p-1 hover:bg-accent"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                      3
                    </span>
                  </Link>
                  <Link to="/provider/profile">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="John Doe"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="container py-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold">Welcome back, John!</h1>
                <p className="text-muted-foreground">
                  Here's an overview of your business today.
                </p>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Today's Earnings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$205.00</div>
                    <div className="mt-1 flex items-center text-xs text-green-600">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      <span>12% from yesterday</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Pending Jobs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <div className="mt-1 flex items-center text-xs text-green-600">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      <span>2 new requests</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Completed Jobs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">384</div>
                    <div className="mt-1 flex items-center text-xs text-muted-foreground">
                      <span>All time</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Rating
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="mt-1 flex items-center text-xs">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < 5
                                ? "fill-amber-400 text-amber-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-1 text-muted-foreground">(142)</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Upcoming Bookings</h2>
                  <Link to="/provider/bookings">
                    <Button variant="outline" size="sm">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  {upcomingBookings.map((booking) => (
                    <BookingCard
                      key={booking.id}
                      id={booking.id}
                      serviceName={booking.serviceName}
                      providerName={booking.providerName}
                      date={booking.date}
                      time={booking.time}
                      location={booking.location}
                      status={booking.status}
                      price={booking.price}
                      onCancel={(id) => console.log("Cancel booking", id)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Completions</h2>
                  <Link to="/provider/bookings?status=completed">
                    <Button variant="outline" size="sm">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  {completedBookings.map((booking) => (
                    <BookingCard
                      key={booking.id}
                      id={booking.id}
                      serviceName={booking.serviceName}
                      providerName={booking.providerName}
                      date={booking.date}
                      time={booking.time}
                      location={booking.location}
                      status={booking.status}
                      price={booking.price}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Reviews</h2>
                  <Link to="/provider/reviews">
                    <Button variant="outline" size="sm">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="https://randomuser.me/api/portraits/women/4.jpg"
                              alt="Sarah Miller"
                            />
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Sarah Miller</div>
                            <div className="text-xs text-muted-foreground">June 15, 2023</div>
                          </div>
                        </div>
                        <Badge>Leak Repair</Badge>
                      </div>
                      
                      <div className="mt-3 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      
                      <p className="mt-3 line-clamp-3 text-sm">
                        John was fantastic! He arrived on time, fixed our leaking sink quickly, and left the area spotless. His prices are very reasonable, and he explained everything he was doing. Highly recommend!
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="https://randomuser.me/api/portraits/men/5.jpg"
                              alt="Michael Clark"
                            />
                            <AvatarFallback>MC</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Michael Clark</div>
                            <div className="text-xs text-muted-foreground">May 28, 2023</div>
                          </div>
                        </div>
                        <Badge>Drain Cleaning</Badge>
                      </div>
                      
                      <div className="mt-3 flex">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                        {[...Array(1)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-gray-200 text-gray-200"
                          />
                        ))}
                      </div>
                      
                      <p className="mt-3 line-clamp-3 text-sm">
                        Good service overall. Fixed my clogged drain effectively. Could have been a bit more thorough in cleaning up afterward, but the work itself was excellent.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ProviderDashboard;
