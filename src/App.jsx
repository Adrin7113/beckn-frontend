import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-landingHero bg-center bg-cover">
                <Landing />
              </div>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
