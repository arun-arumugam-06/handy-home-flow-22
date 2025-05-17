
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import MainNav from "@/components/layout/MainNav";
import Footer from "@/components/layout/Footer";
import ProviderCard from "@/components/ProviderCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star } from "lucide-react";

// Sample data
const providers = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Plumber",
    rating: 4.9,
    ratingCount: 142,
    tags: ["Leak Repair", "Pipe Installation", "Emergency Service"],
    price: "$60/hour",
    verified: true,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Electrician",
    rating: 4.8,
    ratingCount: 98,
    tags: ["Wiring", "Lighting Installation", "Troubleshooting"],
    price: "$75/hour",
    verified: true,
  },
  {
    id: "3",
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "House Cleaner",
    rating: 4.7,
    ratingCount: 215,
    tags: ["Deep Cleaning", "Regular Cleaning", "Move-in/out"],
    price: "$50/hour",
    verified: true,
  },
  {
    id: "4",
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Handyman",
    rating: 4.5,
    ratingCount: 76,
    tags: ["Assembly", "Mounting", "Repairs"],
    price: "$55/hour",
    verified: false,
  },
  {
    id: "5",
    name: "Robert Wilson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    profession: "Appliance Technician",
    rating: 4.9,
    ratingCount: 112,
    tags: ["Refrigerator", "Washer/Dryer", "Dishwasher"],
    price: "$70/hour",
    verified: true,
  },
  {
    id: "6",
    name: "Jennifer Martinez",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Personal Chef",
    rating: 4.8,
    ratingCount: 87,
    tags: ["Meal Prep", "Special Events", "Dietary Restrictions"],
    price: "$85/hour",
    verified: true,
  },
];

const serviceCategories = [
  {
    id: "plumbing",
    name: "Plumbing",
    subcategories: ["Leak Repair", "Installation", "Pipe Fitting", "Emergency"]
  },
  {
    id: "electrical",
    name: "Electrical",
    subcategories: ["Wiring", "Lighting", "Troubleshooting", "Upgrades"]
  },
  {
    id: "cleaning",
    name: "House Cleaning",
    subcategories: ["Regular", "Deep Clean", "Move In/Out", "Office"]
  },
  {
    id: "handyman",
    name: "Handyman",
    subcategories: ["Assembly", "Mounting", "Repairs", "Installation"]
  },
  {
    id: "appliance",
    name: "Appliance Repair",
    subcategories: ["Refrigerator", "Washer/Dryer", "Oven", "Microwave"]
  },
  {
    id: "cooking",
    name: "Cooking",
    subcategories: ["Meal Prep", "Special Events", "Baking", "Catering"]
  },
];

const Services = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("rating");
  const [view, setView] = useState("grid");

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-brand-50 py-8">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold">Find Home Service Professionals</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Browse our network of trusted local providers
            </p>

            {/* Search Bar */}
            <div className="mt-6 flex w-full max-w-3xl flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search services..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative flex-1 sm:max-w-[200px]">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Your location"
                  className="pl-10"
                  defaultValue="New York, NY"
                />
              </div>
              <Button className="shrink-0">Search</Button>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <h2 className="font-semibold">Filters</h2>

                  <div className="mt-4">
                    <h3 className="text-sm font-medium">Service Category</h3>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="cat-all"
                          name="category"
                          value="all"
                          className="h-4 w-4"
                          checked={selectedCategory === "all"}
                          onChange={() => setSelectedCategory("all")}
                        />
                        <label htmlFor="cat-all" className="ml-2 text-sm">
                          All Categories
                        </label>
                      </div>

                      {serviceCategories.map((category) => (
                        <div key={category.id} className="flex items-center">
                          <input
                            type="radio"
                            id={`cat-${category.id}`}
                            name="category"
                            value={category.id}
                            className="h-4 w-4"
                            checked={selectedCategory === category.id}
                            onChange={() => setSelectedCategory(category.id)}
                          />
                          <label htmlFor={`cat-${category.id}`} className="ml-2 text-sm">
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="mt-4">
                    <AccordionItem value="price">
                      <AccordionTrigger className="text-sm font-medium">
                        Price Range
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 px-1">
                          <Slider
                            defaultValue={[0, 100]}
                            max={200}
                            step={5}
                            value={priceRange}
                            onValueChange={(value) => setPriceRange(value)}
                          />
                          <div className="flex items-center justify-between text-sm">
                            <span>${priceRange[0]}/hr</span>
                            <span>${priceRange[1]}/hr</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rating">
                      <AccordionTrigger className="text-sm font-medium">
                        Rating
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-1">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`rating-${rating}`}
                                className="h-4 w-4"
                              />
                              <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center text-sm">
                                {rating}
                                <Star className="ml-1 h-3 w-3 fill-amber-400 text-amber-400" /> & Up
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {selectedCategory !== "all" && selectedCategory && (
                      <AccordionItem value="subcategories">
                        <AccordionTrigger className="text-sm font-medium">
                          Service Type
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-1">
                            {serviceCategories
                              .find((cat) => cat.id === selectedCategory)
                              ?.subcategories.map((subcat, index) => (
                                <div key={index} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id={`subcat-${index}`}
                                    className="h-4 w-4"
                                  />
                                  <label htmlFor={`subcat-${index}`} className="ml-2 text-sm">
                                    {subcat}
                                  </label>
                                </div>
                              ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )}

                    <AccordionItem value="availability">
                      <AccordionTrigger className="text-sm font-medium">
                        Availability
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="availability-today"
                              className="h-4 w-4"
                            />
                            <label htmlFor="availability-today" className="ml-2 text-sm">
                              Available Today
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="availability-weekend"
                              className="h-4 w-4"
                            />
                            <label htmlFor="availability-weekend" className="ml-2 text-sm">
                              Available on Weekend
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="availability-emergency"
                              className="h-4 w-4"
                            />
                            <label htmlFor="availability-emergency" className="ml-2 text-sm">
                              Emergency Service
                            </label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-6 flex flex-col gap-2">
                    <Button>Apply Filters</Button>
                    <Button variant="outline">Reset</Button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {selectedCategory !== "all"
                        ? serviceCategories.find((cat) => cat.id === selectedCategory)?.name || "All Services"
                        : "All Services"}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {providers.length} professionals found
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <label htmlFor="sort-by" className="text-sm">
                        Sort by:
                      </label>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rating">Highest Rating</SelectItem>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                          <SelectItem value="reviews">Most Reviews</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="hidden sm:block">
                      <Tabs value={view} onValueChange={setView} className="w-[180px]">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="grid">Grid</TabsTrigger>
                          <TabsTrigger value="list">List</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                </div>

                {selectedCategory !== "all" && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {serviceCategories
                      .find((cat) => cat.id === selectedCategory)
                      ?.subcategories.map((subcat, index) => (
                        <Badge key={index} variant="outline">
                          {subcat}
                        </Badge>
                      ))}
                  </div>
                )}

                <div className={`grid gap-6 ${view === "grid" ? "sm:grid-cols-2 lg:grid-cols-2" : ""}`}>
                  {providers.map((provider) => (
                    <ProviderCard
                      key={provider.id}
                      id={provider.id}
                      name={provider.name}
                      avatar={provider.avatar}
                      profession={provider.profession}
                      rating={provider.rating}
                      ratingCount={provider.ratingCount}
                      tags={provider.tags}
                      price={provider.price}
                      verified={provider.verified}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
