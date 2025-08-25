import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, suggestions, or custom tour packages"
        imageSrc="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
      />

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Get In Touch"
            subtitle="We'd love to hear from you. Reach out to us for any inquiries or assistance."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="heritage-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                Delhi Tourism Office<br />
                Connaught Place<br />
                New Delhi, 110001<br />
                India
              </p>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">
                General Inquiries<br />
                +91 11 2345 6789
              </p>
              <p className="text-gray-600">
                Tour Packages<br />
                +91 11 9876 5432
              </p>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">
                General Inquiries<br />
                info@delhiexplorer.com
              </p>
              <p className="text-gray-600">
                Tour Packages<br />
                tours@delhiexplorer.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
              <div className="heritage-card p-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label 
                      htmlFor="name" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="email" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="subject" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">Find Us</h2>
              <div className="heritage-card p-6">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1628509097465!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Delhi Map"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="p-4 bg-primary-50 border-l-4 border-primary-500 rounded">
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about Delhi tourism and our services"
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="heritage-card p-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-serif font-bold mb-2">What is the best time to visit Delhi?</h3>
              <p className="text-gray-600">
                The best time to visit Delhi is from October to March when the weather is pleasant. 
                Summers (April to June) can be extremely hot, while monsoons (July to September) bring high humidity.
              </p>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif font-bold mb-2">How can I get around in Delhi?</h3>
              <p className="text-gray-600">
                Delhi has an excellent public transportation system. The Metro is clean, efficient, and connects most 
                tourist destinations. Auto-rickshaws, taxis, and ride-sharing services are also readily available.
              </p>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-bold mb-2">Do you offer customized tour packages?</h3>
              <p className="text-gray-600">
                Yes, we offer customized tour packages tailored to your preferences, budget, and schedule. 
                Please contact our tour department at tours@delhiexplorer.com for more information.
              </p>
            </motion.div>
            
            <motion.div 
              className="heritage-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-serif font-bold mb-2">How can I access the complete hotel visitor analysis?</h3>
              <p className="text-gray-600">
                You can access our complete hotel visitor management analysis through the Google Colab notebook 
                available <a 
                  href="https://colab.research.google.com/drive/175dE4uzsxtow-fsCUKMAk8aKmLddTC6d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-500 font-semibold hover:underline"
                >
                  here
                </a>. It contains detailed data visualizations, methodologies, and insights about Delhi's hotel industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;