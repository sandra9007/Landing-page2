import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "./pages/new";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<New />} />
      </Routes>
    </Router>
  );
}

export default App;
