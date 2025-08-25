import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PlacesToVisit = () => {
  const historicalSites = [
    {
      name: "Red Fort",
      description: "A historic fort that served as the main residence of the Mughal Emperors. Built in 1639 by Shah Jahan, it's a UNESCO World Heritage Site.",
      image: "https://images.pexels.com/photos/13267173/pexels-photo-13267173.jpeg",
      timings: "9:30 AM - 4:30 PM (Closed on Mondays)",
      entryFee: "₹35 (Indians), ₹500 (Foreigners)"
    },
    {
      name: "Qutub Minar",
      description: "A 73-meter tall minaret built in 1193 by Qutb-ud-din Aibak. It's the tallest brick minaret in the world and a UNESCO World Heritage Site.",
      image: "https://images.pexels.com/photos/4916556/pexels-photo-4916556.jpeg",
      timings: "7:00 AM - 5:00 PM",
      entryFee: "₹35 (Indians), ₹550 (Foreigners)"
    },
    {
      name: "Humayun's Tomb",
      description: "Built in 1570, this tomb was commissioned by Humayun's wife Bega Begum. It was the first garden-tomb in the Indian subcontinent.",
      image: "https://images.pexels.com/photos/9253010/pexels-photo-9253010.jpeg",
      timings: "6:00 AM - 6:00 PM",
      entryFee: "₹35 (Indians), ₹550 (Foreigners)"
    },
    {
      name: "India Gate",
      description: "A war memorial dedicated to the soldiers of the British Indian Army who died in the First World War. It was designed by Sir Edwin Lutyens.",
      image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg",
      timings: "Open 24 hours",
      entryFee: "Free"
    }
  ];

  const religiousSites = [
    {
      name: "Jama Masjid",
      description: "One of the largest mosques in India, built by Shah Jahan between 1644 and 1656. It can accommodate up to 25,000 worshippers.",
      image: "https://images.pexels.com/photos/14364601/pexels-photo-14364601.jpeg",
      timings: "7:00 AM - 12:00 PM, 1:30 PM - 6:30 PM (Closed during prayer times)",
      entryFee: "Free (Camera fee: ₹300)"
    },
    {
      name: "Lotus Temple",
      description: "A Bahá'í House of Worship, notable for its flowerlike shape. Completed in 1986, it serves as a temple of the Bahá'í Faith.",
      image: "https://images.pexels.com/photos/1850021/pexels-photo-1850021.jpeg",
      timings: "9:00 AM - 5:30 PM (Closed on Mondays)",
      entryFee: "Free"
    },
    {
      name: "Akshardham Temple",
      description: "A Hindu temple complex showcasing Indian culture, spirituality, and architecture. It features an IMAX theater and musical fountains.",
      image: "https://images.pexels.com/photos/14364599/pexels-photo-14364599.jpeg",
      timings: "9:30 AM - 6:30 PM (Closed on Mondays)",
      entryFee: "Free (Exhibition: ₹170)"
    },
    {
      name: "ISKCON Temple",
      description: "Also known as the Glory of India Vedic Cultural Center, this temple is dedicated to Lord Krishna and features beautiful architecture.",
      image: "https://images.pexels.com/photos/15365780/pexels-photo-15365780.jpeg",
      timings: "4:30 AM - 9:00 PM",
      entryFee: "Free"
    }
  ];

  const markets = [
    {
      name: "Chandni Chowk",
      description: "One of the oldest and busiest markets in Delhi, known for its street food, spices, and textiles. It was built in the 17th century by Shah Jahan.",
      image: "https://images.pexels.com/photos/4350296/pexels-photo-4350296.jpeg",
      bestFor: "Street food, textiles, spices, jewelry"
    },
    {
      name: "Connaught Place",
      description: "A colonial-era shopping district featuring a circular colonnaded structure with shops, restaurants, and offices.",
      image: "https://images.pexels.com/photos/14364602/pexels-photo-14364602.jpeg",
      bestFor: "Branded stores, restaurants, bookshops"
    },
    {
      name: "Dilli Haat",
      description: "An open-air craft bazaar and food plaza that showcases handicrafts and cuisine from different states of India.",
      image: "https://images.pexels.com/photos/2608515/pexels-photo-2608515.jpeg",
      bestFor: "Handicrafts, regional cuisine, cultural performances"
    },
    {
      name: "Sarojini Nagar Market",
      description: "A popular market known for its affordable fashion, export surplus items, and bargaining opportunities.",
      image: "https://images.pexels.com/photos/3865898/pexels-photo-3865898.jpeg",
      bestFor: "Budget shopping, fashion, export surplus"
    }
  ];

  return (
    <>
      <Hero 
        title="Unmissable Places in Delhi"
        subtitle="From ancient monuments to bustling markets, explore the must-visit attractions of India's capital"
        imageSrc="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Experience Delhi's Diversity"
            subtitle="Discover the perfect blend of historical grandeur, spiritual sanctuaries, and vibrant marketplaces"
          />
          
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 mb-4">
              Delhi, the heart of India, offers a fascinating mix of experiences that reflect its rich historical 
              tapestry and dynamic present. From UNESCO World Heritage sites to spiritual retreats, 
              from colonial-era landmarks to bustling bazaars, the city has something for every traveler.
            </p>
            <p className="text-gray-600">
              Whether you're interested in exploring majestic monuments that tell tales of bygone eras, 
              seeking spiritual solace in temples and mosques, indulging in shopping sprees at vibrant markets, 
              or savoring the diverse culinary delights, Delhi promises an unforgettable journey through time and culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historical Sites */}
      <section className="py-20 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Historical Monuments"
            subtitle="Explore Delhi's rich heritage through its magnificent historical sites"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historicalSites.map((site, index) => (
              <motion.div 
                key={index}
                className="heritage-card overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="h-60 bg-cover bg-center"
                  style={{ backgroundImage: `url(${site.image})` }}
                ></div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-serif font-bold mb-2">{site.name}</h3>
                  <p className="text-gray-600 mb-4">{site.description}</p>
                  <div className="mt-auto">
                    <p className="text-sm text-gray-500"><span className="font-semibold">Timings:</span> {site.timings}</p>
                    <p className="text-sm text-gray-500"><span className="font-semibold">Entry Fee:</span> {site.entryFee}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Religious Sites */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Religious Sanctuaries"
            subtitle="Experience spiritual solace at Delhi's diverse religious landmarks"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {religiousSites.map((site, index) => (
              <motion.div 
                key={index}
                className="heritage-card overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="h-60 bg-cover bg-center"
                  style={{ backgroundImage: `url(${site.image})` }}
                ></div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-serif font-bold mb-2">{site.name}</h3>
                  <p className="text-gray-600 mb-4">{site.description}</p>
                  <div className="mt-auto">
                    <p className="text-sm text-gray-500"><span className="font-semibold">Timings:</span> {site.timings}</p>
                    <p className="text-sm text-gray-500"><span className="font-semibold">Entry Fee:</span> {site.entryFee}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-20 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Vibrant Markets"
            subtitle="Immerse yourself in the colorful and bustling marketplaces of Delhi"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {markets.map((market, index) => (
              <motion.div 
                key={index}
                className="heritage-card overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="h-60 bg-cover bg-center"
                  style={{ backgroundImage: `url(${market.image})` }}
                ></div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-serif font-bold mb-2">{market.name}</h3>
                  <p className="text-gray-600 mb-4">{market.description}</p>
                  <p className="text-sm text-gray-500"><span className="font-semibold">Best For:</span> {market.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Travel Tips"
            subtitle="Make the most of your Delhi visit with these helpful tips"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="heritage-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Best Time to Visit</h3>
              <p className="text-gray-600 mb-4">
                October to March is the ideal time to visit Delhi when the weather is pleasant. 
                Summers (April to June) can be extremely hot, while monsoons (July to September) 
                bring high humidity.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Winter (Oct-Mar): 5°C to 25°C</li>
                <li>Summer (Apr-Jun): 25°C to 45°C</li>
                <li>Monsoon (Jul-Sep): 25°C to 35°C</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Getting Around</h3>
              <p className="text-gray-600 mb-4">
                Delhi has an excellent public transportation system. The Metro is clean, efficient, 
                and connects most tourist destinations. Auto-rickshaws, taxis, and ride-sharing services 
                are also readily available.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Delhi Metro: Fast and convenient</li>
                <li>Auto-rickshaws: Good for short distances</li>
                <li>Taxis/Ride-sharing: Comfortable option</li>
                <li>Buses: Economical but often crowded</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Safety & Etiquette</h3>
              <p className="text-gray-600 mb-4">
                While exploring Delhi, it's important to take certain precautions and respect local customs. 
                Be mindful of your belongings in crowded areas and dress modestly when visiting religious sites.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dress modestly at religious sites</li>
                <li>Remove shoes before entering temples</li>
                <li>Be cautious of your belongings</li>
                <li>Carry bottled water and stay hydrated</li>
                <li>Bargain at markets but respectfully</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hotel Analysis Link */}
      <section 
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3492735/pexels-photo-3492735.jpeg)`
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
            Planning to Stay in Delhi?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our comprehensive hotel visitor management analysis to make informed decisions about your stay. 
            Our detailed research provides insights into hotel patterns, visitor preferences, and recommendations 
            based on real data from Delhi's hospitality sector.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/analysis" className="btn-primary">
              View Analysis
            </Link>
            <a 
              href="https://colab.research.google.com/drive/175dE4uzsxtow-fsCUKMAk8aKmLddTC6d"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-primary-500"
            >
              Explore Detailed Research
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PlacesToVisit;