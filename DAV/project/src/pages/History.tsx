import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';

const History = () => {
  const timelineEvents = [
    {
      year: "1000 BCE",
      title: "Early Settlements",
      description: "Archaeological evidence suggests that the Delhi area was inhabited as early as 1000 BCE, with settlements of the Painted Grey Ware culture."
    },
    {
      year: "736-1192 CE",
      title: "Tomara Dynasty",
      description: "The first recorded city in the Delhi area was built by the Tomara Rajputs. They built the Lal Kot, which later became the core of the first of Delhi's seven cities."
    },
    {
      year: "1192-1290",
      title: "Slave Dynasty",
      description: "After the defeat of Prithviraj Chauhan, Qutb-ud-din Aibak became the first Sultan of Delhi and founded the Slave Dynasty. The Qutub Minar was built during this period."
    },
    {
      year: "1290-1320",
      title: "Khilji Dynasty",
      description: "Alauddin Khilji expanded the Delhi Sultanate and built Siri Fort, the second city of Delhi."
    },
    {
      year: "1320-1414",
      title: "Tughlaq Dynasty",
      description: "Muhammad bin Tughlaq built Tughlaqabad, the third city of Delhi. He also attempted to move the capital to Daulatabad but later reversed the decision."
    },
    {
      year: "1526-1857",
      title: "Mughal Empire",
      description: "Babur established the Mughal Empire after defeating Ibrahim Lodi at the First Battle of Panipat. Shah Jahan built Shahjahanabad (Old Delhi), which remained the capital until the British colonial period."
    },
    {
      year: "1911",
      title: "British Colonial Era",
      description: "King George V announced the shifting of the capital from Calcutta to Delhi. New Delhi was planned and built by British architects Sir Edwin Lutyens and Sir Herbert Baker."
    },
    {
      year: "1947",
      title: "Independence",
      description: "After India gained independence, Delhi became the capital of the newly formed republic. It has since grown into one of the world's largest metropolitan areas."
    }
  ];

  return (
    <>
      <Hero 
        title="The Rich History of Delhi"
        subtitle="Explore the fascinating journey of Delhi through centuries of rulers, dynasties, and cultural evolution"
        imageSrc="https://images.pexels.com/photos/4916556/pexels-photo-4916556.jpeg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Delhi Through The Ages"
            subtitle="A city that has witnessed the rise and fall of numerous empires and dynasties"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 mb-4">
                Delhi, one of the oldest continually inhabited cities in the world, has been the center of power for 
                numerous dynasties and empires throughout history. Its strategic location along the Yamuna River 
                and at the crossroads of important trade routes made it a coveted prize for rulers and conquerors.
              </p>
              <p className="text-gray-600 mb-4">
                The city has witnessed the rise and fall of the Tomars, Chauhans, Delhi Sultanate, Mughals, 
                and finally the British Empire. Each ruler left their mark on the city, often building a new 
                city alongside the old, which is why Delhi is sometimes referred to as "the city of seven cities."
              </p>
              <p className="text-gray-600">
                Today's Delhi is a fascinating blend of these historical layers, where ancient monuments stand 
                alongside colonial architecture and modern developments, telling the story of its rich and 
                complex history.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg" 
                alt="Historical Delhi" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg" 
                alt="Ancient architecture" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/2183526/pexels-photo-2183526.jpeg" 
                alt="Delhi monument" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg" 
                alt="Historical building" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary-100 hero-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Timeline of Delhi"
            subtitle="Key moments that shaped the history of Delhi through the centuries"
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-primary-100"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'} flex-1`}>
                    <div className="heritage-card p-6">
                      <h3 className="text-xl font-serif font-bold text-accent-500">{event.year}</h3>
                      <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seven Cities of Delhi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="The Seven Cities of Delhi"
            subtitle="Throughout its history, Delhi has been rebuilt seven times, each creating a new city"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="heritage-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg)` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Lal Kot & Qila Rai Pithora</h3>
                <p className="text-gray-600">The first city of Delhi, built by the Tomars and later expanded by Prithviraj Chauhan in the 12th century.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="heritage-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/760707/pexels-photo-760707.jpeg)` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Siri</h3>
                <p className="text-gray-600">Built by Alauddin Khilji in the early 14th century, this was the second city of Delhi.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="heritage-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/2437293/pexels-photo-2437293.jpeg)` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Tughlaqabad</h3>
                <p className="text-gray-600">The third city, established by Ghiyasuddin Tughlaq in the 14th century, known for its massive fort.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="heritage-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg)` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Jahanpanah</h3>
                <p className="text-gray-600">The fourth city, built by Muhammad bin Tughlaq to enclose the area between Qila Rai Pithora and Siri.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="heritage-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/4350296/pexels-photo-4350296.jpeg)` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Firozabad</h3>
                <p className="text-gray-600">The fifth city, built by Firoz Shah Tughlaq on the banks of the Yamuna River in the 14th century.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="heritage-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg)` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Shahjahanabad</h3>
                <p className="text-gray-600">The sixth city, now known as Old Delhi, built by Mughal Emperor Shah Jahan in the 17th century.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="heritage-card overflow-hidden lg:col-start-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/13267173/pexels-photo-13267173.jpeg)` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">New Delhi</h3>
                <p className="text-gray-600">The seventh city, designed by British architects Edwin Lutyens and Herbert Baker in the early 20th century.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Legacy */}
      <section 
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/13402857/pexels-photo-13402857.jpeg)`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Cultural Legacy</h2>
            <p className="text-lg mb-8">
              Delhi's rich history has created a unique cultural tapestry that blends influences from various 
              dynasties, religions, and traditions. From its magnificent architecture to its literature, 
              music, cuisine, and festivals, Delhi's cultural heritage continues to thrive and evolve.
            </p>
            <p className="text-lg italic">
              "Delhi has been the witness to the glory of the Rajputs, the might of the Sultans, the grandeur of the Mughals, 
              the elegance of the British, and the diversity of modern India."
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default History;