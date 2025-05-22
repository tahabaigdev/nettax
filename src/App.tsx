import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { LenisProvider } from "./components/providers/LenisProvider";
import Home from "./pages/Home";

const App = () => {
  return (
    <LenisProvider>
      <Header />
      <Home />
      <Footer />
    </LenisProvider>
  );
};

export default App;
