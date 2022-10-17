import { BrowserRouter, Route, Routes } from "react-router-dom";

import EstabsAndStatsPage from "./pages/EstabsAndStatsPage/EstabsAndStatsPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EstabsAndStatsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
