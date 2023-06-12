import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/Profile/ProfilePage";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileDetailPage from "./components/profileDetails/ProfileDetailsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<ProfilePage/>}/>
        <Route exact path="/" element={<SignIn/>}/>
        <Route exact path="/profileDetail" element={<ProfileDetailPage/>} />
      </Routes>
    </>
  );
};

export default App;
