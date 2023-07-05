import {
  ThreekitProvider,
  Player,
  PortalToElement,
  FlatForm,
} from '@threekit-tools/treble';
import Index from './components/Pages/Index';
import { Routes, Route } from 'react-router-dom';
import PComp from './components/Player/PComp';
import CarPlayer from './components/Player/CarPlayer';
import Product from './components/Pages/Product';

const App = () => {

  return (
    <>
      <ThreekitProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/PComp" element={<PComp />} />
          <Route path="/Product" element={<Product />} />
        
        </Routes>
      </ThreekitProvider>
    </>
  );
};

export default App;
