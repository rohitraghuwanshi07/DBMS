import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  return (
    <>
      <Hero 
        title="Discover the Heart of India"
        subtitle="Explore Delhi's rich heritage, vibrant culture, and comprehensive hotel visitor data analysis"
        imageSrc="https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg"
        buttonText="Explore Delhi"
        buttonLink="/places-to-visit"
      />

      {/* About Delhi Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Welcome to Delhi"
            subtitle="The capital of India blends ancient history with modern vibrancy"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif font-bold mb-4">A City of Contrasts</h3>
              <p className="text-gray-600 mb-4">
                Delhi, India's capital territory, is a massive metropolitan area in the country's north. 
                In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, 
                a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.
              </p>
              <p className="text-gray-600 mb-6">
                Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls. 
                The city seamlessly blends ancient monuments, colonial architecture, and modern developments, 
                making it a fascinating destination for visitors from around the world.
              </p>
              <Link to="/history" className="btn-primary">Explore History</Link>
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg" 
                alt="Delhi cityscape" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Explore Our Features"
            subtitle="Discover everything Delhi has to offer, from historical landmarks to data-driven hotel insights"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Rich Historical Heritage"
              description="Explore Delhi's millennia of history through its monuments, architecture, and cultural landmarks."
              imageSrc="https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg"
              delay={0.1}
            />
            
            <FeatureCard 
              title="Tourist Attractions"
              description="Discover Delhi's must-visit places, from ancient wonders to modern marvels and hidden gems."
              imageSrc="https://images.pexels.com/photos/13267173/pexels-photo-13267173.jpeg"
              delay={0.2}
            />
            
            <FeatureCard 
              title="Data Analysis"
              description="Explore comprehensive hotel visitor management data analysis for valuable insights."
              imageSrc="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Hotel Analysis Highlight */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Hotel Visitor Management Analysis
              </h2>
              <p className="text-lg mb-6">
                Our comprehensive data analysis provides valuable insights into Delhi's hotel industry,
                visitor patterns, booking trends, and more. These analytics help both tourists and industry
                professionals make informed decisions.
              </p>
              <Link to="/analysis" className="inline-block bg-white text-primary-500 py-3 px-8 rounded font-semibold hover:bg-gray-100 transition">
                View Analysis
              </Link>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/6169/woman-hand-desk-office.jpg" 
                alt="Hotel analysis dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg)`
        }}
      >
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Explore Delhi?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start your journey through Delhi's rich history, vibrant culture,
            and data-driven insights today.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/places-to-visit" className="btn-primary">
              Explore Places
            </Link>
            <Link to="/hotel-recommendations" className="btn-secondary bg-transparent text-white border-white">
              Find Hotels
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;