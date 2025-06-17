import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import TaxCalculator from "./pages/TaxCalculator";
import About from "./pages/About";
import PriceList from "./pages/PriceList";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import OurServices from "./pages/OurServices";
import NettaxDost from "./pages/NettaxDost";
import NettaxGuru from "./pages/NettaxGuru";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/nettax-dost" element={<NettaxDost />} />
        <Route path="/nettax-guru" element={<NettaxGuru />} />
        <Route path="/tax-calculator" element={<TaxCalculator />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
