
import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
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
import { useToast } from "@/components/ui/use-toast";

// Sample data
const allProviders = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Plumber",
    rating: 4.9,
    ratingCount: 142,
    tags: ["Leak Repair", "Pipe Installation", "Emergency Service"],
    price: "$60/hour",
    priceValue: 60,
    verified: true,
    available: true,
    availableToday: true,
    availableWeekend: true,
    emergencyService: true,
    category: "plumbing",
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
    priceValue: 75,
    verified: true,
    available: true,
    availableToday: false,
    availableWeekend: true,
    emergencyService: false,
    category: "electrical",
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
    priceValue: 50,
    verified: true,
    available: true,
    availableToday: true,
    availableWeekend: false,
    emergencyService: false,
    category: "cleaning",
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
    priceValue: 55,
    verified: false,
    available: true,
    availableToday: false,
    availableWeekend: true,
    emergencyService: false,
    category: "handyman",
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
    priceValue: 70,
    verified: true,
    available: true,
    availableToday: true,
    availableWeekend: true,
    emergencyService: true,
    category: "appliance",
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
    priceValue: 85,
    verified: true,
    available: true,
    availableToday: false,
    availableWeekend: true,
    emergencyService: false,
    category: "cooking",
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
  const { category: categoryParam } = useParams<{ category?: string }>();
  const searchParams = new URLSearchParams(location.search);
  const initialCategoryParam = categoryParam || searchParams.get("category") || "all";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryParam);
  const [searchQuery, setSearchQuery] = useState("");
  const [location2, setLocation2] = useState("New York, NY");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("rating");
  const [view, setView] = useState("grid");
  const [minRating, setMinRating] = useState(0);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [availability, setAvailability] = useState({
    today: false,
    weekend: false,
    emergency: false
  });
  const [providers, setProviders] = useState(allProviders);
  const [currentPage, setCurrentPage] = useState(1);
  const providersPerPage = 4;
  
  const { toast } = useToast();

  // Filter providers based on all criteria
  useEffect(() => {
    let filtered = [...allProviders];
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        provider => provider.category === selectedCategory
      );
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        provider => 
          provider.name.toLowerCase().includes(query) ||
          provider.profession.toLowerCase().includes(query) ||
          provider.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(
      provider => 
        provider.priceValue >= priceRange[0] && 
        provider.priceValue <= priceRange[1]
    );
    
    // Filter by minimum rating
    if (minRating > 0) {
      filtered = filtered.filter(provider => provider.rating >= minRating);
    }
    
    // Filter by subcategories
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter(provider => 
        provider.tags.some(tag => 
          selectedSubcategories.some(subcat => 
            tag.toLowerCase().includes(subcat.toLowerCase())
          )
        )
      );
    }
    
    // Filter by availability
    if (availability.today) {
      filtered = filtered.filter(provider => provider.availableToday);
    }
    if (availability.weekend) {
      filtered = filtered.filter(provider => provider.availableWeekend);
    }
    if (availability.emergency) {
      filtered = filtered.filter(provider => provider.emergencyService);
    }
    
    // Apply sorting
    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        filtered.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case "price-high":
        filtered.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case "reviews":
        filtered.sort((a, b) => b.ratingCount - a.ratingCount);
        break;
    }
    
    setProviders(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, priceRange, minRating, selectedSubcategories, availability, sortBy]);

  // Handle subcategory selection
  const handleSubcategoryToggle = (subcategory: string) => {
    setSelectedSubcategories(prev => {
      if (prev.includes(subcategory)) {
        return prev.filter(item => item !== subcategory);
      } else {
        return [...prev, subcategory];
      }
    });
  };

  // Handle rating filter
  const handleRatingFilter = (rating: number) => {
    setMinRating(minRating === rating ? 0 : rating);
  };

  // Handle availability toggle
  const handleAvailabilityToggle = (key: keyof typeof availability) => {
    setAvailability(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for "${searchQuery}" in ${location2}`
    });
  };

  // Handle filter reset
  const handleReset = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setPriceRange([0, 100]);
    setSortBy("rating");
    setMinRating(0);
    setSelectedSubcategories([]);
    setAvailability({
      today: false,
      weekend: false,
      emergency: false
    });
  };

  // Pagination
  const indexOfLastProvider = currentPage * providersPerPage;
  const indexOfFirstProvider = indexOfLastProvider - providersPerPage;
  const currentProviders = providers.slice(indexOfFirstProvider, indexOfLastProvider);
  const totalPages = Math.ceil(providers.length / providersPerPage);

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
            <form onSubmit={handleSearch} className="mt-6 flex w-full max-w-3xl flex-col gap-4 sm:flex-row">
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
                  value={location2}
                  onChange={(e) => setLocation2(e.target.value)}
                />
              </div>
              <Button type="submit" className="shrink-0">Search</Button>
            </form>
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
                                checked={minRating === rating}
                                onChange={() => handleRatingFilter(rating)}
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
                                    checked={selectedSubcategories.includes(subcat)}
                                    onChange={() => handleSubcategoryToggle(subcat)}
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
                              checked={availability.today}
                              onChange={() => handleAvailabilityToggle('today')}
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
                              checked={availability.weekend}
                              onChange={() => handleAvailabilityToggle('weekend')}
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
                              checked={availability.emergency}
                              onChange={() => handleAvailabilityToggle('emergency')}
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
                    <Button onClick={() => toast({ title: "Filters applied" })}>Apply Filters</Button>
                    <Button variant="outline" onClick={handleReset}>Reset</Button>
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
                        <Badge 
                          key={index} 
                          variant={selectedSubcategories.includes(subcat) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => handleSubcategoryToggle(subcat)}
                        >
                          {subcat}
                        </Badge>
                      ))}
                  </div>
                )}

                {currentProviders.length === 0 ? (
                  <div className="rounded-lg border bg-card p-12 text-center shadow-sm">
                    <h3 className="text-lg font-medium">No providers found</h3>
                    <p className="mt-2 text-muted-foreground">Try adjusting your filters or search terms</p>
                    <Button className="mt-4" onClick={handleReset}>Reset Filters</Button>
                  </div>
                ) : (
                  <div className={`grid gap-6 ${view === "grid" ? "sm:grid-cols-2 lg:grid-cols-2" : ""}`}>
                    {currentProviders.map((provider) => (
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
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center">
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(current => Math.max(1, current - 1))}
                      >
                        Previous
                      </Button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <Button 
                          key={page}
                          variant="outline" 
                          size="sm" 
                          className={currentPage === page ? "bg-primary text-primary-foreground" : ""}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      ))}
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(current => Math.min(totalPages, current + 1))}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
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
