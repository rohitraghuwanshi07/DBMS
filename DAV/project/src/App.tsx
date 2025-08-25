import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import PlacesToVisit from './pages/PlacesToVisit';
import AnalysisOverview from './pages/AnalysisOverview';
import AnalysisVisualizations from './pages/AnalysisVisualizations';
import AnalysisInsights from './pages/AnalysisInsights';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/places-to-visit" element={<PlacesToVisit />} />
        <Route path="/analysis" element={<AnalysisOverview />} />
        <Route path="/analysis/visualizations" element={<AnalysisVisualizations />} />
        <Route path="/analysis/insights" element={<AnalysisInsights />} />
      </Routes>
    </Layout>
  );
}

export default App;