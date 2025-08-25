import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ChartComponent from '../components/ChartComponent';

const AnalysisVisualizations = () => {
  // Sample data for visualizations
  const hotelCategoryData = {
    labels: ['Luxury', 'Premium', 'Mid-Range', 'Budget', 'Hostel'],
    datasets: [
      {
        label: 'Number of Hotels',
        data: [45, 78, 120, 185, 62],
        backgroundColor: [
          'rgba(210, 47, 39, 0.6)',
          'rgba(184, 134, 11, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(139, 92, 246, 0.6)'
        ],
        borderColor: [
          'rgba(210, 47, 39, 1)',
          'rgba(184, 134, 11, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(139, 92, 246, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const bookingSourceData = {
    labels: ['Online Travel Agencies', 'Direct Booking', 'Travel Agents', 'Walk-ins', 'Corporate'],
    datasets: [
      {
        label: 'Percentage of Bookings',
        data: [42, 30, 15, 8, 5],
        backgroundColor: [
          'rgba(210, 47, 39, 0.6)',
          'rgba(184, 134, 11, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(139, 92, 246, 0.6)'
        ],
        borderColor: [
          'rgba(210, 47, 39, 1)',
          'rgba(184, 134, 11, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(139, 92, 246, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const visitorOriginData = {
    labels: ['North India', 'South India', 'East India', 'West India', 'USA', 'UK', 'Europe', 'Middle East', 'Southeast Asia', 'Others'],
    datasets: [
      {
        label: 'Percentage of Visitors',
        data: [28, 15, 10, 12, 8, 7, 6, 5, 4, 5],
        backgroundColor: 'rgba(210, 47, 39, 0.6)',
        borderColor: 'rgba(210, 47, 39, 1)',
        borderWidth: 1
      }
    ]
  };

  const seasonalOccupancyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Luxury Hotels',
        data: [85, 88, 82, 75, 68, 72, 76, 78, 80, 87, 90, 92],
        borderColor: 'rgba(210, 47, 39, 1)',
        backgroundColor: 'rgba(210, 47, 39, 0.1)',
        tension: 0.3,
        fill: true
      },
      {
        label: 'Mid-Range Hotels',
        data: [75, 78, 72, 68, 65, 70, 72, 75, 78, 80, 82, 85],
        borderColor: 'rgba(184, 134, 11, 1)',
        backgroundColor: 'rgba(184, 134, 11, 0.1)',
        tension: 0.3,
        fill: true
      },
      {
        label: 'Budget Hotels',
        data: [82, 85, 80, 78, 75, 78, 80, 82, 85, 88, 90, 92],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  return (
    <>
      <Hero 
        title="Data Visualizations"
        subtitle="Explore detailed charts and graphs from our Delhi hotel visitor analysis"
        imageSrc="https://images.pexels.com/photos/7947737/pexels-photo-7947737.jpeg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Visualization Gallery"
            subtitle="Visual representation of key findings from our hotel visitor management analysis"
          />
          
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600">
              These visualizations present key insights from our comprehensive analysis of Delhi's 
              hotel visitor management data. Each chart reveals important patterns and trends that 
              help understand the dynamics of Delhi's hospitality industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hotel Categories */}
      <section className="py-16 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Hotel Categories in Delhi"
            subtitle="Distribution of hotels across different categories"
            align="left"
          />
          
          <div className="heritage-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ChartComponent type="pie" data={hotelCategoryData} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-serif font-bold mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Budget hotels constitute the largest segment (38%) of Delhi's accommodation options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Mid-range hotels make up about 24% of the market, catering to business travelers and tourists seeking comfort at moderate prices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Premium and luxury segments together represent about 25% of the market, concentrated in central Delhi and near tourist hubs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Hostels and backpacker accommodations have shown significant growth in recent years, particularly in areas popular with younger travelers</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Sources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Booking Sources"
            subtitle="How visitors book their accommodations in Delhi"
            align="left"
          />
          
          <div className="heritage-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-serif font-bold mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Online Travel Agencies (OTAs) dominate the booking landscape, accounting for 42% of all reservations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Direct bookings through hotel websites have increased to 30%, reflecting hotels' efforts to reduce dependency on OTAs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Traditional travel agents still maintain a 15% market share, particularly for package tours and international visitors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Walk-in bookings (8%) are more common in budget accommodations and during peak tourist seasons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Corporate bookings (5%) are concentrated in business districts and upscale hotels</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ChartComponent type="doughnut" data={bookingSourceData} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Origin */}
      <section className="py-16 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Visitor Origin"
            subtitle="Geographic distribution of visitors to Delhi hotels"
            align="left"
          />
          
          <div className="heritage-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ChartComponent 
                  type="bar" 
                  data={visitorOriginData}
                  options={{
                    indexAxis: 'y',
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: 'Percentage of Visitors (%)'
                        }
                      }
                    }
                  }}
                  height={400}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-serif font-bold mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Domestic visitors make up 65% of hotel guests, with North India contributing the largest share (28%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>International visitors (35%) are primarily from the USA, UK, and European countries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Visitors from the Middle East show higher average spending and longer stays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Southeast Asian visitors typically choose mid-range accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Regional differences in domestic tourism reflect seasonal variations and cultural events</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Occupancy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Seasonal Occupancy Rates"
            subtitle="Monthly occupancy patterns across different hotel categories"
            align="left"
          />
          
          <div className="heritage-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-serif font-bold mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Peak season (October-March) shows the highest occupancy rates across all hotel categories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Luxury hotels experience highest demand during winter months (November-February)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Budget hotels maintain relatively stable occupancy throughout the year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Summer months (April-June) show lower occupancy across all segments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Festival periods and major events create short-term spikes in occupancy</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ChartComponent 
                  type="line" 
                  data={seasonalOccupancyData}
                  options={{
                    scales: {
                      y: {
                        min: 60,
                        max: 100,
                        title: {
                          display: true,
                          text: 'Occupancy Rate (%)'
                        }
                      }
                    }
                  }}
                  height={400}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Additional Resources"
            subtitle="Explore more data visualizations and insights"
          />
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            <motion.a 
              href="https://colab.research.google.com/drive/175dE4uzsxtow-fsCUKMAk8aKmLddTC6d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              View Complete Analysis Notebook
            </motion.a>
            
            <motion.a 
              href="/analysis/insights" 
              className="btn-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore Key Insights
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalysisVisualizations;