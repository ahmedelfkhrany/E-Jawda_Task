import { BrowserRouter, Route, Routes } from "react-router-dom";

import CommercialRecords from "./pages/CommercialRecords/CommercialRecords";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommercialRecords />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
