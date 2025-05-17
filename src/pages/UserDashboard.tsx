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
import { Input } from "@/components/ui/input";
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
  Search,
  Plus,
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
];

const completedBookings = [
  {
    id: "2",
    serviceName: "Drain Cleaning",
    providerName: "John Doe",
    date: "May 10, 2023",
    time: "9:00 AM - 10:30 AM",
    location: "123 Main St, New York, NY",
    status: "completed" as const,
    price: "$95.00",
  },
];

const favouriteProviders = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Plumber",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Electrician",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "House Cleaner",
    rating: 4.7,
  },
];

const UserDashboardSidebar = () => {
  const sidebar = useSidebar();
  const collapsed = sidebar.state === "collapsed";
  
  return (
    <Sidebar
      className={collapsed ? "w-14 border-r" : "w-64 border-r"}
      collapsible="icon"
    >
      <div className="flex h-14 items-center justify-between border-b px-4">
        {!collapsed && <div className="font-semibold">HandyFlow</div>}
        <SidebarTrigger className="ml-auto" />
      </div>
      <SidebarContent>
        <div className="px-2 py-4">
          {!collapsed && (
            <div className="mb-4 flex items-center px-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://randomuser.me/api/portraits/women/10.jpg" alt="Emma Wilson" />
                <AvatarFallback>EW</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <div className="font-medium">Emma Wilson</div>
                <div className="text-xs text-muted-foreground">User</div>
              </div>
            </div>
          )}
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <Link
                    to="/user/dashboard"
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
                    to="/user/bookings"
                    className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {!collapsed && <span>My Bookings</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <Link
                    to="/user/favorites"
                    className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                  >
                    <Star className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Favorites</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" asChild>
                  <Link
                    to="/user/messages"
                    className="flex items-center rounded-md px-2 py-2 hover:bg-accent"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Messages</span>}
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
                      to="/user/profile"
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
                      to="/user/settings"
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
                      to="/user/notifications"
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

const UserDashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col">
        <div className="flex flex-1">
          <UserDashboardSidebar />
          
          <div className="flex-1 overflow-auto">
            <div className="border-b">
              <div className="flex h-14 items-center px-4">
                <div className="font-semibold">User Dashboard</div>
                <div className="ml-auto flex items-center gap-4">
                  <div className="relative hidden md:block">
                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search services..."
                      className="w-64 pl-8"
                    />
                  </div>
                  <Link
                    to="/notifications"
                    className="relative rounded-full p-1 hover:bg-accent"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                      2
                    </span>
                  </Link>
                  <Link to="/user/profile">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://randomuser.me/api/portraits/women/10.jpg"
                        alt="Emma Wilson"
                      />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="container py-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold">Welcome back, Emma!</h1>
                <p className="text-muted-foreground">
                  Here's an overview of your bookings and favorite providers.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Quick Actions</h2>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <Card className="bg-gradient-to-br from-brand-700 to-brand-500 text-white">
                    <CardContent className="flex flex-col items-center p-6">
                      <Plus className="mb-2 h-10 w-10" />
                      <h3 className="text-lg font-semibold">Book a Service</h3>
                      <p className="mb-4 mt-1 text-center text-sm text-white/80">
                        Find and book new home services
                      </p>
                      <Link to="/services">
                        <Button size="sm" variant="secondary">Book Now</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <Calendar className="mb-2 h-10 w-10 text-brand-500" />
                      <h3 className="text-lg font-semibold">View Schedule</h3>
                      <p className="mb-4 mt-1 text-center text-sm text-muted-foreground">
                        See your upcoming appointments
                      </p>
                      <Link to="/user/bookings">
                        <Button size="sm" variant="outline">View Schedule</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <MessageSquare className="mb-2 h-10 w-10 text-brand-500" />
                      <h3 className="text-lg font-semibold">Messages</h3>
                      <p className="mb-4 mt-1 text-center text-sm text-muted-foreground">
                        Contact your service providers
                      </p>
                      <Link to="/user/messages">
                        <Button size="sm" variant="outline">Open Messages</Button>
                      </Link>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <User className="mb-2 h-10 w-10 text-brand-500" />
                      <h3 className="text-lg font-semibold">Your Profile</h3>
                      <p className="mb-4 mt-1 text-center text-sm text-muted-foreground">
                        Manage your account details
                      </p>
                      <Link to="/user/profile">
                        <Button size="sm" variant="outline">Edit Profile</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Upcoming Bookings</h2>
                  <Link to="/user/bookings">
                    <Button variant="outline" size="sm">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  {upcomingBookings.length > 0 ? (
                    upcomingBookings.map((booking) => (
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
                    ))
                  ) : (
                    <div className="col-span-2 rounded-lg border border-dashed p-8 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                        <Calendar className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="mb-1 text-lg font-semibold">No Upcoming Bookings</h3>
                      <p className="mb-4 text-muted-foreground">
                        You don't have any services scheduled right now.
                      </p>
                      <Link to="/services">
                        <Button>Book a Service</Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Services</h2>
                  <Link to="/user/bookings?status=completed">
                    <Button variant="outline" size="sm">
                      View History
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
                      onRebook={(id) => console.log("Rebook", id)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Your Favorite Providers</h2>
                  <Link to="/user/favorites">
                    <Button variant="outline" size="sm">
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className="grid gap-4 md:grid-cols-3">
                  {favouriteProviders.map((provider) => (
                    <Card key={provider.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12 border">
                            <AvatarImage src={provider.avatar} alt={provider.name} />
                            <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{provider.name}</div>
                            <div className="text-sm text-muted-foreground">{provider.profession}</div>
                            <div className="mt-1 flex items-center">
                              <Star className="mr-1 h-3 w-3 fill-amber-400 text-amber-400" />
                              <span className="text-sm">{provider.rating.toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Link to={`/providers/${provider.id}`} className="flex-1">
                            <Button variant="outline" size="sm" className="w-full">
                              View Profile
                            </Button>
                          </Link>
                          <Link to={`/providers/${provider.id}/book`} className="flex-1">
                            <Button size="sm" className="w-full">
                              Book
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default UserDashboard;
