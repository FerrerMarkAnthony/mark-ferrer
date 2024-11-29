import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamNavbar from "./components/TeamNavbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";

function App() {
  return (
    <>
      <Router>
        <TeamNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Team />}>
            <Route path=":id" element={<TeamDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
