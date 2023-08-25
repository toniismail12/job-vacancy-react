import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Detail } from "../pages";
import { ChangePasswordPage, CreateJobPage, DetailListJob, HomeDashboard, ManagementData, UpdateJobPage } from "../pages/dashboard";
import NotFound from "../pages/404";
import SidebarContext from "../contexts";
import { useState } from "react";

function App() {
  
  const [show_sidebar, set_show_sidebar] = useState("yes");

  return (
    <SidebarContext.Provider value={{ show_sidebar, set_show_sidebar }}>
      <Router basename="/">
        <Routes>
          
          {/* landing page */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          {/* dashboard */}
          <Route exact path="/dashboard" element={<HomeDashboard />} />
          <Route exact path="/management-data" element={<ManagementData />} />
          <Route exact path="/create-job" element={<CreateJobPage />} />
          <Route exact path="/update-job/:id" element={<UpdateJobPage />} />
          <Route exact path="/detail-list-job/:id" element={<DetailListJob />} />
          <Route exact path="/change-password" element={<ChangePasswordPage />} />

          {/* not found page */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </Router>
    </SidebarContext.Provider>
  );
}

export default App;
