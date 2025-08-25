import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  imageSrc,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="heritage-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div 
        className="h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;