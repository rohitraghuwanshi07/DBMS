import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, Users, FileText } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const AnalysisInsights = () => {
  const keyFindings = [
    {
      title: "Seasonal Patterns",
      description: "Delhi hotels experience peak occupancy during October to March, coinciding with the winter season and major festivals. Summer months (April-June) see a significant drop in occupancy due to extreme heat.",
      icon: <TrendingUp className="h-10 w-10 text-primary-500" />
    },
    {
      title: "Visitor Demographics",
      description: "Domestic tourists constitute 65% of hotel guests, predominantly from North and West India. International visitors (35%) are primarily from USA, UK, Europe, and neighboring Asian countries.",
      icon: <Users className="h-10 w-10 text-primary-500" />
    },
    {
      title: "Booking Behavior",
      description: "72% of bookings are made online, with OTAs dominating the market. Advance booking windows average 18 days for domestic tourists and 47 days for international visitors.",
      icon: <BarChart2 className="h-10 w-10 text-primary-500" />
    }
  ];

  const recommendations = [
    {
      title: "For Hotel Operators",
      points: [
        "Implement dynamic pricing strategies based on seasonal demand patterns",
        "Invest in direct booking channels to reduce dependency on OTAs",
        "Develop targeted marketing campaigns for specific visitor segments",
        "Enhance digital presence with multilingual support for international guests",
        "Offer special packages during low season to boost occupancy"
      ]
    },
    {
      title: "For Tourists",
      points: [
        "Consider visiting during shoulder seasons (September, March-April) for better rates",
        "Book luxury accommodations during summer for significant discounts",
        "Explore areas beyond central Delhi for better value in mid-range hotels",
        "Compare prices across multiple booking platforms before reserving",
        "Consider longer stays for better weekly/monthly rates, especially in serviced apartments"
      ]
    },
    {
      title: "For Policy Makers",
      points: [
        "Develop tourism infrastructure in underserved areas to distribute visitor load",
        "Create incentives for sustainable and eco-friendly hotel practices",
        "Streamline licensing and regulatory processes for new hotel developments",
        "Improve public transportation connectivity to major tourist attractions",
        "Establish standardized quality ratings for budget accommodations"
      ]
    }
  ];

  return (
    <>
      <Hero 
        title="Key Insights and Recommendations"
        subtitle="Actionable insights from our analysis of Delhi's hotel visitor management"
        imageSrc="https://images.pexels.com/photos/7947737/pexels-photo-7947737.jpeg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Analysis Insights"
            subtitle="Key findings and strategic recommendations based on our comprehensive data analysis"
          />
          
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 mb-6">
              Our analysis of Delhi's hotel visitor management data has revealed important patterns, 
              trends, and insights that can benefit various stakeholders in the tourism ecosystem. 
              These findings are based on comprehensive data collection and visualization techniques.
            </p>
            <p className="text-gray-600">
              The insights presented here are actionable and can help hotel operators optimize their 
              strategies, guide tourists in making informed decisions, and assist policy makers in 
              developing effective tourism policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-20 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Key Findings"
            subtitle="Major insights derived from our data analysis"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFindings.map((finding, index) => (
              <motion.div 
                key={index}
                className="heritage-card p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  {finding.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{finding.title}</h3>
                <p className="text-gray-600">{finding.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="heritage-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Price Sensitivity</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Domestic visitors show high price sensitivity, with 68% prioritizing cost over amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>International visitors prioritize location (54%) and reviews (38%) over price</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Price elasticity varies by season, with peak season showing lower sensitivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Value-added services significantly influence booking decisions for mid-range hotels</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="heritage-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Spatial Distribution</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Central Delhi and areas near major attractions have the highest concentration of hotels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Budget accommodations cluster around transport hubs like railway stations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>South Delhi attracts premium and luxury segments targeting business travelers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Emerging areas in East Delhi show rapid growth in mid-range accommodations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Recommendations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Strategic Recommendations"
            subtitle="Actionable insights for different stakeholders in the tourism ecosystem"
          />
          
          <div className="space-y-10">
            {recommendations.map((recommendation, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary-500">{recommendation.title}</h3>
                <div className="heritage-card p-6">
                  <ul className="space-y-3">
                    {recommendation.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-accent-500 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Trends */}
      <section className="py-20 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Future Trends"
            subtitle="Emerging patterns in Delhi's hotel industry based on our analysis"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="heritage-card p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Emerging Patterns</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Growth in boutique and heritage hotels that offer unique cultural experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Increasing demand for sustainable and eco-friendly accommodations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Rise of digital nomad-friendly hotels with co-working spaces and extended stay options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Integration of local experiences and cultural immersion in hotel offerings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Technology-driven personalization of guest experiences and services</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="heritage-card p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Long-Term Outlook</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Continued growth in total room inventory, with emphasis on mid-range and premium segments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Development of new tourism clusters in previously underserved areas of Delhi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Increasing market share of alternative accommodations (serviced apartments, homestays)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Growing importance of review management and online reputation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Shift towards experience-based offerings rather than traditional room-centric models</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Explore the Complete Analysis</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              For a deeper dive into our methodologies, data sources, and additional findings, 
              access the complete analysis notebook.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://colab.research.google.com/drive/175dE4uzsxtow-fsCUKMAk8aKmLddTC6d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-500 py-3 px-8 rounded font-semibold hover:bg-gray-100 transition flex items-center justify-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Notebook
              </a>
              <Link 
                to="/hotel-recommendations" 
                className="inline-block bg-transparent text-white py-3 px-8 rounded font-semibold border-2 border-white hover:bg-white hover:text-primary-500 transition"
              >
                Get Hotel Recommendations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AnalysisInsights;