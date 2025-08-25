import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

interface Hotel {
  name: string;
  category: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  features: string[];
}

const HotelRecommendations = () => {
  const [preferences, setPreferences] = useState({
    category: '',
    budget: '',
    location: '',
    purpose: ''
  });

  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendedHotels, setRecommendedHotels] = useState<Hotel[]>([]);

  const allHotels: Hotel[] = [
    {
      name: "The Imperial",
      category: "luxury",
      location: "central",
      price: "₹18,000 - ₹30,000",
      rating: 4.8,
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      features: ["Heritage property", "Multiple restaurants", "Spa", "Swimming pool"]
    },
    {
      name: "Taj Palace",
      category: "luxury",
      location: "diplomatic",
      price: "₹15,000 - ₹25,000",
      rating: 4.7,
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
      features: ["Fine dining", "Business center", "Outdoor pool", "Fitness center"]
    },
    {
      name: "The Claridges",
      category: "premium",
      location: "south",
      price: "₹10,000 - ₹18,000",
      rating: 4.5,
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      features: ["Colonial architecture", "Multiple restaurants", "Outdoor pool", "Spa"]
    },
    {
      name: "The Leela Palace",
      category: "luxury",
      location: "diplomatic",
      price: "₹16,000 - ₹28,000",
      rating: 4.9,
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      features: ["Rooftop pool", "Multiple restaurants", "Spa", "Fitness center"]
    },
    {
      name: "The LaLiT",
      category: "premium",
      location: "central",
      price: "₹8,000 - ₹15,000",
      rating: 4.3,
      image: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg",
      features: ["City views", "Nightclub", "Spa", "Multiple restaurants"]
    },
    {
      name: "The Park",
      category: "premium",
      location: "central",
      price: "₹7,000 - ₹12,000",
      rating: 4.2,
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
      features: ["Modern design", "Nightlife", "Restaurants", "Fitness center"]
    },
    {
      name: "Vivanta by Taj",
      category: "premium",
      location: "south",
      price: "₹9,000 - ₹16,000",
      rating: 4.4,
      image: "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg",
      features: ["Business facilities", "Restaurant", "Fitness center", "Spa"]
    },
    {
      name: "Shangri-La Eros",
      category: "luxury",
      location: "central",
      price: "₹14,000 - ₹24,000",
      rating: 4.6,
      image: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg",
      features: ["Luxury spa", "Italian restaurant", "Outdoor pool", "City views"]
    },
    {
      name: "The Grand",
      category: "premium",
      location: "south",
      price: "₹8,000 - ₹14,000",
      rating: 4.3,
      image: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg",
      features: ["Multiple restaurants", "Spa", "Business center", "Pool"]
    },
    {
      name: "Hyatt Regency",
      category: "luxury",
      location: "central",
      price: "₹12,000 - ₹20,000",
      rating: 4.5,
      image: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg",
      features: ["24/7 dining", "Spa", "Fitness center", "Pool"]
    },
    {
      name: "Bloom Rooms",
      category: "budget",
      location: "central",
      price: "₹3,000 - ₹5,000",
      rating: 4.2,
      image: "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
      features: ["Clean rooms", "Free WiFi", "Air conditioning", "24/7 service"]
    },
    {
      name: "Hotel Palace Heights",
      category: "mid-range",
      location: "central",
      price: "₹5,000 - ₹8,000",
      rating: 4.1,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      features: ["Restaurant", "Room service", "Business facilities", "WiFi"]
    },
    {
      name: "Zostel Delhi",
      category: "hostel",
      location: "north",
      price: "₹800 - ₹1,500",
      rating: 4.3,
      image: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg",
      features: ["Common area", "Free WiFi", "Games room", "Tours desk"]
    },
    {
      name: "Madpackers Hostel",
      category: "hostel",
      location: "south",
      price: "₹700 - ₹1,400",
      rating: 4.4,
      image: "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
      features: ["Rooftop cafe", "Common kitchen", "Movie nights", "Free WiFi"]
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filterHotels = () => {
    let filtered = [...allHotels];

    // Filter by category
    if (preferences.category) {
      filtered = filtered.filter(hotel => hotel.category === preferences.category);
    }

    // Filter by location
    if (preferences.location) {
      filtered = filtered.filter(hotel => hotel.location === preferences.location);
    }

    // Filter by budget range
    if (preferences.budget) {
      filtered = filtered.filter(hotel => {
        const price = parseInt(hotel.price.split('₹')[1].split(',')[0].trim());
        switch (preferences.budget) {
          case 'budget1':
            return price < 2000;
          case 'budget2':
            return price >= 2000 && price < 5000;
          case 'budget3':
            return price >= 5000 && price < 10000;
          case 'budget4':
            return price >= 10000 && price < 15000;
          case 'budget5':
            return price >= 15000;
          default:
            return true;
        }
      });
    }

    // If no hotels match the criteria, return a subset of all hotels
    if (filtered.length === 0) {
      filtered = allHotels.slice(0, 4);
    }

    // Randomize the order and limit to 4 hotels
    return filtered
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredHotels = filterHotels();
    setRecommendedHotels(filteredHotels);
    setShowRecommendations(true);
  };

  return (
    <>
      <Hero 
        title="Hotel Recommendations"
        subtitle="Find the perfect place to stay in Delhi based on our data-driven insights"
        imageSrc="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Find Your Perfect Stay"
            subtitle="Our data-driven hotel recommendation system helps you find accommodations that match your preferences"
          />
          
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="heritage-card p-8">
              <p className="text-gray-600 mb-6">
                Based on our comprehensive analysis of Delhi's hotel visitor management data, we've developed 
                a recommendation system that considers various factors like location, price range, amenities, 
                and visitor reviews to suggest the most suitable accommodations for your stay.
              </p>
              
              <p className="text-gray-600 mb-6">
                Simply tell us your preferences, and we'll provide personalized recommendations to help you 
                make an informed decision for your Delhi visit.
              </p>
              
              <div className="mb-8 p-4 bg-primary-50 border-l-4 border-primary-500 rounded">
                <p className="text-gray-700">
                  <span className="font-bold">Pro Tip:</span> For a more detailed analysis of hotel visitor management in Delhi, check out our <a 
                    href="https://colab.research.google.com/drive/175dE4uzsxtow-fsCUKMAk8aKmLddTC6d" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-500 font-semibold hover:underline"
                  >
                    comprehensive research
                  </a>.
                </p>
              </div>
              
              {/* Preference Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="category" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Hotel Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={preferences.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select Category</option>
                      <option value="luxury">Luxury</option>
                      <option value="premium">Premium</option>
                      <option value="mid-range">Mid-Range</option>
                      <option value="budget">Budget</option>
                      <option value="hostel">Hostel/Backpacker</option>
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="budget" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Budget Per Night
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={preferences.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="budget1">Under ₹2,000</option>
                      <option value="budget2">₹2,000 - ₹5,000</option>
                      <option value="budget3">₹5,000 - ₹10,000</option>
                      <option value="budget4">₹10,000 - ₹15,000</option>
                      <option value="budget5">Above ₹15,000</option>
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="location" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Preferred Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={preferences.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select Location</option>
                      <option value="central">Central Delhi</option>
                      <option value="south">South Delhi</option>
                      <option value="north">North Delhi</option>
                      <option value="east">East Delhi</option>
                      <option value="west">West Delhi</option>
                      <option value="airport">Near Airport</option>
                      <option value="station">Near Railway Station</option>
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="purpose" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Purpose of Visit
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={preferences.purpose}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select Purpose</option>
                      <option value="tourism">Tourism/Sightseeing</option>
                      <option value="business">Business</option>
                      <option value="family">Family Visit</option>
                      <option value="religious">Religious/Spiritual</option>
                      <option value="medical">Medical</option>
                      <option value="transit">Transit/Layover</option>
                    </select>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full py-3"
                >
                  Get Recommendations
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommendations */}
      {showRecommendations && (
        <section className="py-20 bg-secondary-100 hero-pattern">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Recommended Hotels"
              subtitle="Based on your preferences and our data analysis"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recommendedHotels.map((hotel, index) => (
                <motion.div 
                  key={index}
                  className="heritage-card overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="h-60 bg-cover bg-center"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  ></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-bold">{hotel.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="ml-1 font-semibold">{hotel.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-primary-100 text-primary-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                        {hotel.category.charAt(0).toUpperCase() + hotel.category.slice(1)}
                      </span>
                      <span className="inline-block bg-secondary-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                        {hotel.location.charAt(0).toUpperCase() + hotel.location.slice(1)}
                      </span>
                      <span className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mb-2">
                        {hotel.price}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {hotel.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href="#" 
                      className="text-primary-500 font-semibold flex items-center hover:text-primary-700 transition"
                    >
                      View Details
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hotel Selection Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Hotel Selection Tips"
            subtitle="Expert advice to help you choose the right accommodation in Delhi"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="heritage-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Location Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Central Delhi offers easy access to major attractions but can be more expensive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>South Delhi has upscale neighborhoods and is close to shopping districts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Staying near a Metro station increases mobility around the city</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Consider proximity to the attractions you plan to visit most frequently</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Seasonal Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Book well in advance (2-3 months) for peak season (Oct-Mar) to secure better rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Summer (Apr-Jun) offers the best deals, but ensure your accommodation has good air conditioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Monsoon season (Jul-Sep) can have unpredictable weather; choose hotels with indoor facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Festival periods see significant price increases; book extra early for these times</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Value Maximization</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Compare prices across multiple booking platforms before reserving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Look for packages that include meals, especially breakfast</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Consider serviced apartments for stays longer than a week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Check if the hotel offers free airport/station transfers to save on transportation costs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analysis Reference */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Looking for In-Depth Hotel Insights?</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Our hotel recommendations are based on comprehensive data analysis. For those interested in the 
              methodology and detailed findings, visit our complete analysis notebook.
            </p>
            <a 
              href="https://colab.research.google.com/drive/175dE4uzsxtow-fsCUKMAk8aKmLddTC6d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-500 py-3 px-8 rounded font-semibold hover:bg-gray-100 transition"
            >
              Explore the Complete Analysis
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HotelRecommendations;