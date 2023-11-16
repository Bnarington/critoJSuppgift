
import './App.css';
import './styles/sitewide_styles/SiteWide.css'
import './styles/sitewide_styles/buttons.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SiteIndex from './SiteIndex.js'
import SiteContact from './SiteContact.js'
import NotFound from './NotFound.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<SiteIndex />} />
        <Route path ="/contact" element={<SiteContact />} />
        <Route path ="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
