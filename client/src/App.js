import { BrowserRouter,Routes,Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Loading from "./components/Loading";
import ClusterMap from "./components/map/ClusterMap";
import NavBar from "./components/NavBar";
import Notification from "./components/Notification";
import Room from "./components/rooms/Room";
import Login from "./components/user/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <ClusterMap/>
      <Loading />
      <Notification />
      <BrowserRouter>
        <Login />
        <NavBar />
        <BottomNav />
      </BrowserRouter>
      <Room /> */}
      <Loading />
      <Notification />
      <BrowserRouter>
        <Routes>
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Room />
      
    </>
  );
}

export default App;
