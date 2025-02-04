import { Routes, Route } from 'react-router-dom';
import Home from '../../presentation/pages/Home';
import About from '../../presentation/pages/About';
import Blog from '../../presentation/pages/Blog';
import Pricing from '../../presentation/pages/Pricing';
import Services from '../../presentation/pages/Services';
import UseCases from '../../presentation/pages/UseCases';

const Router = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/useCases' element={<UseCases />} />
        </Routes>
    )
}

export default Router;
