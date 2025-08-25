import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, BarChart2, PieChart, TrendingUp } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ChartComponent from '../components/ChartComponent';

const AnalysisOverview = () => {
  // Sample data for the overview chart
  const monthlySummaryData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Domestic Visitors',
        data: [12000, 13500, 14200, 15800, 16500, 19000, 22000, 20500, 17500, 15000, 14500, 18000],
        backgroundColor: 'rgba(210, 47, 39, 0.6)',
        borderColor: 'rgba(210, 47, 39, 1)',
        borderWidth: 1
      },
      {
        label: 'International Visitors',
        data: [5000, 5200, 5800, 6500, 7200, 8000, 9500, 10000, 8500, 7000, 6000, 7500],
        backgroundColor: 'rgba(184, 134, 11, 0.6)',
        borderColor: 'rgba(184, 134, 11, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <>
      <Hero 
        title="Hotel Visitor Management Analysis"
        subtitle="Comprehensive data analysis of Delhi's hotel industry and visitor patterns"
        imageSrc="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="About the Analysis"
            subtitle="Understanding Delhi's hotel visitor patterns through data-driven insights"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 mb-4">
                This data analysis project examines the hotel visitor management in Delhi, providing valuable 
                insights into visitor demographics, booking patterns, seasonal trends, and more. The analysis 
                is based on comprehensive data collection and visualization techniques.
              </p>
              <p className="text-gray-600 mb-4">
                Through this analysis, we aim to understand the factors that influence hotel bookings in Delhi, 
                identify peak seasons, recognize visitor preferences, and provide actionable recommendations 
                for both tourists planning their Delhi trip and industry professionals looking to optimize 
                their services.
              </p>
              <p className="text-gray-600">
                The full analysis is available in a Google Colab notebook, which you can access for a deeper 
                dive into the methodology and complete findings.
              </p>
              <div className="mt-6">
                <a 
                  href="https://colab.research.google.com/drive/175dE4uzsxtow-fsCUKMAk8aKmLddTC6d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center max-w-max"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Complete Analysis
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="heritage-card p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4">Key Insights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Seasonal visitor patterns show peak bookings during October-March period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>International visitors primarily come from USA, UK, and South Asian countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Luxury hotels have higher occupancy rates during winter months</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Budget accommodations are preferred by domestic tourists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Average length of stay is 3.5 days for domestic visitors and 5.2 days for international visitors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Online booking platforms account for 72% of all reservations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Reviews and ratings significantly impact booking decisions</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Monthly Summary Chart */}
      <section className="py-20 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Visitor Trends Overview"
            subtitle="Monthly distribution of domestic and international visitors to Delhi hotels"
          />
          
          <div className="heritage-card p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ChartComponent 
                type="bar" 
                data={monthlySummaryData} 
                options={{
                  scales: {
                    x: {
                      grid: {
                        display: false
                      }
                    },
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Number of Visitors'
                      }
                    }
                  },
                  plugins: {
                    title: {
                      display: true,
                      text: 'Monthly Hotel Visitor Statistics',
                      font: {
                        size: 16,
                        family: "'Playfair Display', serif",
                      }
                    }
                  }
                }}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analysis Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Explore the Analysis"
            subtitle="Dive deeper into specific aspects of our hotel visitor management analysis"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="heritage-card p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <BarChart2 className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Detailed Visualizations</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Explore interactive charts and graphs that illustrate booking patterns, 
                visitor demographics, seasonal trends, and more.
              </p>
              <Link to="/analysis/visualizations" className="btn-primary">
                View Visualizations
              </Link>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Key Insights</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Discover actionable insights and conclusions drawn from our comprehensive 
                analysis of Delhi's hotel visitor data.
              </p>
              <Link to="/analysis/insights" className="btn-primary">
                View Insights
              </Link>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <PieChart className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Complete Dataset</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Access the full analysis notebook on Google Colab for a deep dive into the 
                methodology and complete findings.
              </p>
              <a 
                href="https://colab.research.google.com/drive/175dE4uzsxtow-fsCUKMAk8aKmLddTC6d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Notebook
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg)`
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
            Looking for a Place to Stay?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Use our data-driven hotel recommendations to find the perfect accommodation for your Delhi visit.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/hotel-recommendations" className="btn-primary">
              Get Hotel Recommendations
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AnalysisOverview;