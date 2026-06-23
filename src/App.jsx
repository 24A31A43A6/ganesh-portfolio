import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import ExplorePage from "./pages/ExplorePage";
import Portfolio from "./pages/Portfolio";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* Explore Page */}
      <Route
        path="/"
        element={<ExplorePage />}
      />

      <Route
        path="/explore"
        element={<ExplorePage />}
      />

      {/* Portfolio */}
      <Route
        path="/portfolio"
        element={<Portfolio />}
      />
    </Routes>
  );
}

export default App;