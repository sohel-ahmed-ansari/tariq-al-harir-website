import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components/layout";
import Brochure from "./pages/Brochure";
import Home from "./pages/Home";

// TODO: Uncomment when videos are ready
// import Videos from "./pages/Videos";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* TODO: Uncomment when videos are ready */}
            {/* <Route path="/videos" element={<Videos />} /> */}
            <Route path="/brochure" element={<Brochure />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
