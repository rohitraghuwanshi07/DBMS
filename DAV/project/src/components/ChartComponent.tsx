import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement,
  PointElement,
  ArcElement,
  Title, 
  Tooltip, 
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement,
  PointElement,
  ArcElement,
  Title, 
  Tooltip, 
  Legend
);

type ChartType = 'bar' | 'line' | 'pie' | 'doughnut';

interface ChartComponentProps {
  type: ChartType;
  data: ChartData<'bar' | 'line' | 'pie' | 'doughnut', number[], string>;
  options?: ChartOptions<'bar' | 'line' | 'pie' | 'doughnut'>;
  height?: number;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ 
  type, 
  data, 
  options,
  height
}) => {
  const defaultOptions: ChartOptions<'bar' | 'line' | 'pie' | 'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        backgroundColor: 'rgba(31, 41, 55, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        bodyFont: {
          family: "'Poppins', sans-serif"
        },
        titleFont: {
          family: "'Playfair Display', serif",
          size: 14
        }
      }
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };
  
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <Bar data={data} options={mergedOptions} height={height} />;
      case 'line':
        return <Line data={data} options={mergedOptions} height={height} />;
      case 'pie':
        return <Pie data={data} options={mergedOptions} />;
      case 'doughnut':
        return <Doughnut data={data} options={mergedOptions} />;
      default:
        return <Bar data={data} options={mergedOptions} height={height} />;
    }
  };

  return (
    <div style={{ height: height ? `${height}px` : '400px' }}>
      {renderChart()}
    </div>
  );
};

export default ChartComponent;