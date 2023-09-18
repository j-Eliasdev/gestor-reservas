import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ServicesView from "./pages/servicesView";
import Portfolio from "./pages/portfolio";
import Details from "./pages/details";
import BtnTheme from "./components/buttonMode";

function App() {
  return (
    <>
      < BtnTheme/>
      <main className="bg:white flex items-center flex-col dark:bg-slate-950 min-h-screen">
        <HeroSection />
        <div className=" md:w-8/12">
          <Routes>
            <Route path="/" element={<ServicesView />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
